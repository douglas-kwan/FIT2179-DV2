const embedOpts = {
  renderer: "svg",
  actions: false
};


function embed(divId, specPath) {
  vegaEmbed("#" + divId, specPath, embedOpts)
    .then(function(result) {
      result.view.resize().run();
    })
    .catch(console.error);
}

embed("choropleth_map",   "js/choropleth_map.vg.json");

embed("annual_annotation","js/annual_fire_annotation.vg.json");

embed("annual_trend",     "js/annual_fire_trend.vg.json");

embed("planned_proportion","js/planned_proportion.vg.json");

embed("state_fire_bar",   "js/state_fire_bar.vg.json");

embed("bump_chart",       "js/bump_chart.vg.json");

embed("heatmap",          "js/heatmap.vg.json");

embed("forest_category",  "js/forest_category.vg.json");

embed("connected_dot",    "js/connected_dot.vg.json");

embed("species_bar",      "js/species_stacked_bar.vg.json");

embed("species_donut",    "js/species_donut.vg.json");

embed("species_bubble",   "js/species_bubble.vg.json");

window.addEventListener("resize", function() {
  document.querySelectorAll(".vega-embed").forEach(function(el) {
    const view = el.__vega_embed_view;
    if (view) view.resize().run();
  });
});
