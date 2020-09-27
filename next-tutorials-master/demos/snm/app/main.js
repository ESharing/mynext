(function(nx){

	// instantiate NeXt app
	var app = new nx.ui.Application();

	// instantiate Topology class
	var topology = new MyTopology();
	// instantiate ActionPanel class
	var inputNLI = new InputNLI();
	inputNLI.topology(topology);

	// add icons
	topology.registerIcon("alien", "images/alien.png", 40, 48);
	nx.graphic.Icons.registerFontIcon("icon_hq", "FontAwesome", "\uf005", 48);

	topology.tooltipManager().tooltipPolicyClass('ExtendedTooltipPolicy');

	// load topology data from app/data.js
	topology.data(topologyData);

	topology.on("topologyGenerated", function(topo, event){
		topo.registerScene('extended-scene', 'ExtendedScene');
		topo.activateScene('extended-scene');
	});

	// add action panel to the view
	//inputNLI.attach(app);
	// bind the topology object to the app
	topology.attach(app);

	// app must run inside a specific container. In our case this is the one with id="topology-container"
	app.container(document.getElementById("topology-container"));

})(nx);