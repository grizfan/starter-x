---
title: 'The latest posts from GenXTechBlog'
lede: All the news that's print to fit
layout: 'layouts/feed.html'
pagination:
  data: collections.blog
  size: 6
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
---

## The latest articles from around the studio, demonstrating our design thinking, strategy and expertise.