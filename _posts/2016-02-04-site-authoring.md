---
layout: post
title:  "Easy Authoring of a Static Site"
date:   2016-02-04 22:10:00
categories: code site
hero:
heroalt:
heroattr:
description: "Recently I took a few steps to create a process that I could use to regularly update my site with as little effort as possible. This will be nothing new to anyone with more than a few drops of development experience, but it's all a learning experience for me."
---

I've owned this eponymous domain for far longer than I hosted a site on
it. Some time during college I registered the domain knowing I would
eventually use it as a personal site. Though to be honest, I wasn't ever 
particularly concerned about losing out on it as my name is not particularly 
common.

It took some time before I sat down to make a site though. I wanted to learn more about web development, but somehow it becomes less fun when you're
making a site about yourself. Finally, I had no workflow to make updating my
site easy or painless.

Recently I took a few steps to create a process that I could use to regularly update my site with as little effort as possible. This will be nothing new
 to anyone with more than a few drops of development experience, but it's all
  a learning experience for me.

### Publishing With Jekyll

I knew that essentially my site would resemble a blog, whether the content
be portfolio items or more general postings. That meant I need some sort of
CMS. A traditional option like WordPress seemed like overkill for my needs,
not to mention I didn't exactly consider managing a WordPress installation a
 reduction in my tasks.

It wasn't long after considering that that I learned about [Jekyll](http://jekyllrb.com) a static site generator. The
gist of it is that I can write content in individual Markdown files with a
simple folder structure, and with a quick `jekyll build` my site is ready to 
go. All the meta data for a post is specified at the start of each file, 
which can then 3be used in templates.

### Version Control

My site is really not much more than some Markdown files and folders; pretty
easy to delete the wrong thing or lose a lot of content. I clearly needed
some sort of version control. I chose Git, something any developer is
familiar with. But once again, my site is nothing more than text files, so
it was super easy to use Git to back up my site. I can even host it on
GitHub so I can work on it from any of my computers.

### Publishing the Site

And we reach the last step: getting my site up onto the web! This was
pretty easy. I decided to use [Gulp](http://gulpjs.com) to create a task to
upload my site to my host. I found a great Gulp task [here](http://loige.co/gulp-and-ftp-update-a-website-on-the-fly/) that does it perfectly. A
final step might be to incorporate Jekyll's build process into that.

### Conclusion
Everything I've written about is pretty standard stuff, nothing novel or
special. But it is only a year ago that I probably would not have
considered most of these solutions. I've always been interested in web
development (and software engineering more generally) so finding my way to
this solution was an enjoyable learning experience. One that gets me an
easy-to-update site in the process!