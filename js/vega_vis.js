/* =========================================================
   Australia's Black Summer — FIT2179 Data Visualisation 2
   Author: Doug | May 2026
   ========================================================= */

const embedOpts = {
  renderer: "svg",
  actions: false
};

// Helper: embed then immediately fire a resize so container-width
// charts repaint at the correct size (needed when the page first loads)
function embed(divId, specPath) {
  vegaEmbed("#" + divId, specPath, embedOpts)
    .then(function(result) {
      // Nudge Vega to recalculate width against the actual container
      result.view.resize().run();
    })
    .catch(console.error);
}

// Chart 1 — Choropleth map
embed("choropleth_map",   "js/choropleth_map.vg.json");

// Chart 2 — Total area per season (annotated bar)
embed("annual_annotation","js/annual_fire_annotation.vg.json");

// Chart 3 — Planned vs Unplanned trend lines
embed("annual_trend",     "js/annual_fire_trend.vg.json");

// Chart 4 — Planned vs Unplanned proportion
embed("planned_proportion","js/planned_proportion.vg.json");

// Chart 5 — State breakdown stacked bar
embed("state_fire_bar",   "js/state_fire_bar.vg.json");

// Chart 6 — State rankings bump chart
embed("bump_chart",       "js/bump_chart.vg.json");

// Chart 7 — All-seasons heatmap
embed("heatmap",          "js/heatmap.vg.json");

// Chart 8 — Vegetation category breakdown
embed("forest_category",  "js/forest_category.vg.json");

// Chart 9 — Black Summer vs average (connected dot)
embed("connected_dot",    "js/connected_dot.vg.json");

// Chart 10 — Species stacked bar
embed("species_bar",      "js/species_stacked_bar.vg.json");

// Chart 11 — Threat level donut
embed("species_donut",    "js/species_donut.vg.json");

// Chart 12 — Species bubble matrix
embed("species_bubble",   "js/species_bubble.vg.json");

// Re-run resize on window resize so charts stay fluid
window.addEventListener("resize", function() {
  document.querySelectorAll(".vega-embed").forEach(function(el) {
    const view = el.__vega_embed_view;
    if (view) view.resize().run();
  });
});
