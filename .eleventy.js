module.exports = config => {
  config.addCollection("posts", collection => {
    return collection.getFilteredByGlob("posts/*.md").slice().reverse();
  });
  config.addCollection("tutorials", collection => {
    return collection.getFilteredByGlob("tutorials/*.md").slice().reverse();
  });
  config.addCollection("projects", collection => {
    return collection.getFilteredByGlob("projects/*.md").slice().reverse();
  });
};
