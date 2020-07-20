---
title: 10th post created
lede: Quick summary of post 10
date: '2020-05-19'
headerImage: header image goes here
thumbImage: https://picsum.photos/id/110/600/350
tags:
  - demo-content
  - simple-post
  - blog
---
## Post 10

A simple post to demonstrate how a normal blog post looks on Hylia. Content is all set in the “Body” field as markdown and Eleventy transforms it into a proper HTML post. You can also edit the markdown file directly if you prefer not to use the CMS.

### a video
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/IiPQYQT2-wg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

How about a `<blockquote>`?

> Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.

## A list of stuff:

* Sed posuere consectetur est at lobortis
* Aenean lacinia bibendum nulla sed consectetur
* Sed posuere consectetur est at lobortis

How about an ordered list of stuff:

1. Sed posuere consectetur est at lobortis
2. Aenean lacinia bibendum nulla sed consectetur
3. Sed posuere consectetur est at lobortis

### sample code
<!-- Markdown Template -->
``` js
<title>{{ pageTitle }}</title>
<link rel="canonical" href="{{ currentUrl }}" />

<meta property="og:site_name" content="{{ siteTitle }}" />
<meta property="og:title" content="{{ pageTitle }}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="{{ currentUrl }}" />
```
