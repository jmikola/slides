Reveal.initialize({
    // Full list of configuration options available here:
    // https://github.com/hakimel/reveal.js#configuration
    controls: true,
    progress: true,
    history: true,
    rollingLinks: false,

    // Optional libraries used to extend on reveal.js
    dependencies: [
        { src: '../vendor/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: '../vendor/reveal.js/plugin/markdown/showdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: '../vendor/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: '../vendor/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: '../vendor/reveal.js/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } }
    ]
});
