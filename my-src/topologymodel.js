nx.define('com.cisco.TopologyModel', nx.data.ObservableObject, {
    properties: {
        nodeId: 1,
        linkId:1,
        newNode: null,
        newLink: null,
        clearAllxxx: null
    },
    methods: {
        createNode: function (name, type) {
            var id = this.nodeId();
            var node = {
                id: id,
                label: name,
                labelVisibility: true,
                deviceType: type,  
                x: Math.floor(Math.random() * 400),
                y: Math.floor(Math.random() * 400)
            };
            this.newNode(node);
            this.nodeId(++id);
        },
        createLink:function(inLink){
            var id = this.linkId();
            inLink.id = id;
            this.newLink(inLink);
            this.linkId(++id);
        },
        clearContent: function(anything) {
            this.clearAllxxx(anything);
        }
    }
});