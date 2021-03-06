// Filters
const dateFilter = require('./src/filters/date-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginCloudinaryImage = require( "eleventy-plugin-cloudinary" );

// Import data files
const site = require('./src/_data/site.json');


// Transforms
const htmlMinTransform = require('./src/transforms/html-min-transform.js');
const parseTransform = require('./src/transforms/parse-transform.js');

// Create a helpful production flag
const isProduction = process.env.NODE_ENV === 'production';


module.exports = config => {
  // Add filters
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('w3DateFilter', w3DateFilter);

// Only minify HTML if we are in production because it slows builds _right_ down
if (isProduction) {
  config.addTransform('htmlmin', htmlMinTransform);
} 
  // processes transforms rules in parse-transforms.js
  config.addTransform('parse', parseTransform);

  const sortByDisplayOrder = require('./src/utils/sort-by-display-order.js');
  // Plugins
  config.addPlugin(pluginRss);
  config.addPlugin(sitemap, {
    sitemap: {
      hostname: "http://localhost:8080",
    },
  });
  config.addPlugin(syntaxHighlight);

  // Cloudinary plugin
  config.cloudinaryCloudName = 'genxtechblog'

  config.addPlugin( pluginCloudinaryImage );

  // specify pass-through directories
  config.addPassthroughCopy("src/js");

  // Custom collections
  // posts by date and limited by site setting for max posts
  const now = new Date();
  const livePosts = post => post.date <= now && !post.data.draft;
  config.addCollection('posts', collection => {
    return [
      ...collection.getFilteredByGlob('./src/posts/*.md').filter(livePosts)
    ].reverse()
      .slice(0, site.maxPostsPerPage);
  });

 // Returns a collection of blog posts in reverse date order
config.addCollection('blog', collection => {
  return [...collection.getFilteredByGlob('./src/posts/*.md')].reverse();
});

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false);

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};