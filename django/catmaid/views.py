# Copyright 2014 Open Connectome Project (http://openconnecto.me)
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

import re
import django.http
from django.views.decorators.cache import cache_control
import cStringIO

import mcfccatmaid
import simplecatmaid
#import colorcatmaid

# Errors we are going to catch
from ocpcaerror import OCPCAError

import logging
logger=logging.getLogger("ocp")


# multi-channel false color
def mcfccatmaidview (request, webargs):
  """multi-channel false color"""

  try:
    mc = mcfccatmaid.MCFCCatmaid()
    imgfobj = mc.getTile(webargs)
    return django.http.HttpResponse(imgfobj.read(), content_type="image/png")

  except OCPCAError, e:
    return django.http.HttpResponseNotFound(e)
  except Exception, e:
    logger.exception("Unknown exception in mcfccatmaidview: {}".format(e) )
    raise

# single-channel choose the color
#def colorcatmaidview (request, webargs):
  #"""single-channel choose the color"""

  #try:
    #cc = colorcatmaid.ColorCatmaid()
    #imgfobj = cc.getTile(webargs)
    #return django.http.HttpResponse(imgfobj.read(), content_type="image/png")

  #except OCPCAError, e:
    #return django.http.HttpResponseNotFound(e)
  #except Exception, e:
    #logger.exception("Unknown exception in colorcatmaidview: %s" % e )
    #raise

# simple per-tile interface
def simplecatmaidview (request, webargs):
  """Convert a CATMAID request into an cutout."""
  
  try:
    sc = simplecatmaid.SimpleCatmaid()
    imgfobj = sc.getTile(webargs)
    return django.http.HttpResponse(imgfobj.read(), content_type="image/png")

  except OCPCAError, e:
    return django.http.HttpResponseNotFound(e)
  except Exception, e:
    logger.exception("Unknown exception in simplecatmaidview: {}".format(e) )
    raise

# simple per-tile interface
def simplevikingview (request, webargs):
  """Convert a Viking request into a simple catmaid cutout."""
 
  try:
    # argument of format token/volume/channel/resolution/Xtile_Ytile_Ztile
    m = re.match(r'(\w+)/volume/(\w+)/(\d+)/X(\d+)_Y(\d+)_Z(\d+)$', webargs)
    [token, channel, resolution, xtile, ytile, ztile] = [i for i in m.groups()]

    # rewriting args here into catmaid format token/channel/slice_type/z/x_y_res.png
    webargs = '{}/{}/xy/{}/{}_{}_{}.png'.format(token, channel, ztile, xtile, ytile, resolution)

    sc = simplecatmaid.SimpleCatmaid()
    imgfobj = sc.getTile(webargs)
    return django.http.HttpResponse(imgfobj.read(), content_type="image/png")

  except OCPCAError, e:
    return django.http.HttpResponseNotFound(e)
  except Exception, e:
    logger.exception("Unknown exception in simplecatmaidview: {}".format(e) )
    raise
