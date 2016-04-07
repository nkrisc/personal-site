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

You can embed any font in an Axure prototype. There's a few steps involved:

1. [Base64 encode](http://superuser.com/questions/120796/os-x-base64-encode-via-command-line) the font file. Make sure to use a command that doesn't add newline characters or remove them after the fact.

2. In Axure, go to Publish > Generate HTML Files... > Web Fonts. Add a new web font. Choose the @font-face option.

3. Add your embedded font. This will depend on the filetype of the font file you encoded. For example, if you used a .woff file:

{% highlight %}
@font-face {
    font-family: 'latoregular'; /* replace with font name */
    src: url(data:application/x-font-woff;charset=utf-8;base64,/*put your base64 encoded file here in place of this comment*/) format('woff'),
     url('lato-reg-webfont.ttf') format('truetype');
    font-weight: normal; /* replace as applicable */
    font-style: normal; /* replace as applicable */
}
{% endhighlight %}
[source](http://sosweetcreative.com/2613/font-face-and-base64-data-uri)

4. If you have the font installed locally, just choose it within Axure and use it. This will set the appropriate font-family in the generated HTML and the embedded font will be used. If for whatever reason you don't have it installed locally (but are embedding it?), set up a font mapping for it.