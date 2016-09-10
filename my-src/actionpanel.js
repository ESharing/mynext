(function (nx) {
    nx.define('com.cisco.ActionPanel', nx.ui.Component, {
        view: {
            content: [
                {
                    tag: 'input',
                    name: 'nli_command',
                    content: 'Input command',
                    events: {
                        keyup: '{#_parseNLI}'
                    }
                },            
                {
                    tag: 'button',
                    props: {
                        type: 'button',
                        'class': 'btn btn-default'
                    },
                    content: 'Add Node',
                    events: {
                        click: '{createNode}'
                    }
                },
                {
                    content: [
                        {
                            tag: 'label',
                            content: 'Source ID:'
                        },
                        {
                            name: '_source',
                            tag: 'input'
                        },
                        {
                            tag: 'label',
                            content: 'Target ID:'
                        },
                        {
                            name: '_target',
                            tag: 'input'
                        },
                        {
                            tag: 'button',
                            props: {
                                type: 'button',
                                'class': 'btn btn-default'
                            },
                            content: 'Add Link',
                            events: {
                                click: '{#_onAddLink}'
                            }
                        }
                    ]
                }
            ]
        },
        properties: {
            _sourceId: null,
            _targetId: null
        },
        methods: {
            _parseNLI: function (inSender, inEvent) {
            try {
                if (inEvent.keyCode == 13) { // Enter KeyCode = 13
                    var nli_command_input = this.view('nli_command').get('value');
                    var nli_command_object = nli_command_input.split(' ')[0];
                    if ( nli_command_object == "xxx") {
                        /*Because in next.js, use 'oldValue !== value ...', so I add Math.random as argument
                            property.__setter__ = function (value, params) {
                            var oldValue = this.get(name);
                            if (oldValue !== value || (params && params.force) || equalityCheck === false) {
                                if (setter.call(this, value, params) !== false) {
                                    return this.notify(name, oldValue);
                                }
                            }
                        */
                        this.model().clearContent("xxx"+Math.random());
                        //this.model().clearContent("xxx");
                        return;
                    }
                    var nli_command_action = nli_command_input.split(' ')[1];
                    if (nli_command_object == "node" || nli_command_object == 'n') {
                        if (nli_command_action = "+" || nli_command_action == "add" ) {
                            var node_name = nli_command_input.split(' ')[2];
                            var node_type = nli_command_input.split(' ')[3];
                            this.model().createNode(node_name, node_type);
                        }
                    }
                }
            }
            catch (error) {
                alert(error.message);
            }
            },

            _onAddLink: function (inSender, inEvent) {
                var source = this.view('_source');
                var target = this.view('_target');
                var sourceId = source.get('value');
                var targetId = target.get('value');
                if (!sourceId) {
                    source.dom().focus();
                }
                if (!target) {
                    target.dom().focus();
                }
                this.model().createLink({
                    source: sourceId,
                    target: targetId
                });
            }
        }
    })
})(nx);