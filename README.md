# Javascript for network topology

## Requirement and supporting map 

1. large Network： For large network which can display up to 2000 nodes on a 1920x1080 screen
2. Support subnet: node set, physical concept that one node is only in one subnet
3. Support group: node group, logical concept that one node can be managed in multiple group
4. vNode and Physical Node 
5. vertical layer for core/aggregation/access
6. slicing network, relation between vNet and physical net 

Requirement|NextUI|VIS
---|:--:|---:
LargeNetwork|N|Y
Subnet|Y|Y
Group|Y|N
vNode|N|N
VerticalLayer|N|N
SlicingNet|N|N

## 20 JS lib referred url

<https://modeling-languages.com/javascript-drawing-libraries-diagrams/>

## Cisco next UI

license: EPL 1.0

<https://github.com/RoninGAO/next-ui-practice>

<https://github.com/NeXt-UI>

[Read More](./nextui-notes.md)

## draw2d

license: MIT

<https://github.com/freegroup/draw2d>

<http://www.draw2d.org/>

<https://freegroup.github.io/draw2d/index.html#/api/draw2d>

Good for draw features 

## Rahpael

license: MIT

<https://github.com/DmitryBaranovskiy/raphael>

## snap

license: Apache 2 license

<http://snapsvg.io/>

<https://github.com/adobe-webplatform/Snap.svg>

## react diagrams

license: MIT

<https://github.com/projectstorm/react-diagrams>

Good for workflow process

## vis 

license: Apache 2 license , MIT 

<https://github.com/visjs/vis-network>

<https://github.com/visjs>

Special for large network topology. But no group like nextui. Cluster node like the clo

## onos gui2

license: Apache 2 license

<https://github.com/opennetworkinglab/onos>

<https://wiki.onosproject.org/display/ONOS/Customizing+and+Extending+the+ONOS+GUI>

<https://wiki.onosproject.org/display/ONOS/Appendix+I+-+GUI2+Development>

<https://github.com/opennetworkinglab/onos/tree/master/web/gui2>

<https://wiki.onosproject.org/display/ONOS/Web+UI+Tutorial+-+Creating+a+Topology+Overlay>

<http://sdnhub.org/tutorials/onos/>

## Others

gojs (not free license)

<https://gojs.net/latest/index.html>

<https://gojs.net/latest/samples/navigation.html>  #show the group/subnet

Advent net

<https://www.manageengine.cn/>

<https://www.zohocorp.com/>

<https://www.findbestopensource.com/product/zcreativelabs-react-simple-maps>

skydive

<https://github.com/skydive-project/skydive>

