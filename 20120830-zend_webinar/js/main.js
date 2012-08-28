Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    rollingLinks: false,
    transition: Reveal.getQueryHash().transition || "linear",
    dependencies: [
        { src: "node_modules/reveal.js/lib/js/highlight.js", async: true, callback: function() { window.hljs.initHighlightingOnLoad(); } },
        { src: "node_modules/reveal.js/lib/js/classList.js", condition: function() { return !document.body.classList; } },
        { src: "node_modules/reveal.js/lib/js/showdown.js", condition: function() { return !!document.querySelector("[data-markdown]"); } },
        { src: "node_modules/reveal.js/lib/js/data-markdown.js", condition: function() { return !!document.querySelector("[data-markdown]"); } }
    ]
});

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
