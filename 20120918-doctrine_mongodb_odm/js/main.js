Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    rollingLinks: false,
    theme: Reveal.getQueryHash().theme || 'default', // available themes are in /css/theme
    transition: Reveal.getQueryHash().transition || "linear",
    dependencies: [
        { src: "../common/reveal.js/lib/js/highlight.js", async: true, callback: function() { window.hljs.initHighlightingOnLoad(); } },
        { src: "../common/reveal.js/lib/js/classList.js", condition: function() { return !document.body.classList; } },
        { src: "../common/reveal.js/lib/js/showdown.js", condition: function() { return !!document.querySelector("[data-markdown]"); } },
        { src: "../common/reveal.js/lib/js/data-markdown.js", condition: function() { return !!document.querySelector("[data-markdown]"); } }
    ]
});
