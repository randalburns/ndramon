# Copyright 2015 Open Connectome Project (http://openconnecto.me)
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

from django.shortcuts import render
from django.shortcuts import redirect
from django.shortcuts import get_object_or_404
from django.http import HttpResponse 

from django.template import RequestContext 

from models import VizProject 
from models import VizLayer 

import urllib2

VALID_SERVERS = {
    'localhost':'localhost',
    'dsp061':'dsp061.pha.jhu.edu',
    'dsp062':'dsp062.pha.jhu.edu',
    'dsp063':'dsp063.pha.jhu.edu',
    'openconnecto.me':'openconnecto.me',
    'braingraph1':'braingraph1.cs.jhu.edu',
    'braingraph1dev':'braingraph1dev.cs.jhu.edu',
    'braingraph2':'braingraph2.cs.jhu.edu',
    'brainviz1':'brainviz1.cs.jhu.edu',
    }
def default(request):
  return redirect('http://google.com')

def viewproject(request, webargs):
  # query for the project from the db
  #[project_name, view] = webargs.split('/', 1) 
  project_name = webargs 
  project = get_object_or_404(VizProject, pk=project_name) 
  
  context = {'project_name': project_name, 'project': project}
  return render(request, 'ocpviz/viewer.html', context)

def query(request, queryargs):
  # redirects a query to the specified server 
  # expected syntax is:
  # ocp/ocpviz/query/<<server>>/<<query>> 
  # e.g. ocp/ocpviz/query/dsp061/ca/kharris15apical/info/
  [server, oquery] = queryargs.split('/', 1)
  if server not in VALID_SERVERS.keys():
    return HttpResponse("Error: Server not valid.")

  # make get request
  if server == 'localhost':
    addr = Site.objects.get_current().domain + '/ocp/' + oquery
  else: 
    addr = 'http://' + VALID_SERVERS[server] + '/ocp/' + oquery
  try:
    r = urllib2.urlopen(addr)
  except urllib2.HTTPError, e:
    r = '[ERROR]: ' + str(e.getcode())

  return HttpResponse(r)

