(function (nx) {
    nx.define('com.cisco.TopologyView', nx.ui.Component, {
        view: {
            content: {
                name: '_topology',
                type: 'nx.graphic.Topology',
                props: {
                    style: 'border:1px solid #ccc;',
                    width: '{#width}',
                    height: '{#height}',
                    nodeConfig: {
                        label: 'model.label',
                        iconType: 'model.deviceType'
                    },
                    linkConfig: {
                        linkType: 'curve'
                    },
                    identityKey: 'id',
                    showIcon: true
                }
            }
        },
        properties: {
            width: 800,
            height: 600,
            newNode: {
                set: function (inNode) {
                    if (inNode) {
                        var topology = this.view('_topology');
                        topology.addNode(inNode);
                    }
                }
            },
            newLink: {
                set: function (inLink) {
                    if (inLink) {
                        var topology = this.view('_topology');
                        topology.addLink(inLink);
                    }
                }
            },
            clearAllxxx: {
                set: function (anything) {
                    if (anything) {
                        var topology = this.view('_topology');
                        topology.clear();
                    }
                }                
            },
        }
    });
})(nx);