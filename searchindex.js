Search.setIndex({docnames:["api/autoingest_api","api/data_api","api/graphgen_api","api/info_api","api/nd_types","api/nifti_api","api/overlay_api","api/propagate_api","api/public_api","api/ramon_api","api/resource_api","api/slice_api","api/stats_api","api/swc_api","api/tile_api","index","sphinx/authentication","sphinx/config","sphinx/console","sphinx/datamodel","sphinx/faq","sphinx/ingesting","sphinx/introduction"],envversion:50,filenames:["api/autoingest_api.rst","api/data_api.rst","api/graphgen_api.rst","api/info_api.rst","api/nd_types.rst","api/nifti_api.rst","api/overlay_api.rst","api/propagate_api.rst","api/public_api.rst","api/ramon_api.rst","api/resource_api.rst","api/slice_api.rst","api/stats_api.rst","api/swc_api.rst","api/tile_api.rst","index.rst","sphinx/authentication.rst","sphinx/config.rst","sphinx/console.rst","sphinx/datamodel.rst","sphinx/faq.rst","sphinx/ingesting.rst","sphinx/introduction.rst"],objects:{"":{"(string:host_server_name)/nd/overlay/(float:alpha_value)/(string:first_server_name)/(string:first_token_name)/(string:first_channel_name)/(string:second_server_name)/(string:second_token_name)/(string:second_channel_name)/xy/(int:resolution)/(int:min_x),(int:max_x)/(int:min_y),(int:max_y)/(int:z_slice)/(int:time_slice)/":[6,0,1,"post-(string-host_server_name)-nd-overlay-(float-alpha_value)-(string-first_server_name)-(string-first_token_name)-(string-first_channel_name)-(string-second_server_name)-(string-second_token_name)-(string-second_channel_name)-xy-(int-resolution)-(int-min_x),(int-max_x)-(int-min_y),(int-max_y)-(int-z_slice)-(int-time_slice)-"],"(string:host_server_name)/nd/overlay/(float:alpha_value)/(string:first_server_name)/(string:first_token_name)/(string:first_channel_name)/(string:second_server_name)/(string:second_token_name)/(string:second_channel_name)/xz/(int:resolution)/(int:min_x),(int:max_x)/(int:y_slice)/(int:min_z),(int:max_z)/(int:time_slice/":[6,0,1,"post-(string-host_server_name)-nd-overlay-(float-alpha_value)-(string-first_server_name)-(string-first_token_name)-(string-first_channel_name)-(string-second_server_name)-(string-second_token_name)-(string-second_channel_name)-xz-(int-resolution)-(int-min_x),(int-max_x)-(int-y_slice)-(int-min_z),(int-max_z)-(int-time_slice-"],"(string:host_server_name)/nd/overlay/(float:alpha_value)/(string:first_server_name)/(string:first_token_name)/(string:first_channel_name)/(string:second_server_name)/(string:second_token_name)/(string:second_channel_name)/yz/(int:resolution)/(int:x_slice)/(int:min_y),(int:max_y)/(int:min_z),(int:max_z)/(int:time_slice)/":[6,0,1,"post-(string-host_server_name)-nd-overlay-(float-alpha_value)-(string-first_server_name)-(string-first_token_name)-(string-first_channel_name)-(string-second_server_name)-(string-second_token_name)-(string-second_channel_name)-yz-(int-resolution)-(int-x_slice)-(int-min_y),(int-max_y)-(int-min_z),(int-max_z)-(int-time_slice)-"],"(string:server_name)/nd/ca/(string:token_name)/(string:channel_name)/(int:annotation_id)/(string:option_args)/(int:resolution)/":[9,1,1,"get-(string-server_name)-nd-ca-(string-token_name)-(string-channel_name)-(int-annotation_id)-(string-option_args)-(int-resolution)-"],"(string:server_name)/nd/ca/(string:token_name)/(string:channel_name)/(string:graph_type)/(int:Xmin)/,int:Xmax)/(int:Ymin),(int:Ymax)/(int:Zmin),(int:Zmax)/":[2,1,1,"get-(string-server_name)-nd-ca-(string-token_name)-(string-channel_name)-(string-graph_type)-(int-Xmin)-,int-Xmax)-(int-Ymin),(int-Ymax)-(int-Zmin),(int-Zmax)-"],"(string:server_name)/nd/ca/(string:token_name)/(string:channel_name)/(string:option_args)/":[9,0,1,"post-(string-server_name)-nd-ca-(string-token_name)-(string-channel_name)-(string-option_args)-"],"(string:server_name)/nd/ca/(string:token_name)/(string:channel_name)/getField/(string:ramon_field)/":[9,1,1,"get-(string-server_name)-nd-ca-(string-token_name)-(string-channel_name)-getField-(string-ramon_field)-"],"(string:server_name)/nd/ca/(string:token_name)/(string:channel_name)/getPropagate/":[13,1,1,"get-(string-server_name)-nd-ca-(string-token_name)-(string-channel_name)-getPropagate-"],"(string:server_name)/nd/ca/(string:token_name)/(string:channel_name)/merge/(string:listofids)/(string:option_args)/":[9,1,1,"get-(string-server_name)-nd-ca-(string-token_name)-(string-channel_name)-merge-(string-listofids)-(string-option_args)-"],"(string:server_name)/nd/ca/(string:token_name)/(string:channel_name)/setField/(string:ramon_field)/(string/int/float:ramon_value)":[9,1,1,"get-(string-server_name)-nd-ca-(string-token_name)-(string-channel_name)-setField-(string-ramon_field)-(string-int-float-ramon_value)"],"(string:server_name)/nd/ca/(string:token_name)/(string:channel_name)/setPropagate/(int:propagate_value)/":[7,1,1,"get-(string-server_name)-nd-ca-(string-token_name)-(string-channel_name)-setPropagate-(int-propagate_value)-"],"(string:server_name)/nd/ca/autoIngest/":[0,0,1,"post-(string-server_name)-nd-ca-autoIngest-"],"(string:server_name)/nd/ramon/(string:token_name)/(string:channel_name)/(int:id)/":[9,1,1,"get-(string-server_name)-nd-ramon-(string-token_name)-(string-channel_name)-(int-id)-"],"(string:server_name)/nd/ramon/(string:token_name)/(string:channel_name)/(int:id)/boundingbox/(int:res)/":[9,1,1,"get-(string-server_name)-nd-ramon-(string-token_name)-(string-channel_name)-(int-id)-boundingbox-(int-res)-"],"(string:server_name)/nd/ramon/(string:token_name)/(string:channel_name)/query/(string/int/float:key)/(string/int/float:value)/":[9,1,1,"get-(string-server_name)-nd-ramon-(string-token_name)-(string-channel_name)-query-(string-int-float-key)-(string-int-float-value)-"],"(string:server_name)/nd/ramon/(string:token_name)/(string:channel_name)/topkeys/(int:num_results)/":[9,1,1,"get-(string-server_name)-nd-ramon-(string-token_name)-(string-channel_name)-topkeys-(int-num_results)-"],"(string:server_name)/nd/ramon/(string:token_name)/(string:channel_name)/topkeys/(int:num_results)/type/(int:ramon_type)/":[9,1,1,"get-(string-server_name)-nd-ramon-(string-token_name)-(string-channel_name)-topkeys-(int-num_results)-type-(int-ramon_type)-"],"(string:server_name)/nd/resource/dataset/":[10,1,1,"get-(string-server_name)-nd-resource-dataset-"],"(string:server_name)/nd/resource/dataset/(string:dataset_name)/":[10,0,1,"post-(string-server_name)-nd-resource-dataset-(string-dataset_name)-"],"(string:server_name)/nd/resource/dataset/(string:dataset_name)/project/":[10,1,1,"get-(string-server_name)-nd-resource-dataset-(string-dataset_name)-project-"],"(string:server_name)/nd/resource/dataset/(string:dataset_name)/project/(string:project_name)":[10,2,1,"delete-(string-server_name)-nd-resource-dataset-(string-dataset_name)-project-(string-project_name)"],"(string:server_name)/nd/resource/dataset/(string:dataset_name)/project/(string:project_name)/channel/(string:channel_name)/":[10,0,1,"post-(string-server_name)-nd-resource-dataset-(string-dataset_name)-project-(string-project_name)-channel-(string-channel_name)-"],"(string:server_name)/nd/resource/dataset/(string:dataset_name)/project/(string:project_name)/token/(string:token_name)/":[10,0,1,"post-(string-server_name)-nd-resource-dataset-(string-dataset_name)-project-(string-project_name)-token-(string-token_name)-"],"(string:server_name)/nd/resource/dataset/{string:dataset_name)/project/(string:project_name)/":[10,0,1,"post-(string-server_name)-nd-resource-dataset-string-dataset_name)-project-(string-project_name)-"],"(string:server_name)/nd/resource/public/dataset/":[10,1,1,"get-(string-server_name)-nd-resource-public-dataset-"],"(string:server_name)/nd/resource/public/token/":[10,1,1,"get-(string-server_name)-nd-resource-public-token-"],"(string:server_name)/nd/sd/(string:token_name)/(string:channel_name)/blosc/(int:resolution)/(int:min_x),(int:max_x)/(int:min_y),(int:max_y)/(int:min_z),(int:max_z)/(int:min_time),(int:max_time)/":[1,0,1,"post-(string-server_name)-nd-sd-(string-token_name)-(string-channel_name)-blosc-(int-resolution)-(int-min_x),(int-max_x)-(int-min_y),(int-max_y)-(int-min_z),(int-max_z)-(int-min_time),(int-max_time)-"],"(string:server_name)/nd/sd/(string:token_name)/(string:channel_name)/hdf5/(int:resolution)/(int:min_x),(int:max_x)/(int:min_y),(int:max_y)/(int:min_z),(int:max_z)/(int:min_time),(int:max_time)/":[1,0,1,"post-(string-server_name)-nd-sd-(string-token_name)-(string-channel_name)-hdf5-(int-resolution)-(int-min_x),(int-max_x)-(int-min_y),(int-max_y)-(int-min_z),(int-max_z)-(int-min_time),(int-max_time)-"],"(string:server_name)/nd/sd/(string:token_name)/(string:channel_name)/jpeg/(int:resolution)/(int:min_x),(int:max_x)/(int:min_y),(int:max_y)/(int:min_z),(int:max_z)/":[11,1,1,"get-(string-server_name)-nd-sd-(string-token_name)-(string-channel_name)-jpeg-(int-resolution)-(int-min_x),(int-max_x)-(int-min_y),(int-max_y)-(int-min_z),(int-max_z)-"],"(string:server_name)/nd/sd/(string:token_name)/(string:channel_name)/npz/(int:resolution)/(int:min_x),(int:max_x)/(int:min_y),(int:max_y)/(int:min_z),(int:max_z)/(int:min_time),(int:max_time)/":[1,0,1,"post-(string-server_name)-nd-sd-(string-token_name)-(string-channel_name)-npz-(int-resolution)-(int-min_x),(int-max_x)-(int-min_y),(int-max_y)-(int-min_z),(int-max_z)-(int-min_time),(int-max_time)-"],"(string:server_name)/nd/sd/(string:token_name)/(string:channel_name)/raw/(int:resolution)/(int:min_x),(int:max_x)/(int:min_y),(int:max_y)/(int:min_z),(int:max_z)/(int:min_time),(int:max_time)/":[1,1,1,"get-(string-server_name)-nd-sd-(string-token_name)-(string-channel_name)-raw-(int-resolution)-(int-min_x),(int-max_x)-(int-min_y),(int-max_y)-(int-min_z),(int-max_z)-(int-min_time),(int-max_time)-"],"(string:server_name)/nd/sd/(string:token_name)/(string:channel_name)/xy/(int:resolution)/(int:min_x),(int:max_x)/(int:min_y),(int:max_y)/(int:z_slice)/(int:time_slice)/":[11,1,1,"get-(string-server_name)-nd-sd-(string-token_name)-(string-channel_name)-xy-(int-resolution)-(int-min_x),(int-max_x)-(int-min_y),(int-max_y)-(int-z_slice)-(int-time_slice)-"],"(string:server_name)/nd/sd/(string:token_name)/(string:channel_name)/xz/(int:resolution)/(int:min_x),(int:max_x)/(int:y_slice)/(int:min_z),(int:max_z)/(int:time_slice/":[11,1,1,"get-(string-server_name)-nd-sd-(string-token_name)-(string-channel_name)-xz-(int-resolution)-(int-min_x),(int-max_x)-(int-y_slice)-(int-min_z),(int-max_z)-(int-time_slice-"],"(string:server_name)/nd/sd/(string:token_name)/(string:channel_name)/yz/(int:resolution)/(int:x_slice)/(int:min_y),(int:max_y)/(int:min_z),(int:max_z)/(int:time_slice)/":[11,1,1,"get-(string-server_name)-nd-sd-(string-token_name)-(string-channel_name)-yz-(int-resolution)-(int-x_slice)-(int-min_y),(int-max_y)-(int-min_z),(int-max_z)-(int-time_slice)-"],"(string:server_name)/nd/sd/(string:token_name)/info/":[3,1,1,"get-(string-server_name)-nd-sd-(string-token_name)-info-"],"(string:server_name)/nd/sd/(string:token_name)/projinfo/":[3,1,1,"get-(string-server_name)-nd-sd-(string-token_name)-projinfo-"],"(string:server_name)/nd/sd/public_datsets/":[8,1,1,"get-(string-server_name)-nd-sd-public_datsets-"],"(string:server_name)/nd/sd/public_tokens/":[8,1,1,"get-(string-server_name)-nd-sd-public_tokens-"],"(string:server_name)/nd/stats/(string:token_name)/(string:channel_name)/all/":[12,1,1,"get-(string-server_name)-nd-stats-(string-token_name)-(string-channel_name)-all-"],"(string:server_name)/nd/stats/(string:token_name)/(string:channel_name)/genHist/":[12,0,1,"post-(string-server_name)-nd-stats-(string-token_name)-(string-channel_name)-genHist-"],"(string:server_name)/nd/stats/(string:token_name)/(string:channel_name)/hist/":[12,1,1,"get-(string-server_name)-nd-stats-(string-token_name)-(string-channel_name)-hist-"],"(string:server_name)/nd/stats/(string:token_name)/(string:channel_name)/hist/roi/":[12,1,1,"get-(string-server_name)-nd-stats-(string-token_name)-(string-channel_name)-hist-roi-"],"(string:server_name)/nd/stats/(string:token_name)/(string:channel_name)/hist/roi/(string:roi)/":[12,1,1,"get-(string-server_name)-nd-stats-(string-token_name)-(string-channel_name)-hist-roi-(string-roi)-"],"(string:server_name)/nd/stats/(string:token_name)/(string:channel_name)/mean/":[12,1,1,"get-(string-server_name)-nd-stats-(string-token_name)-(string-channel_name)-mean-"],"(string:server_name)/nd/stats/(string:token_name)/(string:channel_name)/percentile/(decimal:percentile_value)":[12,1,1,"get-(string-server_name)-nd-stats-(string-token_name)-(string-channel_name)-percentile-(decimal-percentile_value)"],"(string:server_name)/nd/stats/(string:token_name)/(string:channel_name)/std/":[12,1,1,"get-(string-server_name)-nd-stats-(string-token_name)-(string-channel_name)-std-"],Exceptions:[21,3,1,""],Scaling:[21,3,1,""]},"(string:server_name)/nd/catmaid/(string:token_name)/(string:channel_name)/xy/(int:time)/(int:zvalue)/(int:ytile)_(int:xtile)_(int:resolution)":{png:[14,1,1,"get-(string-server_name)-nd-catmaid-(string-token_name)-(string-channel_name)-xy-(int-time)-(int-zvalue)-(int-ytile)_(int-xtile)_(int-resolution).png"]},"(string:server_name)/nd/catmaid/(string:token_name)/(string:channel_name)/xz/(int:time)/(int:yvalue)/(int:ztile)_(int:xtile)_(int:resolution)":{png:[14,1,1,"get-(string-server_name)-nd-catmaid-(string-token_name)-(string-channel_name)-xz-(int-time)-(int-yvalue)-(int-ztile)_(int-xtile)_(int-resolution).png"]},"(string:server_name)/nd/catmaid/(string:token_name)/(string:channel_name)/yz/(int:time)/(int:xvalue)/(int:ztile)_(int:ytile)_(int:resolution)":{png:[14,1,1,"get-(string-server_name)-nd-catmaid-(string-token_name)-(string-channel_name)-yz-(int-time)-(int-xvalue)-(int-ztile)_(int-ytile)_(int-resolution).png"]},"(string:server_name)/nd/catmaid/mcfc/(string:token_name)/(string:channel_name):(string:color_name)/(string:slice_type)/(int:time)/(int:zvalue)/(int:ytile)_(int:xtile)_(int:resolution)":{png:[14,1,1,"get-(string-server_name)-nd-catmaid-mcfc-(string-token_name)-(string-channel_name)-(string-color_name)-(string-slice_type)-(int-time)-(int-zvalue)-(int-ytile)_(int-xtile)_(int-resolution).png"]},"(string:server_name)/nd/catmaid/viking/(string:token_name)/volume/(string:channel_name)/(int:resolution)/X(int:xtile)_Y(int:xtile)_Z(int:zvalue)":{png:[14,1,1,"get-(string-server_name)-nd-catmaid-viking-(string-token_name)-volume-(string-channel_name)-(int-resolution)-X(int-xtile)_Y(int-xtile)_Z(int-zvalue).png"]}},objnames:{"0":["http","post","HTTP post"],"1":["http","get","HTTP get"],"2":["http","delete","HTTP delete"],"3":["py","function","Python function"]},objtypes:{"0":"http:post","1":"http:get","2":"http:delete","3":"py:function"},terms:{"0_0_3":14,"1_1_4":14,"1st":12,"1tb":20,"2100x2000":19,"2x2":19,"50th":12,"512x512":14,"64161ce56e52465e8e8bf0ba8c5a3c64ab761ffa":[],"99th":12,"case":[0,1,2,3,5,6,7,8,9,10,11,13,14,16,21],"catch":20,"class":16,"default":[1,5,6,7,9,11,13,14,19,21],"final":[16,19,21],"float":[4,6,9,19],"function":20,"import":[12,21],"int":[1,2,6,7,9,11,14,19,21],"long":20,"new":[18,19,20],"object detect":15,"public":[15,16,19,20,21],"return":[1,2,7,9,10,11,12,14],"super":16,"true":[19,21],"try":[19,20,21],"while":7,But:20,For:[4,9,15,16,19,21],NOT:[19,20],Not:[0,1,2,3,5,6,7,8,9,11,12,13,14,19],The:[2,4,7,9,12,15,16,19,20,22],Then:[18,21],There:[20,21],These:[8,11,14,15,22],Use:21,Yes:20,_dataset:19,abil:16,abl:[16,19,21],about:[15,19,21],abov:[4,12,16,18,19,20,21],accept:21,access:[8,12,16,19,20],accid:7,account:[16,18],accur:21,acl:21,acm:15,acquaint:19,across:[7,19,20,21],action:21,activ:20,actual:[19,20],add:[9,16,18,19,21],added:16,adding:16,addit:15,addition:[12,16],addperm:21,address:21,administr:15,adminstr:20,advantag:19,after:[19,21],again:[19,20],algorithm:[15,22],align:19,all:[3,8,9,10,12,15,19,20,21,22],allow:[4,7,12,16,19,20,21],along:[9,19],alpha:21,alpha_valu:6,alphanumer:[19,21],alreadi:[0,18,20,21],also:[8,9,14,19,20],altern:[16,20],although:19,amazon:21,amazonaw:21,amount:9,analysi:[15,19,22],analyz:19,anaylsi:1,ani:[7,16,20,21],anisotropi:19,ann_author:9,ann_confid:9,ann_id:9,ann_statu:9,ann_typ:9,annnot:4,annot:[1,2,4,6,11,15,19,21,22],annotation_id:9,anoth:[18,19,21],answer:[20,21],anyon:19,api:[15,20],api_view:16,appear:20,appli:[16,20],applic:[0,3,8,10,14],appropri:[2,18],arbitrari:12,architectur:[15,22],archiv:20,argument:[9,12],arn:21,around:[9,20],arrai:[1,12,15,22],arrang:21,ask:15,assign:[19,21],associ:[3,4,12,16,19],assum:19,attempt:21,attribut:9,authent:[15,21],authentication_class:16,author:16,auto:[20,21],autoingest:21,avail:[15,21,22],avali:8,avoid:[15,22],aws:21,axi:19,axon:15,backend:[16,19],background:7,bad:[0,10,12],badrequest:10,base:[12,14,16,19,20,21],baseurl:12,basic:[12,19],bbcorner:9,bbdim:9,becom:[18,19],been:[20,21],befor:[7,19,20,21],begin:20,being:[19,20,21],below:[7,18,21],berger:15,between:[2,19],bibtex2:15,bibtex:15,big:7,binari:1,bit:[4,20,21],black:14,blank:20,blosc:20,blue:21,bock11:[8,10],bock:15,both:[7,12,16,19,20],bound:[1,9,11],boundingbox:9,box:[9,18],brain:[15,22],branch:20,broken:16,browser:[11,15,20],bucketnam:21,bug:20,build:[15,19,22],built:12,burn:[9,15],calcul:12,call:[7,15,16,19,21],can:[1,4,7,8,9,11,12,14,16,17,18,19,20],cannot:[7,20],canon:11,capit:21,captur:19,catmaid:[14,21],caus:18,center:[15,20],certain:[4,9,16,20],ch0:10,chan1:[],chan2:[],chan3:[],chang:18,channel:[0,1,2,3,5,6,7,9,11,12,13,14,15,21,22],channel_datatyp:10,channel_nam:[1,2,5,7,9,10,11,12,13,14],channel_typ:[3,10],channelnam:21,channeltyp:[1,6,11],charact:21,check:[7,20],checkout:20,checout:20,choic:19,choos:21,chung:15,cite:15,clariti:15,click:18,client:[21,22],clone:20,cloud:[1,3,8,9,10,11,14],cluster:[15,22],cmyrgb:14,code:[0,1,2,3,5,6,7,8,9,10,11,13,14,20,21],coeffici:19,collect:[19,21],collman:9,color:[4,14,21],color_nam:14,com:21,comand:21,combin:[9,21],comma:9,command:[12,21],comment:21,commit:[19,21],common:[19,20],commonli:20,compar:21,complet:21,complex:19,compon:[19,21],compos:19,compress:1,comput:[12,15,22],configur:[15,20,22],connect:[15,21,22],connectom:[15,22],consid:19,consist:[7,19],consol:[15,19,20],constraint:12,contact:[20,21],contain:[3,12,19,21],content:[0,3,8,10,11,14],contradict:[19,21],contribut:20,control:[19,21],convect:21,convent:19,coordin:[9,12,19],corner:[9,12],correct:20,correctli:[20,21],correspond:[9,12,19,21],cortex1:21,cortex:[15,21],cortic:21,could:[19,20],count:19,creat:[0,2,12,16,19,21],cube_dimens:3,curl:21,current:[12,19,20,21],cut:9,cutout:[1,2,14],data:[2,6,7,8,9,11,12,14,15,16,18,20,22],data_url:21,databas:[2,9,12,14,15,19,22],dataset:[0,1,3,8,12,14,16,20],dataset_nam:10,dataspac:19,datatyp:[1,3,4,6,11,12,19],dataurl:21,datset:1,deal:16,decim:12,decor:16,defin:[19,21],deisseroth:15,delet:[],dendrit:15,deploi:20,deriv:15,describ:[1,9,12,15],descript:3,design:[15,22],desir:[16,18,21],detail:[9,12,18,19,20],detect:[15,22],dev:20,develop:20,differ:[4,7,15,16,19,21,22],diffus:19,digit:21,dimenison:4,dimens:[2,4,9,19],direct:[2,15,18,22],directli:[12,20],directori:21,discuss:20,disk:[15,22],displai:[9,19],distribut:[15,22],doc:16,docker:20,document:[9,15,19,20],doe:[7,19,20],doesn:12,doing:[2,21],done:[7,12,16],down:[18,19,20],download:[1,11,16,20,21],downsampl:7,drop:18,dropbox:21,dti:19,due:12,dure:16,each:[2,3,4,12,14,18,19,21],edit:[18,21],edu:21,effect:[15,19,21,22],effici:19,effort:19,either:20,electron:[15,22],els:12,email:20,enabl:[19,20,21],encount:21,encourag:20,end:[2,12,19],endpoint:16,endwindow:10,enforc:20,engin:19,ensur:7,entit:4,enumer:[7,15,19,21],error:[0,1,2,3,5,6,7,8,9,11,12,13,14],etc:[12,19],evalu:[15,22],event:21,everi:16,everyon:21,ex10r55:8,ex12r75:8,ex12r76:8,ex13r51:8,ex14r58:8,examin:19,exampl:[0,3,4,8,9,10,11,14,16,19,21],examplebucket:21,exampleserv:21,except:[3,9,19,21],excess:19,execut:[15,22],exist:[0,12,19],experi:19,explan:18,expos:12,express:12,extend:20,extra:[7,21],factor:19,fail:21,fals:[16,19,21],faq:15,fastest:20,featur:20,fetch:20,few:12,field:18,figur:21,file:[0,1,2,5,6,7,9,11,13,14,16,19,21],fill:18,find:[2,9],first:[6,16,19,20,21],first_channel_nam:6,first_server_nam:6,first_token_nam:6,fix:20,float32:[1,4,6,11,12,19],fly:12,fmri:19,folder:[17,21],follow:[4,12,18,19,20,21],forbidden:[1,3,10,11,14],form:[0,1,6,11,21],formal:20,format:[0,1,2,3,5,6,7,9,11,12,13,14,16,20,21],forrest:9,forum:20,found:[0,1,2,3,5,6,7,8,9,11,12,13,14,18,20,21],fraction:19,frequent:15,fresh:17,from:[1,5,8,9,12,13,14,15,16,19,21,22],full:[16,18,21],further:15,furthermor:12,gaba:9,gen:12,gener:[0,1,2,3,5,6,7,8,9,10,11,12,13,14,19,20,21],genhist:12,genhistpost:12,get:[2,5,7,12,13,14,16,19,20,21],getobject:21,getpropag:[5,13],gigabyt:12,git:20,github:[15,20],give:19,given:[12,19],glm:19,got:19,grai:15,graph:[2,5,13],graph_typ:2,grayscal:[14,21],green:21,grosenick:15,group:[1,6,11],handl:21,happen:19,hard:21,has:[2,4,16,19,20,21],have:[4,15,16,18,19,20,21],hdf5:[6,11,20],head:[19,20],header:16,help:20,her:19,here:[15,18,19,20,21],hierarchi:[19,21],high:[15,22],higher:19,highest:19,highli:20,highlight:[15,22],hist:12,histolog:15,hold:[16,21],host:[0,3,6,8,10,11,14,19,21],host_server_nam:6,hour:20,how:[15,19,20],howev:[16,19,20,21],http:[0,3,8,10,11,12,14,16,18,21],idea:20,identifi:[7,9,16,19,20,21],ids:[2,9],illustr:21,imag:[1,3,4,6,10,11,12,14,15,19,22],image1:19,images:3,imagetypeiterationnumb:19,imagin:19,implement:20,improv:[15,22],includ:[3,15,19,20,21,22],incorrect:10,incorrectli:21,index:[15,22],individu:4,info:15,inform:[8,10,15,20],infrastructur:12,ingest:[15,20],inherit:[15,22],initi:[19,21],input:[18,19,20,21],insens:20,insid:[4,21],instal:[17,20,21],instanc:20,instead:[16,21],instruct:21,insuffici:10,integ:[4,9,12],intens:[15,22],interact:[16,19],interest:12,interfac:[9,12,15,20,22],interfer:[15,22],intern:9,introduct:15,isn:20,isotrop:[19,20,21],issu:20,its:[4,15,19],itself:19,jhu:[],jpeg:20,json:[0,8,10,12,21],just:20,kashturi11:19,kasthuri11:[3,8,10,11,14,19],kasthuri:15,kat11:10,kat11cc:10,kat11test:10,kazhdan:15,keep:20,kind:[19,21],kleissa:15,knosso:1,know:[15,19],knowledg:19,kunal:[],kvengin:10,kvserver:10,label:21,labnamepublicationyear:19,larg:19,lastest:21,later:[16,20],lead:21,leadresearchercurrentyear:19,learn:[19,20],least:20,lee15:10,left:15,length:19,less:19,let:[15,19],level:[19,21],librari:[1,20,21],lichtman:15,like:20,lillanei:15,line:[12,18,21],linear:19,link:[19,20],linux:21,list:[8,9,15,20],listofid:9,load:[1,11],localhost:10,locat:21,lock:7,log:18,login:18,look:[0,9,20],low:20,lower:9,lowest:21,made:16,mai:[16,20],mail:[15,20],main:18,maintain:[7,21],major:[2,21],make:[7,16,19,20],manavalan:15,mani:19,map:[4,15,19,22],mark:7,match:[9,21],materi:21,max:12,max_i:[1,6,11],max_tim:[1,6,11],max_x:[1,6,11],max_z:[1,6,11],maxim:[15,22],maximum:[1,6,11,19],mcfc:14,mean:21,membran:15,memori:12,mention:4,menu:18,messag:12,metadata:[0,3,4,9,19],method:[16,19],micron:19,microscopi:[15,22],might:19,min:12,min_i:[1,6,11],min_tim:[1,6,11],min_x:[1,6,11],min_z:[1,6,11],minimum:[1,6,11,19],miss:[1,5,6,7,9,11,13,14,20],mistak:19,mix:19,mni152:19,modal:19,model:[7,9,15,18,21],modifi:18,more:[9,19,20,21],most:[2,19,21],mous:[15,21],mri:[15,19],much:[15,19,20,22],mulitpl:20,multi:[15,19,22],multimod:15,multipl:[1,4,19,21],must:[12,16,19,21],mydata:21,mypubl:21,myserv:21,name:[0,1,2,3,5,6,7,8,9,10,11,12,13,14,18,19],namesubprojectnam:19,navig:[18,20,21],ndio:[20,21],ndstore:[16,17,20,21],ndstore_instal:17,ndtilecach:14,neariso_scaledown:3,necessari:21,need:[16,21],nerror:12,network:21,neural:[15,22],neurodata:[0,1,2,3,5,6,7,8,9,10,11,12,13,14,16,19,20,21,22],neurodataviz:[20,21],neuron:2,neurosci:15,neuroscientist:19,next:16,nifti:15,node:[2,15,17,22],non:[16,19,21],none:[19,21],normal:21,nosql:[15,22],note:[9,11,12,14,15,19,20,21],now:[18,19],npz:1,nstatu:12,num_result:9,number:[9,16,19,21],numpi:20,object:[2,9,19,21],obtain:16,ocp:[15,18],offset:[3,19,20,21],onc:[18,20,21],one:[12,16,19,20,21],onli:[1,6,7,11,12,14,16,19,21],onlin:15,open:[15,20,22],openconnecto:[2,5,6,7,12,13,18,21],oper:21,option:[1,2,5,6,7,9,11,13,14,18,19,20,21],option_arg:9,options_arg:9,order:[16,21],organ:[15,21,22],orgin:[11,14],orient:[19,21],origin:19,other:[19,20,21],our:[12,19,20],out:[15,21,22],outlin:16,output:15,over:[19,20,21],overarch:[19,21],overview:16,overwrit:9,own:[10,16,19,20],owner:21,packag:20,page:[18,19,20],paint:4,pair:19,parallel:[15,22],param:10,paramet:[0,1,2,3,5,6,7,8,9,10,11,12,13,14,18,19],part:[16,20,21],particular:[19,21],partit:[15,22],partner:16,pass:12,patient:7,peopl:20,per:19,percent:12,percentile_valu:12,perform:[15,22],perlman:15,permiss:[10,16,19,21],permission_class:16,person:19,pip:21,pixel:19,place:16,plain:10,plane:[11,19,21],pleas:[7,11,14,15,20,21],png:[14,21],pnginfo:21,point:[3,4,12,19,20,21],polici:21,portal:20,portion:21,possibl:[14,19,20,21],post:[0,6,7,10,11,16,21],postgaba:9,pound:21,pre:12,prefer:18,prefix:21,present:[2,12,19,20],preserv:9,primarili:[15,19,22],primarli:19,princip:21,print:12,prior:[20,21],privat:[16,19,20],probabl:[4,15],problem:19,probmap:[1,6,11],process:21,product:[15,22],program:[15,22],programat:16,project:[0,4,7,8,9,15,20],project_nam:10,projectss:10,projinfo:3,propag:[3,15,19,20],propagate_valu:7,properti:[4,21],propgat:7,propos:20,provid:[12,15,16,19,20,21,22],public_dataset:8,public_datset:8,public_token:8,publicauthent:16,publicli:[8,15,19,22],pull:20,purpos:21,put:[8,19,20,21],python2:21,python:[1,16,20,21],quantiti:4,question:[15,21],queu:12,quit:7,ramon:[2,4,15],ramon_field:9,ramon_typ:9,ramon_valu:9,randal:9,rang:[12,19],rather:12,raw:[11,14,21],read:[7,12,15,16,19,21,22],readabl:[1,19],readonli:3,recommend:[16,20],reconstruct:9,rectangular:12,recurs:21,red:21,redi:10,refer:[3,7,20,21],reflect:[19,20,21],region:[1,12,20],regist:[15,16,18,19],reid:15,relationship:19,releas:15,relev:[19,20],remain:19,renam:21,render:21,replac:21,repo:[15,20],report:20,repositori:20,repres:[2,4],represent:1,reproduc:19,request:[0,3,8,9,10,11,12,14,16,20],requir:[16,19,21],res:9,research:19,resolut:[1,3,6,7,9,11,14,19,20],resourc:[15,21],respons:[0,3,8,10,11,14,20,21],rest:[9,12,15,19,20,22],restrict:9,retriev:[9,12,20],review:16,rgb32:[1,6,11,21],rgb64:[1,6,11],rgba:[4,21],right:[15,18],righthand:20,roi:12,roncal:15,root:21,routin:21,run:[7,12,16,20,21,22],s3backend:10,sai:19,said:19,same:[4,19,21],sampl:[16,19,21],save:21,scalabl:[15,19,22],scale:[3,15,19,21,22],scalinglevel:3,scan:19,scienc:[15,20,22],script:[12,17,20,21],search:[9,19,20],second:[6,19,21],second_channel_nam:6,second_server_nam:6,second_token_nam:6,section:16,secur:16,see:[15,18,20,21],seen:20,select:[18,20],send:[16,20],sent:16,separ:[9,19],seri:[15,19,21,22],server:[0,1,2,3,5,6,7,8,9,10,11,12,13,14,16,19,21],server_nam:[0,1,2,3,5,7,8,9,10,11,12,13,14],servic:[15,16,19,20,21,22],session:16,sessionauthent:16,set:[4,7,9,12,15,16,19,20,21,22],setup:[17,20],sever:12,sheet:0,should:[16,18,19,20,21],sid:21,side:20,sign:[18,21],signifi:7,similarli:[14,19],simpl:[14,15,19,22],simpler:19,simpli:[16,21],sinc:12,singl:[1,11,16,21],size:19,slash:21,slice:[14,15,19,20,21],slice_typ:14,slot:21,slow:20,smith:15,solid:[15,22],somatosensori:15,some:[7,18,20],someth:7,space:[19,21],spatial:[2,15,22],special:21,specif:[7,16,19,21],specifi:[1,3,9,11,12,16,19,21],ssdbm:15,stack:[15,19,20,22],standard:[9,19],start:[2,12,19,20,21],startwindow:10,state:[7,15,19,22],stateless:[15,22],statement:21,statu:[0,1,2,3,5,6,7,8,9,10,11,12,13,14,19],status_cod:12,std:12,step:[19,21],still:[20,21],storag:[15,19,22],store:[4,12,15,19,20,21],string:[0,1,2,3,5,6,7,8,9,10,11,12,13,14],structur:21,style:1,sub:[18,20,21],subject1:19,subject1t1:19,subject:19,succeed:12,success:0,sudo:17,suffici:19,suffix:21,suggest:[19,20,21],support:[2,4,12,15,19,20,21],sure:21,swc:15,syn_centroid:9,syn_seg:9,syn_typ:9,syn_weight:9,synaps:[2,9,22],synopsi:[0,1,2,3,5,6,7,8,9,10,11,12,13,14],syntax:[0,1,2,3,5,6,7,8,9,10,11,12,13,14],system:[15,22],szalai:15,tab:21,tabl:[7,19],tag:20,take:[7,12,19],takemura13:8,taken:[18,19,21],tar:15,tech:0,temporari:16,temporarili:21,terabyt:12,term:[7,19],termin:21,test:[10,16],test_kat1:[],testchannel:12,testtoken:12,text:[9,10,12],than:[19,21],thei:[16,19,21],them:[9,19],themselv:[16,21],thi:[0,1,2,3,5,6,7,8,9,10,11,12,13,14,16,19,20,21],think:20,thought:19,three:[16,20,21],through:[19,21],throughput:[15,22],thy1eyfpbrain10:14,tif:[19,21],tiff:[11,19,21],tiffinfo:21,tile:[15,21],tilecach:14,time0000:21,time0001:21,time0002:21,time:[4,14,15,19,20,21,22],time_slic:[6,11],timerang:[1,3,6,11],timeseri:[1,4,6,11,14,19],timestepstart:19,timestepstop:19,timseri:4,togeth:19,token:[1,2,3,5,6,7,9,11,12,13,14,15,16],token_nam:[1,2,3,5,7,9,10,11,12,13,14],token_sup:16,tokenauthent:16,tokennam:21,tomographi:15,too:20,top:9,touch:20,trace:15,travers:2,tri:20,tripl:12,tupl:19,tutori:18,two:[9,16,21],type:[0,1,2,3,6,8,9,10,11,12,14,15,16,19],typic:[9,12,19],ubuntu:17,uint16:[1,4,6,11,12,19],uint32:[1,4,6,11,19,21],uint64:[4,19],uint8:[1,3,4,6,10,11,12,19,21],unaccess:20,under:[7,20],underscor:21,understand:19,unfortun:21,uniqu:[2,4,19,21],unit:19,univers:21,unsupport:12,unsur:21,unus:18,unweight:2,updat:20,upload:[19,20],uploaddata:21,upper:9,upsampl:7,upto:20,urgent:20,url:[12,16,21],usabl:[15,22],usag:15,use:[1,5,6,7,9,11,13,14,15,16,18,19,20,21],used:[1,6,8,11,15,19,21],user:[10,12,16,19,20,21],using:[1,4,9,12,15,16,17,19,20,21,22],valu:[1,2,4,6,7,9,11,14,16,19,21],vari:21,varieti:21,variou:12,verifi:[16,20],version:[3,12,21],vertic:2,via:[7,15],view:[14,16,18,19,20],viewabl:[19,21],vike:14,vision:[15,22],visit:[19,20],vist:19,visual:[19,21,22],visualiz:20,vogelstein:15,volum:[14,20],voxel:19,voxelr:3,wai:[19,20,21],wait:20,want:[11,14,19,20],warn:[7,18],web:[1,12,15,20,22],webpag:21,webservic:21,websit:16,weiler:15,well:[3,12,16,19,21],were:19,wget:21,what:[16,19,20],when:[7,16,20,21],where:[16,18,19,21],which:[4,7,12,14,15,16,18,19,20,21,22],whichev:21,white:14,why:20,width:19,window:[19,20],windowrang:3,wish:[16,18,19,20,21],within:[1,19],work:[14,19,20],workflow:22,workload:[15,22],worth:21,would:[9,19,21],wrap:20,write:[15,16,19,22],written:19,x1_y1_z10:14,x_slice:[6,11],ximages:10,xmax:2,xmin:2,xrang:[1,6,11],xslice:14,xtile:14,xvalu:14,xvoxelr:10,xyz:4,y_slice:[6,11],yet:18,yimages:10,ymax:2,ymin:2,you:[1,4,7,11,14,15,16,17,18,19,20],your:[4,7,11,16,18,19,20,21],yourfold:21,yrang:[1,6,11],yslice:14,ytile:14,yvalu:14,yvoxelr:10,z_slice:[6,11],zenodo:15,zero:21,zimages:10,zip:[1,15],zmax:2,zmin:2,zoom:19,zrang:[1,6,11],zslice:[3,14],ztile:14,zvalu:14,zvoxelr:10},titles:["Auto-Ingest API","Data API","GrahpGen API","Project Info API","NeuroData Types","NIFTI API","Overlay API","Propagate API","Public Token API","RAMON API","Resources API","Slice API","Statistics API","SWC API","Tile API","NeuroData","Authentication","Configuration","Administrator Console","Data Model","Frequently Asked Questions (FAQ)","How to Ingest Data","Introduction"],titleterms:{"function":[],"public":[8,10],The:21,access:[18,21],addit:21,administr:18,allstatist:12,annot:9,api:[0,1,2,3,5,6,7,8,9,10,11,12,13,14],ask:20,assumpt:19,attribut:19,authent:16,auto:0,autoingest:0,blosc:1,bucket:21,can:21,channel:[4,10,18,19],check:21,code:12,combin:4,common:21,configur:17,consol:18,contact:15,creat:[10,18],cutout:[6,11],cutut:6,data:[1,4,19,21],dataset:[10,18,19,21],datatyp:21,delet:10,deletechannel:[],deviat:12,exampl:12,exist:18,explan:21,faq:20,field:9,frequent:20,genhistogram:12,get:[1,3,6,8,9,10,11],getboundingbox:9,getfield:9,getgraph:2,gethistogram:12,gethistogramroi:12,getjsonobject:9,getmcfctil:14,getnifti:5,getpropag:7,getroi:12,getsimpletilexi:14,getsimpletilexz:14,getsimpletileyz:14,getswc:13,getvikingtil:14,grahpgen:2,hdf5:[1,3],help:21,histogram:12,how:[18,21],imag:21,info:3,inform:3,informatio:3,ingest:[0,21],introduct:22,jpeg:11,json:[3,9],kei:9,knosso:11,list:10,make:21,mean:12,merg:9,mistak:21,model:19,name:21,neurodata:[4,15],nifti:5,numpi:1,overlai:6,overview:[19,21],percentil:12,possibl:4,post:[1,9,12],prep:21,project:[3,10,18,19,21],propag:7,publicli:21,python:12,queri:9,question:20,ramon:9,raw:1,resourc:10,rgb:21,section:21,servic:[1,3,6,7,9,11,12],setfield:9,setpropag:7,size:21,slice:[6,11],some:21,stack:11,standard:12,stat:12,statist:12,swc:13,term:21,tile:14,token:[8,10,18,19,21],topkei:9,topkeysbytyp:9,type:[4,21],unsupport:21,updat:18,upload:21,you:21}})