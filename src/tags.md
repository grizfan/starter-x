---
title: 'The latest posts from GenXTechBlog'
lede: All the news that's print to fit
layout: 'layouts/feed.html'
pagination:
  data: collections
  size: 1
  alias: tag
  filter: ['nav', 'work', 'featuredWork', 'people', 'rss']
permalink: '/tag/{{ tag | slug }}/'
---