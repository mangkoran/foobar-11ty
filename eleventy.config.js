export default (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("./src/images/");
  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "dist",
    },
  };
};
