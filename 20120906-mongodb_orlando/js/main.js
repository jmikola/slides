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
