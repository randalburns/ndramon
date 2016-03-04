# Copyright 2014 NeuroData (http://neurodata.io)
# 
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
# 
#     http://www.apache.org/licenses/LICENSE-2.0
# 
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import django.http
from django.views.decorators.cache import cache_control
import MySQLdb
import cStringIO
import re

import ndwsrest
import ndwsprojingest

from ndwserror import NDWSError
import logging
logger=logging.getLogger("neurodata")


GET_SLICE_SERVICES = ['xy', 'yz', 'xz']
GET_ANNO_SERVICES = ['xyanno', 'yzanno', 'xzanno']
POST_SERVICES = ['hdf5', 'npz', 'hdf5_async', 'propagate', 'tiff', 'blosc']


def cutout (request, webargs):
  """Restful URL for all read services to annotation projects"""

  try:
    m = re.match(r"(\w+)/(?P<channel>[\w+,/-]+)?/?(xy|xz|yz|tiff|hdf5|jpeg|blosc|npz|zip|id|diff|ids|xyanno|xzanno|yzanno)/([\w,/-]*)$", webargs)
    [token, channel, service, cutoutargs] = [i for i in m.groups()]

    if channel is None:
      webargs = '{}/default/{}/{}'.format(token, service, cutoutargs)

  except Exception, e:
    logger.warning("Incorrect format for arguments {}. {}".format(webargs, e))
    raise NDWSError("Incorrect format for arguments {}. {}".format(webargs, e))

  try:
    # GET methods
    if request.method == 'GET':
      if service in GET_SLICE_SERVICES+GET_ANNO_SERVICES:
        return django.http.HttpResponse(ndwsrest.getCutout(webargs), content_type="image/png" )
      elif service in ['hdf5']:
        fname = re.sub ( r',','_', webargs )
        fname = re.sub ( r'/','-', fname )
        response = django.http.HttpResponse(ndwsrest.getCutout(webargs), content_type="product/hdf5" )
        response['Content-Disposition'] = "attachment; filename={}ndcutout.h5".format(fname)
        return response
      elif service in ['blosc', 'diff']:
        fname = re.sub ( r',','_', webargs )
        fname = re.sub ( r'/','-', fname )
        response = django.http.HttpResponse(ndwsrest.getCutout(webargs), content_type="product/blosc" )
        response['Content-Disposition'] = "attachment; filename={}ndcutout.blosc".format(fname)
        return response
      elif service in ['jpeg']:
        fname = re.sub ( r',','_', webargs )
        fname = re.sub ( r'/','-', fname )
        response = django.http.HttpResponse(ndwsrest.getCutout(webargs), content_type="product/jpeg" )
        response['Content-Disposition'] = "attachment; filename={}ndcutout.jpeg".format(fname)
        return response
      elif service in ['npz']:
        return django.http.HttpResponse(ndwsrest.getCutout(webargs), content_type="product/npz" )
      elif service in ['tiff']:
        # build a file name from the webarguments
        fname = re.sub ( r',','_', webargs )
        fname = re.sub ( r'/','-', fname )
        response = django.http.HttpResponse(ndwsrest.getCutout(webargs), content_type="image/tiff" )
        response['Content-Disposition'] = "attachment; filename={}ndcutout.tif".format(fname)
        return response
      elif service in ['zip']:
        return django.http.HttpResponse(ndwsrest.getCutout(webargs), content_type="product/zip" )
      elif service in ['id','ids']:
        return django.http.HttpResponse(ndwsrest.getCutout(webargs))
      else:
        logger.warning("HTTP Bad request. Could not find service {}".format(service))
        return django.http.HttpResponseBadRequest("Could not find service {}".format(service))

    # RBTODO control caching?
    # POST methods
    elif request.method == 'POST':

      if service in POST_SERVICES:
        django.http.HttpResponse(ndwsrest.putCutout(webargs, request.body))
        return django.http.HttpResponse("Success", content_type='text/html')
      else:
        logger.warning("HTTP Bad request. Could not find service {}".format(service))
        return django.http.HttpResponseBadRequest("Could not find service {}".format(service))

    else:
      logger.warning("Invalid HTTP method {}. Not GET or POST.".format(request.method))
      return django.http.HttpResponseBadRequest("Invalid HTTP method {}. Not GET or POST.".format(request.method))

  except NDWSError, e:
    return django.http.HttpResponseNotFound(e.value)
  except MySQLdb.Error, e:
    return django.http.HttpResponseNotFound(e)
  except Exception, e:
    logger.exception("Unknown exception in getCutout. {}".format(e))
    raise NDWSError("Unknown exception in getCutout. {}".format(e))

#@cache_control(no_cache=True)
def nifti (request, webargs):
  """Get put interface for nifti files"""

  try:
    if request.method == 'GET':
      fname = "".join([x if x.isalnum() else "_" for x in webargs])
      response = django.http.HttpResponse(ndwsrest.getNIFTI(webargs), content_type="product/nii" )
      response['Content-Disposition'] = "attachment; filename={}.nii".format(fname)
      return response
    elif request.method == 'POST':
      return django.http.HttpResponse(ndwsrest.putNIFTI(webargs,request.body))
  except NDWSError, e:
    return django.http.HttpResponseNotFound(e.value)
  except MySQLdb.Error, e:
    return django.http.HttpResponseNotFound(e)
  except Exception, e:
    logger.exception("Unknown exception in NIFTI. {}".format(e))
    raise NDWSError("Unknown exception in NIFTI. {}".format(e))
    raise


#@cache_control(no_cache=True)
def swc (request, webargs):
  """Get put interface for swc tracing files"""
  
  try:
    if request.method == 'GET':
      fname = "".join([x if x.isalnum() else "_" for x in webargs])
      response = django.http.HttpResponse(ndwsrest.getSWC(webargs), content_type="product/swc" )
      response['Content-Disposition'] = "attachment; filename={}.swc".format(fname)
      return response
    elif request.method == 'POST':
      return django.http.HttpResponse(ndwsrest.putSWC(webargs,request.body))
  except NDWSError, e:
    return django.http.HttpResponseNotFound(e.value)
  except MySQLdb.Error, e:
    return django.http.HttpResponseNotFound(e)
  except Exception, e:
    logger.exception("Unknown exception in SWC. {}".format(e))
    raise NDWSError("Unknown exception in SWC. {}".format(e))
    raise

def annotation (request, webargs):
  """Get put object interface for RAMON objects"""
  [token, channel, rest] = webargs.split('/',2)

  try:
    if request.method == 'GET':
      # check for json vs hdf5 
      if rest.split('/')[1] == 'json':
        return django.http.HttpResponse(ndwsrest.getAnnotation(webargs), content_type="application/json" )
      else:
        # return hdf5 
        return django.http.HttpResponse(ndwsrest.getAnnotation(webargs), content_type="product/hdf5" )
    elif request.method == 'POST':
      #if service == 'hdf5_async':
        #return django.http.HttpResponse( ndwsrest.putAnnotationAsync(webargs,request.body) )
      #else:
      return django.http.HttpResponse(ndwsrest.putAnnotation(webargs,request.body))
    elif request.method == 'DELETE':
      ndwsrest.deleteAnnotation(webargs)
      return django.http.HttpResponse ("Success", content_type='text/html')
  except NDWSError, e:
    return django.http.HttpResponseNotFound(e.value)
  except MySQLdb.Error, e:
    return django.http.HttpResponseNotFound(e)
  except Exception, e:
    logger.exception("Unknown exception in annotation. {}".format(e))
    raise NDWSError("Unknown exception in annotation. {}".format(e))


#@cache_control(no_cache=True)
def csv (request, webargs):
  """Get (not yet put) csv interface for RAMON objects"""

  try:
    if request.method == 'GET':
      return django.http.HttpResponse(ndwsrest.getCSV(webargs), content_type="text/html" )
  except NDWSError, e:
    return django.http.HttpResponseNotFound(e.value)
  except MySQLdb.Error, e:
    return django.http.HttpResponseNotFound(e)
  except Exception, e:
    logger.exception("Unknown exception in csv. {}".format(e))
    raise NDWSError("Unknown exception in csv. {}".format(e))


#@cache_control(no_cache=True)
def queryObjects ( request, webargs ):
  """Return a list of objects matching predicates and cutout"""

  try:
    if request.method == 'GET':
      return django.http.HttpResponse(ndwsrest.queryAnnoObjects(webargs), content_type="product/hdf5") 
    elif request.method == 'POST':
      return django.http.HttpResponse(ndwsrest.queryAnnoObjects(webargs,request.body), content_type="product/hdf5") 
    
  except NDWSError, e:
    return django.http.HttpResponseNotFound(e.value)
  except MySQLdb.Error, e:
    return django.http.HttpResponseNotFound(e)
  except Exception, e:
    logger.exception("Unknown exception in listObjects. {}".format(e))
    raise NDWSError("Unknown exception in listObjects. {}".format(e))


def catmaid (request, webargs):
  """Convert a CATMAID request into an cutout."""
  
  try:
    catmaidimg = ndwsrest.ndcatmaid_legacy(webargs)

    fobj = cStringIO.StringIO ( )
    catmaidimg.save ( fobj, "PNG" )
    fobj.seek(0)
    return django.http.HttpResponse(fobj.read(), content_type="image/png")

  except NDWSError, e:
    return django.http.HttpResponseNotFound(e.value)
  except MySQLdb.Error, e:
    return django.http.HttpResponseNotFound(e)
  except Exception, e:
    logger.exception("Unknown exception in catmaid {}.".format(e))
    raise NDWSError("Unknown exception in catmaid {}.".format(e))


#@cache_control(no_cache=True)
def publictokens (request, webargs):
  """Return list of public tokens"""
  try:  
    return django.http.HttpResponse(ndwsrest.publicTokens(webargs), content_type="application/json" )
  except NDWSError, e:
    return django.http.HttpResponseNotFound(e.value)
  except MySQLdb.Error, e:
    return django.http.HttpResponseNotFound(e)
  except Exception, e:
    logger.exception("Unknown exception in publictokens. {}".format(e))
    raise NDWSError("Unknown exception in publictokens. {}".format(e))

def publicdatasets (request, webargs):
  """Return list of public datasets"""
  try:  
    return django.http.HttpResponse(ndwsrest.publicDatasets(webargs), content_type="application/json" )
  except NDWSError, e:
    return django.http.HttpResponseNotFound(e.value)
  except MySQLdb.Error, e:
    return django.http.HttpResponseNotFound(e)
  except Exception, e:
    logger.exception("Unknown exception in publictokens. {}".format(e))
    raise NDWSError("Unknown exception in publictokens. {}".format(e))

#@cache_control(no_cache=True)
def jsoninfo (request, webargs):
  """Return project and dataset configuration information"""

  try:  
    return django.http.HttpResponse(ndwsrest.jsonInfo(webargs), content_type="application/json" )
  except NDWSError, e:
    return django.http.HttpResponseNotFound(e.value)
  except MySQLdb.Error, e:
    return django.http.HttpResponseNotFound(e)
  except Exception, e:
    logger.exception("Unknown exception in jsoninfo. {}".format(e))
    raise NDWSError("Unknown exception in jsoninfo. {}".format(e))

def xmlinfo (request, webargs):
  """Return project and dataset configuration information"""

  try:  
    return django.http.HttpResponse(ndwsrest.xmlInfo(webargs), content_type="application/xml" )
  except NDWSError, e:
    return django.http.HttpResponseNotFound(e.value)
  except MySQLdb.Error, e:
    return django.http.HttpResponseNotFound(e)
  except Exception, e:
    logger.exception("Unknown exception in xmlinfo. {}".format(e))
    raise NDWSError("Unknown exception in xmlinfo. {}".format(e))

#@cache_control(no_cache=True)
def projinfo (request, webargs):
  """Return project and dataset configuration information"""
  
  try:  
    return django.http.HttpResponse(ndwsrest.projInfo(webargs), content_type="product/hdf5" )
  except NDWSError, e:
    return django.http.HttpResponseNotFound(e.value)
  except MySQLdb.Error, e:
    return django.http.HttpResponseNotFound(e)
  except Exception, e:
    logger.exception("Unknown exception in projInfo. {}".format(e))
    raise NDWSError("Unknown exception in projInfo. {}".format(e))


def mcFalseColor (request, webargs):
  """Cutout of multiple channels with false color rendering"""

  try:
    return django.http.HttpResponse(ndwsrest.mcFalseColor(webargs), content_type="image/png" )
  except NDWSError, e:
    return django.http.HttpResponseNotFound(e.value)
  except MySQLdb.Error, e:
    return django.http.HttpResponseNotFound(e)
  except Exception, e:
    logger.exception("Unknown exception in mcFalseColor. {}".format(e))
    raise NDWSError("Unknown exception in mcFalseColor. {}".format(e))

#@cache_control(no_cache=True)
def reserve (request, webargs):
  """Preallocate a range of ids to an application."""

  try:  
    return django.http.HttpResponse(ndwsrest.reserve(webargs), content_type="application/json" )
  except NDWSError, e:
    return django.http.HttpResponseNotFound(e.value)
  except MySQLdb.Error, e:
    return django.http.HttpResponseNotFound(e)
  except Exception, e:
    logger.exception("Unknown exception in reserve. {}".format(e))
    raise NDWSError("Unknown exception in reserve. {}".format(e))

def setField (request, webargs):
  """Set an individual RAMON field for an object"""

  try:
    ndwsrest.setField(webargs)
    return django.http.HttpResponse()
  except NDWSError, e:
    return django.http.HttpResponseNotFound(e.value)
  except MySQLdb.Error, e:
    return django.http.HttpResponseNotFound(e)
  except Exception, e:
    logger.exception("Unknown exception in setField. {}".format(e))
    raise NDWSError("Unknown exception in setField. {}".format(e))

#@cache_control(no_cache=True)
def getField (request, webargs):
  """Get an individual RAMON field for an object"""

  try:
    return django.http.HttpResponse(ndwsrest.getField(webargs), content_type="text/html" )
  except NDWSError, e:
    return django.http.HttpResponseNotFound(e.value)
  except MySQLdb.Error, e:
    return django.http.HttpResponseNotFound(e)
  except Exception, e:
    logger.exception("Unknown exception in getField. {}".format(e))
    raise NDWSError("Unknown exception in getField. {}".format(e))

#@cache_control(no_cache=True)
def getPropagate (request, webargs):
  """ Get the value for Propagate field for a given project """

  try:
    return django.http.HttpResponse(ndwsrest.getPropagate(webargs), content_type="text/html" )
  except NDWSError, e:
    return django.http.HttpResponseNotFound(e.value)
  except MySQLdb.Error, e:
    return django.http.HttpResponseNotFound(e)
  except Exception, e:
    logger.exception("Unknown exception in getPropagate. {}".format(e))
    raise NDWSError("Unknown exception in getPropagate. {}".format(e))

def setPropagate (request, webargs):
  """ Set the value for Propagate field for a given project """

  try:
    ndwsrest.setPropagate(webargs)
    return django.http.HttpResponse()
  except NDWSError, e:
    return django.http.HttpResponseNotFound(e.value)
  except MySQLdb.Error, e:
    return django.http.HttpResponseNotFound(e)
  except Exception, e:
    logger.exception("Unknown exception in setPropagate. {}".format(e))
    raise NDWSError("Unknown exception in setPropagate. {}".format(e))

def merge (request, webargs):
  """Merge annotation objects"""

  try:
    return django.http.HttpResponse(ndwsrest.merge(webargs), content_type="text/html" )
  except NDWSError, e:
    return django.http.HttpResponseNotFound(e.value)
  except MySQLdb.Error, e:
    return django.http.HttpResponseNotFound(e)
  except Exception, e:
    logger.exception("Unknown exception in global Merge. {}".format(e))
    raise NDWSError("Unknown exception in global Merge. {}".format(e))

def exceptions (request, webargs):
  """Return a list of multiply labeled pixels in a cutout region"""

  try:
    return django.http.HttpResponse(ndwsrest.exceptions(webargs), content_type="product/hdf5" )
  except NDWSError, e:
    return django.http.HttpResponseNotFound(e.value)
  except MySQLdb.Error, e:
    return django.http.HttpResponseNotFound(e)
  except Exception, e:
    logger.exception("Unknown exception in exceptions Web service. {}".format(e))
    raise NDWSError("Unknown exception in exceptions Web service. {}".format(e))

#@cache_control(no_cache=True)
def minmaxProject (request, webargs):
  """Restful URL for all read services to annotation projects"""
 
  try:
    return django.http.HttpResponse(ndwsrest.minmaxProject(webargs), content_type="image/png" )
  except NDWSError, e:
    return django.http.HttpResponseNotFound(e.value)
  except MySQLdb.Error, e:
    return django.http.HttpResponseNotFound(e)
  except Exception, e:
    logger.exception("Unknown exception in (min|max) projection Web service. {}".format(e))
    raise NDWSError("Unknown exception in (min|max) projection Web service. {}".format(e))

def autoIngest(request, webargs):
  """RESTful URL for creating a project using a JSON file"""

  try:
    return django.http.HttpResponse(ndwsprojingest.autoIngest(webargs, request.body), content_type="application/json")
  except NDWSError, e:
    return django.http.HttpResponseNotFound()
  except Exception, e:
    logger.exception("Unknown exception in jsonProject Web service. {}".format(e))
    raise NDWSError("Unknown exception in jsonProject Web service. {}".format(e))

def createChannel(request, webargs):
  """RESTful URL for creating a list of channels using a JSON file"""

  try:
    return django.http.HttpResponse(ndwsprojingest.createChannel(webargs, request.body), content_type="application/json")
  except NDWSError, e:
    return django.http.HttpResponseNotFound()
  except Exception, e:
    logger.exception("Unknown exception in jsonProject Web service. {}".format(e))
    raise NDWSError("Unknown exception in jsonProject Web service. {}".format(e))

def deleteChannel(request, webargs):
  """RESTful URL for deleting a list of channels using a JSON file"""

  try:
    return django.http.HttpResponse(ndwsprojingest.deleteChannel(webargs, request.body), content_type="application/json")
  except NDWSError, e:
    return django.http.HttpResponseNotFound()
  except Exception, e:
    logger.exception("Unknown exception in jsonProject Web service. {}".format(e))
    raise NDWSError("Unknown exception in jsonProject Web service. {}".format(e))
