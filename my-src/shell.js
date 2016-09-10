(function (nx) {
    /**
     * define application
     */
    var Shell = nx.define(nx.ui.Application, {
        methods: {
            start: function () {
                var mainView = new com.cisco.MainView();
                var model = new com.cisco.TopologyModel();
                mainView.attach(this);
                mainView.model(model);
            }
        }
    });

    /**
     * create application instance
     */
    var shell = new Shell();

    /**
     * invoke start method
     */
    shell.start();
})(nx);