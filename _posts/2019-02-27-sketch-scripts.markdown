---
layout: post
title:  "Formatting Sketch Files With Scripts"
date:   2019-02-27 16:46:00
categories: sketch
hero: "/assets/script-hero.png"
heroalt: "An excert of code in a text editor."
heroattr:
description: "Sometimes it's easier to programmatically make updates to Sketch files in lieu of tedious manual updates. Here are two scripts that help achieve that."
---

Since Sketch version 43, Sketch files are really just ZIP archives containing mostly JSON files that describe the pages, symbols, and layers in a Sketch document. This allows for doing some pretty cool things. For example, here are two scripts I created and used recently. While working on a large Sketch library file with multiple people, we finally settled on a naming convention for our symbol names. One aspect of it was that we wanted the names to be entirely lowercase. Unfortunately many of the symbols were already created and they were not all lowercase. This meant I was going to have to go through and manually fix each symbol name (and try not to introduce new typos!). Instead, after a little reading of online Python resources, I put together this script that opens the Sketch file, finds every symbol master layer in the document, and makes sure its name is all lowercase. 
At this point it could be modified for any sort of formatting, but this is all we needed this time.

The second script is based on the first and is a little simpler. It dumps all the symbol names in the document into a text file to make auditing the names easier. Instead of scrolling through Sketch, we have an alphabetically sorted list of the symbol names. Here are both the scripts:

**format.py**
[GitHub Gist](https://gist.github.com/nkrisc/9127f1c1ae185a5c459874afee7e299d)
{% highlight python %}
import os
import zipfile
import tempfile
import sys
import json

zipname = sys.argv[1]
def format_symbol_name(name):
    return name.lower()

def update_file(zipname):
    # generate a temp file
    tmpfd, tmpname = tempfile.mkstemp(dir=os.path.dirname(zipname))
    os.close(tmpfd)

    # read the sketch file as a zip file      
    with zipfile.ZipFile(zipname, 'r') as zin:
        with zipfile.ZipFile(tmpname, 'w') as zout:
            zout.comment = zin.comment # preserve the comment

            # track how many layer names were changed
            updated = 0

            for item in zin.infolist():
                data = zin.read(item.filename)

                # find pages and update symbol names
                if item.filename.startswith('pages') and item.filename.endswith('.json'):
                    parsed_json = json.loads(data)
                    for layer in parsed_json['layers']:

                        # only modify symbol masters
                        if layer['_class'] == 'symbolMaster':
                            before_name = layer['name']
                            formatted_name = format_symbol_name(layer['name'])
                            layer['name'] = formatted_name

                            if before_name != formatted_name: updated += 1
                    data = json.dumps(parsed_json)

                #write back to temp archive
                zout.writestr(item, data)
            print '%d symbol names updated.' % updated
    # replace with the temp archive
    os.remove(zipname)
    os.rename(tmpname, zipname)

update_file(zipname)
{% endhighlight %}

**symbol-names.py**
[GitHub Gist](https://gist.github.com/nkrisc/afef754770c6c28f7ba7ee232b59716a)
{% highlight python %}
import os
import zipfile
import tempfile
import sys
import json

sketch_doc = sys.argv[1]

def get_symbol_names(zipname):
    symbol_names = []

    # read the sketch file as a zip file          
    with zipfile.ZipFile(zipname, 'r') as sketch_file:
        for item in sketch_file.infolist():
            data = sketch_file.read(item.filename)

            # find pages and collect symbol names
            if item.filename.startswith('pages') and item.filename.endswith('.json'):
                parsed_json = json.loads(data)
                for layer in parsed_json['layers']:

                    # only collect names of symbol masters
                    if layer['_class'] == 'symbolMaster':
                        symbol_names.append(layer['name'])
        sketch_file.close()

    sorted_symbol_names = sorted(symbol_names)

    # make new file for symbol names
    out_name = '%s-symbol-names.txt' % sketch_doc
    out = open(out_name, 'w+')

    for item in sorted_symbol_names:
        line = '%s\r\n' % item
        out.write(line)
    
    out.close()
    print 'Found %d symbols in the document.' % len(symbol_names)

get_symbol_names(sketch_doc)
{% endhighlight %}