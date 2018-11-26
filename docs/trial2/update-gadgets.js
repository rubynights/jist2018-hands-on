function setSgvizler()
{
    sgvizler
      .defaultEndpointURL("https://lod4all.net/api/sparql")
      .defaultChartWidth(650)
      .defaultChartHeight(280);
}

function updateGadgets(click_uri)
{
    setSgvizler();

    updateGadget001(click_uri);
    updateGadget002(click_uri);
    updateGadget003(click_uri);
}

function updateGadget001(click_uri)
{
    $('#gadget-001').empty();
    var sparql_val = getSPARQL001().trim();
    sparql_val = sparql_val.replace(/<%URI%>/g, '<'+click_uri+'>');
    d3sparql.query("https://lod4all.net/api/sparql", sparql_val, render001);
}

function render001(json) {
      var config = {
        "selector": "#gadget-001"
      };
      d3sparql.htmlhash(json, config);
}

function updateGadget002(click_uri)
{
    $('#gadget-002').empty();
    var sparql_val = getSPARQL002().trim();
    sparql_val = sparql_val.replace(/<%URI%>/g, '<'+click_uri+'>');
    var Q = new sgvizler.Query();
    Q.query(sparql_val)
       .endpointURL("https://lod4all.net/api/sparql")
       .endpointOutputFormat("json")
       .chartFunction("google.visualization.AreaChart")
       .draw("gadget-002");
}

function updateGadget003(click_uri)
{
    $('#gadget-003').empty();
    var sparql_val = getSPARQL003().trim();
    sparql_val = sparql_val.replace(/<%URI%>/g, '<'+click_uri+'>');
    d3sparql.query("https://lod4all.net/api/sparql", sparql_val, render003);
}

function render003(json) {
      var config = {
        "selector": "#gadget-003"
      };
      d3sparql.htmlhash(json, config);
}
