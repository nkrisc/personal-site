---
layout: post
title:  "Embedding Fonts in Axure Prototypes"
date:   2016-04-06 19:39:00
categories: axure
hero:
heroalt:
heroattr:
description: "Sometimes creating a hi-fidelity prototype in Axure requires specific fonts. If the font you need isn't hosted online for use as a web font, you can embed it directly in the Axure file."
---
You can embed any font you have in an Axure prototype. Here are the steps involved:

### Step 1: Readying the font
[Base 64 encode](http://superuser.com/questions/120796/os-x-base64-encode-via-command-line) (Mac OS) the font file. Make sure to use a command that doesn't add newline characters or remove them after the fact. I used `openssl base64 -in <infile> -out <outfile>`. I then removed the newline characters in Sublime Text using find and replace to replace `\n` with nothing. 

If you're using Windows, [see the accepted answer here.](http://stackoverflow.com/questions/16945780/decoding-base64-in-batch)

Don't worry, this is the hardest part.

### Step 2: Embed the font in Axure
In Axure, go to Publish > Generate HTML Files... > Web Fonts. Click the green plus sign to add a new web font. Choose the @font-face radio button.
![Axure web font settings showing above code in place](/assets/axure_embed_1.png)
At this point we're going to use Axure's web font feature a little differently than it was intended. Normally you would add a link to a font file hosted on the web somewhere. Instead of giving a URL, we're telling the browser (via the CSS `@font-face` property) that the included string of text is actually a font file, encoded in base 64, and to interpret it as such. The exact details of this will depend on the filetype of the font file you encoded. For this example I've used a `.woff` file:

{%highlight css%}
    font-family: 'myfont'; /* replace with font name */
    src: url(data:application/x-font-woff;charset=utf-8;base64,/*put your base64 encoded file here in place of this comment*/) format('woff');
    font-weight: normal; /* replace as applicable */
    font-style: normal; /* replace as applicable */
{% endhighlight %}
[Source](http://sosweetcreative.com/2613/font-face-and-base64-data-uri).
_Note, you don't dont to include the usual_ `@font-face {}` _block as Axure will do that for you._

### Step 3: Using the font
If you have the font installed locally, just choose it within Axure as you would any font and use it. This will set the appropriate `font-family` property in the generated HTML and the embedded font will be used. If for whatever reason you don't have it installed locally (but are embedding it anyway), set up a font mapping for it. If you need help setting up a font mapping, take a look [here](http://www.axure.com/c/forum/tips-tricks-examples/7950-web-fonts-font-mapping.html) on the offical Axure forums.

I hope this helps you create higher fidelity prototypes.