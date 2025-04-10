module.exports = (config) => {
    // This enable all the dependency libraries inside the `assets` folder
    config.addPassthroughCopy({
        "node_modules/reveal.js/dist": "assets/reveal/",
        "node_modules/reveal.js/plugin": "assets/reveal/plugin",
        "node_modules/katex": "assets/katex",
    });

    config.addPassthroughCopy("./src/style.css");
    config.addPassthroughCopy("./src/**/*.jpg");
    config.addPassthroughCopy("./src/**/*.png");
    config.addPassthroughCopy("./src/**/*.gif");

    
    config.addCollection("slideshows", function(collectionApi) {
        return collectionApi.getFilteredByGlob("./src/slides/**/*.md")
    })

    // Disable 11ty's built-in Markdown engine
    config.setLibrary("md", {
        render: (str) => str // Pass-through
    });

    return {
    
        dir: {
            input: "src",
            output: "public",
        },
        markdownTemplateEngine: false,
    };
}