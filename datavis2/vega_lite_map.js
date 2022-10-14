var vg_1 = "carbon_emissions.vg.json";
vegaEmbed("#carbonmap", vg_1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "carbon_temporal.vg.json";
vegaEmbed("#temporallinechart", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "carbon_worst_emitters.vg.json";
vegaEmbed("#topkchart", vg_3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "carbon_income_bar.vg.json";
vegaEmbed("#groupedbarchart", vg_4).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);