Reveal.addEventListener("relational-diagram", function() {
    jsPlumb.selectEndpoints({scope: "relational"}).delete();

    var common = {
        scope: "relational",
        connector: "StateMachine",
        paintStyle: { lineWidth: 3, strokeStyle: "white" },
        endpoint: "Blank",
        anchor: "Continuous",
        overlays: [ ["PlainArrow", { location: 1, width: 20, length: 12 } ]]
    };

    window.setTimeout(function(){
        jsPlumb.connect({ source: "relational-articles", target: "relational-authors" }, common);
        jsPlumb.connect({ source: "relational-comments", target: "relational-articles" }, common);
        jsPlumb.connect({ source: "relational-comments", target: "relational-authors" }, common);
        jsPlumb.connect({ source: "relational-articles-to-tags", target: "relational-articles" }, common);
        jsPlumb.connect({ source: "relational-articles-to-tags", target: "relational-tags" }, common);
    }, 500);
}, false);
