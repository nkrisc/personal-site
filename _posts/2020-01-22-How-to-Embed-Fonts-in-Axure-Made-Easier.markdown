---
layout: post
date: 2020-01-22 09:34:32
categories: Axure
hero: "/assets/typeface.jpg"
heroalt: "Assorted wood letter blocks for a printing press, stacked."
description: Linking to web fonts in Axure has always been easy and supported, but sometimes you need to fonts to work offline and without installing them. So you've realized you need to embed it somehow. Here's an easy, one-click way to do so.
---
## Introduction

**Just looking for the tool? [Here it is](#the-goods)**

I've written previously on [how to embed fonts in Axure](https://www.nathankrischer.com/axure/2016/04/06/axure-embedded-font.html). It's the most popular post on my site and has been referenced frequently on Axure's official forums. But my guide is not even the first and there are many other well (better) written ones out there. However, one thing that my original guide, and all others I could find, lack is ease of use. Sure, they work well if you follow the directions precisely, but they either require some familiarity with the command line or use of various websites to encode the font file. Then you need to carefully follow directions on how to properly construct a CSS `@font-face` declaration. And if you're using a different type of font file than the instructions you're following, you might have to start doing some research on what specific values you need as what is shown might not work for you.

For a while now I've wanted to make something easier. So in the past two weeks I took the time to learn [Elm](https://elm-lang.org) (a topic for another post) as a potentially easy way to prototype interactive experiences, and deicded to make this font tool as a first project.

## How is this easier?
My goal was to make a tool that did everything for you as much as possible. Here's how it works:

1. Upload the font file you want to embed (or in the future, provide a link to it if it's online).

2. Copy the provided text and paste in into Axure! That's it!

The tool looks at the font file and provides all the necessary values or formatting specific to the font you uploaded. Now in reality, it's still a work in progress so there might be some issues, but it does deliver on that promise if you consider the current happy-path. I will continue to iterate on it and make it better.

## Where is it?
You didn't come here to read, you came here to embed font files in your Axure prototype. Here it is.

<a markdown="0" id="the-goods">
<iframe src="/assets/axfont.html" style="width:100%;height:800px;border:none;margin-top:32px;"></iframe>