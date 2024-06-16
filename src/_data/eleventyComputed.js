export default (eleventyConfig) => {
  return {
    debug: () => typeof process.env.DEBUG !== "undefined" && true,
    permalink: (data) =>
      process.env.ELEVENTY_NODRAFT && data.draft ? false : data.permalink,
    eleventyExcludeFromCollections: (data) => !data.permalink,
  };
};
