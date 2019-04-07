module.exports = config => {
  config.addCollection("posts", collection => {
    return collection.getFilteredByGlob("posts/*.md");
  });
  config.addCollection("tutorials", collection => {
    return collection.getFilteredByGlob("tutorials/*.md");
  });
  config.addCollection("projects", collection => {
    return collection.getFilteredByGlob("projects/*.md");
  });
  return {
    dir: {
      output: "docs"
    }
  }
};