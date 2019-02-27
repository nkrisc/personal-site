---
layout: post
title:  "Creating a Good Sketch Symbol"
date:   2019-02-26 16:25:00
categories: sketch noindex
hero: "https://d2mxuefqeaa7sj.cloudfront.net/s_E7DF8B30F7C8D28B2EF4A29FE95D469F68FDBF8B7621A57B3329D48C6F951C9B_1550526822197_Screen+Shot+2019-02-18+at+3.53.19+PM.png"
heroalt:
heroattr:
description: "When creating a Sketch symbol, for your own use or for a design library, there are a few important considerations in the making of a good Sketch symbol."
---
# What Makes a Good Symbol?

Consider, for a moment, the inverse: what makes a bad symbol? The easiest way to tell a symbol isn’t successful is when you find yourself detaching the symbol to make modifications to it. This symbol did not account for some use-case or need you had of it and so you had to make the change yourself. At a practical level this also means you’re losing out on the primary benefit of symbols, which is to have repeated elements defined once and updated in one place. A good symbol is then one that you don’t need to detach and has the options you need, can fit the size you want, and remains intact and defined in one location.

A good symbol is *flexible*, *extensible,* and *comprehensive*. A flexible symbol can be easily resized to any legal dimensions (according to the applicable design guidelines) while maintaining its visual integrity. An extensible symbol can be easily changed or updated with new content without having to rebuild what’s already been defined in the symbol. A comprehensive symbol allows a user to use it with every variation of the pattern it represents.


# Planning Your Symbol

The reality is that likely a single Sketch symbol won’t be enough. There are enough current limitations with how Sketch symbols work that your “symbol” might actually be a few different Sketch symbols that a user can choose from. For example, if you were creating a symbol for tooltips and the pattern allows for the pointer to be on any side as required, you might just need to make four different symbols with the indicator on each side. This does not mean though that you have to make it in a way that isn’t *extensible*.

![Variations of a single pattern, represented by four separate Sketch symbols](https://d2mxuefqeaa7sj.cloudfront.net/s_E7DF8B30F7C8D28B2EF4A29FE95D469F68FDBF8B7621A57B3329D48C6F951C9B_1550526822197_Screen+Shot+2019-02-18+at+3.53.19+PM.png)

## Account for States and Conditions

Before you start creating your symbol, determine what states, conditions, or variations of the symbol you need to account for. It’s worthwhile to go ahead and create all these states or conditions and lay them out in Sketch or elsewhere. This will aid in the next step.

# Hardening Your Symbol

Look at all your states and variations of your symbol. What parts did you duplicate? Identify any part of the symbol that has been defined in more than one place and make that its own symbol. A complex symbol can be made of yet more symbols. In the above example, you can see that the tooltip container, the close icon, the text and the pointer are repeated four times. These are perfect candidates for symbols. For example, the container with the close icon and text can all be made into a generic `Tooltip Body` symbol, the pointer into its own `Pointer` symbol. These can then be combined to symbols for the four variations seen, however each of these four symbols contain nothing but other symbols.

![The symbols that are put together to create different variations of the pattern.](https://d2mxuefqeaa7sj.cloudfront.net/s_E7DF8B30F7C8D28B2EF4A29FE95D469F68FDBF8B7621A57B3329D48C6F951C9B_1550527446659_Screen+Shot+2019-02-18+at+4.03.57+PM.png)


Now the text of the tooltip is defined in a single location, the `Tooltip Body` symbol, even though it appears in multiple places. If you wanted to change the tooltip pattern to have blue text instead or a different corner radius, you would only need to make a single update. Likewise the close icon would be its own symbol as well so that if you ever wanted to update the close icon, it is only a single change.

## How Will Your Symbol Be Used?

Consider what parts of your symbol will have different options available, such as different icons that can appear or dynamic text that might change. These are parts of your symbol that you want the user to be able to *override*. In Sketch, overrides are parts of a symbol that the user can configure after they’ve placed it in their document. It might be a button label that they will change, or an icon on a notification depending if it represents a success or failure state. 

![After selecting the symbol’s artboard the Manage Overrides panel in the inspector becomes available.](https://d2mxuefqeaa7sj.cloudfront.net/s_E7DF8B30F7C8D28B2EF4A29FE95D469F68FDBF8B7621A57B3329D48C6F951C9B_1550587133197_Screen+Shot+2019-02-19+at+8.38.40+AM.png)


At the same, you should consider what parts of the symbol *can’t* be overridden. Perhaps you want the icon of the notification to be changed, but the color should always remain the same. By restricting overrides you help everyone stay consistent with your design guidelines. 

In the above image you can see the overrides that have been enabled and disabled for this portion of the tooltip symbol. The user should be able to update the text as they please, as no two tooltips will have the same text, but they are not able to update the Text Style of that text. They are also not able to update the icon for the close button nor its color. 

Another small but important detail regarding symbols is that the labels that appear in the overrides options are the layer names of the layers in your symbol. For example, the `Tooltip Label` text you see in the image is actually the name of the text layer that is used for the tooltip text. By default text layers use the first few words of the text. You should absolutely rename your layers to give them meaningful name. Do this even for layers for which you will not allow overrides, it makes editing your symbol easier down the road, especially for complex symbols.

## Plan For Fluid Resizing

Most websites these days resize fluidly. While your final Sketch mocks themselves will be static, you might need to represent different sizes of screens, and those different screen sizes might require you to stretch and shrink your symbols. 

![The Resizing panel when selecting a layer in your symbol.](https://d2mxuefqeaa7sj.cloudfront.net/s_E7DF8B30F7C8D28B2EF4A29FE95D469F68FDBF8B7621A57B3329D48C6F951C9B_1550587995509_Screen+Shot+2019-02-19+at+8.53.05+AM.png)


Take a look at the image above. There are three components to the Resizing panel: Pin to Edge, Fix Size, and Preview.

**Pin to Edge**
This defines the pinning behavior of the selected layer when the whole symbol it is a part of is resized. In this example, the top and right pins are activated (shown in blue). This means that when the symbol is resized the selected layer, the close button in this case, will always maintain the same distance from those edges as you see now. Its distance from the bottom and left edges will vary.

**Fix Size**
This defines how the selected layer resizes when the symbol is resized. In this example both axes are activated, meaning both axes are fixed and will not change. By default both are deactivated meaning the layer will scale in both directions as the symbol is resized. 

**Preview**
Lastly, this gives you an idea of how the layer will behave when the symbol is resized by showing a short animation when you hover the mouse over it.

## More On Overrides

Beyond simply overriding the text on a text layer, there are three powerful ways that you can use overrides: text styles, layer styles, and overriding symbols.

But first, what are layer styles and text styles? If you’re not familiar with them already, they allow you to define commonly used styles for text and layers in a way that lets you easily use them on new layers, helping you keep everything consistent. Layer styles work similarly but define other properties on a layer like fill and border color.

![An example of a text style that defines a Heading, applied to a text layer.](https://d2mxuefqeaa7sj.cloudfront.net/s_E7DF8B30F7C8D28B2EF4A29FE95D469F68FDBF8B7621A57B3329D48C6F951C9B_1550589256206_Screen+Shot+2019-02-19+at+9.13.27+AM.png)


**Text Style Overrides**
Allowing users to override a text style can be useful in a case when a part of your symbol has text that might appear differently in different cases. Imagine an input field that has helper text below it. The default state of the field might have black helper text that describes what the input is for. However in an error case, perhaps that text is replaced with red error text that describes an input validation error. If you create a text style for each appearance of the text (helper text, error text) you can then allow the user to override the text style to show whichever case they want to without having to detach and modify the symbol directly. This also helps to suggest what styles are valid and available for that location by having them pre-defined. 

**Layer Style Overrides**
These work similarly to text style overrides. Probably one of the most useful cases for layer style overrides are with icon symbols. When you create an icon symbol that contains a vector shape, you can apply a layer style to it to color it. When someone uses that symbol they can then override the layer style to change the color of the icon.

![An icon symbol with a layer style override.](https://d2mxuefqeaa7sj.cloudfront.net/s_E7DF8B30F7C8D28B2EF4A29FE95D469F68FDBF8B7621A57B3329D48C6F951C9B_1550591618456_Screen+Shot+2019-02-19+at+9.53.29+AM.png)


**Symbol Overrides**
When your symbol contains other symbols, those symbols can be overridden too. There is one caveat: the symbols must exactly the same dimensions to be valid replacements for one another. Icons symbols are a good example of this. If you have three different icon symbols, and the symbol artboards are the same size, you can use a symbol override to swap icons.

![An example of a symbol override allowing the replacement of an icon.](https://d2mxuefqeaa7sj.cloudfront.net/s_E7DF8B30F7C8D28B2EF4A29FE95D469F68FDBF8B7621A57B3329D48C6F951C9B_1550591740371_Screen+Shot+2019-02-19+at+9.55.31+AM.png)



## Categorizing and Naming Symbols

Sketch will automatically add symbols to nested menus based on the name you give a symbol. Here’s an example list of symbols names:

    Tooltip/Components/Pointer
    Tooltip/Components/Container
    Tooltip/Components/Close Icon
    Tooltip/Hover Tooltip/Point Up
    Tooltip/Hover Tooltip/Point Down
    Tooltip/Active Tooltip/Point Up
    Tooltip/Active Tooltip/Point Down

At each slash `/` Sketch will create a new level of nested menu. In this example all these symbols would be grouped in a menu called `Ratings` in the primary symbol menu in Sketch. Within that menu there would be three nested menus: `Components`, `Hover Tooltip`, and `Active Tooltip`. Each of those would then contain further symbols.

When creating a symbol, try to keep the naming scheme as simple as possible such that the most used symbols will be readily available without digging through menus. Alternatively, it might be a good idea to cleanly hide away all the smaller symbols you used to create the ones you want people to use. They will be there, but that doesn’t mean they’re necessarily meant to be used directly.


# Appendix 

**Additional Notes**
To translate a CSS `line-height` property to a text style in Sketch, set the `Line` property of the text to the text size times the value of the `line-height` property. For example, if 16px text is supposed to have a `line-height` of 1.25, then the `Line` property in Sketch should be set to 20. If math isn’t your thing, you could enter `16*1.25` into the field and Sketch will calculate it for you.

![](https://d2mxuefqeaa7sj.cloudfront.net/s_E7DF8B30F7C8D28B2EF4A29FE95D469F68FDBF8B7621A57B3329D48C6F951C9B_1550855157671_Screen+Shot+2019-02-22+at+11.03.33+AM.png)