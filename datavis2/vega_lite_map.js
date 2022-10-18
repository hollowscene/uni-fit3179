var vg_1 = "carbon_temporal.vg.json";
vegaEmbed("#temporallinechart", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "carbon_emissions.vg.json";
vegaEmbed("#carbonmap", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "carbon_radial.vg.json";
vegaEmbed("#radialchart", vg_3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "carbon_worst_emitters.vg.json";
vegaEmbed("#topkchart", vg_4).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_5 = "carbon_stacked_area.vg.json";
vegaEmbed("#stackedareachart", vg_5).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_6 = "carbon_area.vg.json";
vegaEmbed("#areachart", vg_6).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);