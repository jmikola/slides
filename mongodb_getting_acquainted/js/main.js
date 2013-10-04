Reveal.addEventListener("ready", function() {
    jsPlumb.reset();

    jsPlumb.importDefaults({
        Connector: "StateMachine",
        PaintStyle: { lineWidth: 3, strokeStyle: "white" },
        Endpoint: "Blank",
        Anchor: "Continuous",
        Overlays: [ ["PlainArrow", { location: 1, width: 20, length: 12 } ]]
    });

    jsPlumb.connect({ source: "relational-articles", target: "relational-authors" });
    jsPlumb.connect({ source: "relational-comments", target: "relational-articles" });
    jsPlumb.connect({ source: "relational-comments", target: "relational-authors" });
    jsPlumb.connect({ source: "relational-articles-to-tags", target: "relational-articles" });
    jsPlumb.connect({ source: "relational-articles-to-tags", target: "relational-tags" });
});

Reveal.addEventListener('slidechanged', function() {
    jsPlumb.repaintEverything();
});
