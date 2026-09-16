What is HTML?

HTML = is used to create the structure and content of a webpage.

Think:
- HTML = structure/content
- CSS = appearance/style
- JavaScript = behaviour/interactivity

HTML Elements

An element is the actual HTML thing.

Examples:

- <p></p> = paragraph
- <h1></h1> = heading 1
- <a> = creates a link
- <head></head> = information about the page
- <title></title> = name shown in the browser
- <body></body> = everything shown on the page
- <img> = displays the image
- <ul></ul> = unordered/bulletlist
- <ol></ol> = Ordered/numbered list
- <li> = list item
- <div></div> = general container (only used when something needs to be grouped in a container)
- <form></form> = creates form
- <label> = label for an input
- <button> = button
- <table></table> = creates table
- <tr> = table row
- <th> </th> = table heading
- <td></td> = table cell
-<option> choice in dropdown
- <select> = dropdown
- <br> = new line
- <hr> horizonal 
- <em> emphasized/italics
- <strong> = bold
- <article></article> = a standalone piece of content
- <footer></footer>
- <nav></nav>= navigation links
-<section> = used to group related content together (section/chapter)

Attributes

An attribute gives an element extra information

Example:

<a href="https://google.com">Google</a>

- <a> = element
- href = attribute
- "https://google.com" = attribute value
- Google = content

- ELEMENT = what the thing is
- ATTRIBUTE = extra information about it
- VALUE = what that information is
- CONTENT = what the element says/contains

Common HTML Attributes

CLASS

Groups elements so they can be targetted by CSS or JavaScript.

<p class="important">Hello</p>

- class = attribute
- "important" = attribute value

Multiple elements can have the same class

ID

Identifies a particular element

<p id="intro">Hello</p>

An id is normally intended to identify one specific element on the page.


HREF

used with links

href tells the link where to go

SRC

used to specify where a resource comes from, such as an image

<img src="cat.jpg">

src tells the browser where the image is

ALT

Provides alternative text for an image

The alt text describes the image

width and height

Can specify dimensions

<img src"cat.jpg" alt="A cat" width="300" height="200">

TITLE

provides an additional information, often shown as a tooltip.

VOID ELEMENTS

Some HTML elements do not have a closing tag. Those are called void elements

Examples:
- img
- br
- hr

Semantic HTML

Semantic = meaning

Semantic HTML uses elements that tell you what the content mean or is for

- header
- nav
- main
- section
- article
- aside
- footer

  Non-Semantic HTML

  A non semantic element does not tell what the content means

  - div = generic container
 It is useful when you need to group things together and there isn't a more meaningful semantic eleement
div groups content together, CSS can make the <div> look like a card

. = Class
# = ID


CSS

Value = the type of thing youre giving to a CSS property

Example:

color: red;

red is a value

the property is color, and CSS expects a color value

width: 500px

500px is a length value

- A CSS property expects a certain type of value

- color -> expects a <color>
- width -> can use a <length>
- font-size -> can use a <length>

UNIT

Unit = what youre using to measyre the value

Example:
width: 500px;

500 = number
px = unit
The 500 is measured in pixels

5cm or 2in - different units, same type = length

Absolute lengths units

Absolute = fixed measurement 
px = pixels
mm = millimetres
in = inches
pt = points

Relative length units

Relative = depends on something else

red = based on the root font size

Exmaple:

font-size: 2rem

2rem = 32px

em = based on current font size (current element's font)

ch = based on the width of the "0" character

vw = viewport width (the visible area of the browser) = (Make this 50% of the browser window's width)

50vw = 500px


CSS Box Model

4 important layers

Content -> Padding -> Border -> Margin

HTML 
<p>Hello world</p>

content
Hello world

CSS
p{
width: 200px;
}

- make the content area 200px wide

Padding

Padding = space inside the box around the content

p{
width: 20px;
}

- Put 20px space around my content

┌──────────────────────┐
│       padding        │
│   ┌──────────────┐   │
│   │    Hello     │   │
│   │    world     │   │
│   └──────────────┘   │
│       padding        │
└──────────────────────┘

Border

borer = the edge/frame around your box

p {
    border: 5px solid black;
}

- put a 5px border around it

Margin


p {
    border: 20px;
}

- Leave 20px of space between this box and other things


        20px margin
             ↓
     ┌───────────────┐
     │     border    │
     │  ┌─────────┐  │
     │  │ content │  │
     │  └─────────┘  │
     └───────────────┘
             ↑
        20px margin

CONTENT  = you 👤
PADDING  = space between you and the walls
BORDER   = walls
MARGIN   = space between your house and other houses


Content = stuff
Padding = breathing room inside
Border = edge
Margin = breathing room outside


Flex-box

- arranging things in one direction

HTML
<div class="buttons">
    <button>Home</button>
    <button>About</button>
    <button>Contact</button>
</div>

CSS
.buttons {
    display: flex;
}

display
[ Home ] [ About ] [ Contact ]

.buttons {
    display: flex;
    flex-direction: column;
}

[ Home ]
[ About ]
[ Contact ]


Grid
- designed for rows and columns at the same time
- 
HTML
<div class="container">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</div>

CSS
.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

Display
[ 1 ] [ 2 ]
[ 3 ] [ 4 ]

.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}


[ 1 ] [ 2 ] [ 3 ]
[ 4 ] [   ] [   ]


If the question says something like:

"Arrange the navigation items horizontally"

Think Flexbox.

If it says:

"Create a layout with 3 columns and 2 rows"

Think Grid.

So:

Flex = line ➡️
Grid = table ⬜⬜⬜



1. Fluid grids

Instead of always saying:

width: 1000px;

you can use relative measurements:

width: 80%;

This allows the layout to adjust as the screen changes.

This connects directly to what we learned about:

%
vw
rem
em

These are relative units.

2. Fluid images

Images should be able to shrink when the screen gets smaller.

A very common CSS rule is:

img {
    max-width: 100%;
    height: auto;
}

Basically:

Don't let the image become wider than its container.

So instead of:

Desktop:
[          BIG IMAGE          ]

Phone:
[  IMAGE TOO BIG →→→→→       ]

the image can shrink:

Phone:
[     IMAGE     ]
3. Media queries ⭐

This is probably the most important one to understand for your SBA.

A media query lets you say:

"If the screen is this size, change the CSS."

Example:

@media (max-width: 600px) {
    .navigation {
        flex-direction: column;
    }
}

Normally:

Home   About   Contact

But when the screen becomes 600px or smaller:

Home
About
Contact

So you can change your layout for phones.



Yes! This is an **important distinction** in CSS. The difference is the `.`.

### `p { }` means the HTML element

If you write:

```css
p {
    color: red;
}
```

You're saying:

> **"Style every `<p>` element."**

So:

```html
<p>Hello</p>
<p>Goodbye</p>
```

Both become red.

---

### `.p { }` means a class called `p`

If you write:

```css
.p {
    color: red;
}
```

You're saying:

> **"Style anything that has `class="p"`."**

For example:

```html
<p class="p">Hello</p>
<div class="p">Goodbye</div>
```

Both can be styled because they have the class `p`.

---

### 🧠 The key difference

| CSS      | Looks for      |
| -------- | -------------- |
| `p { }`  | `<p>` elements |
| `.p { }` | `class="p"`    |
| `#p { }` | `id="p"`       |

Think of it like:

```text
p       → HTML element
.p      → class
#p      → ID
```

### And this is why you might see something like:

```css
p {
    font-size: 16px;
}

.paragraph {
    color: blue;
}
```

The first one styles **all paragraphs**.

The second one only styles elements that have:

```html
class="paragraph"
```

So **don't read `.p` as "paragraph."** The dot is what tells CSS:

> "This is a class selector."




Remember these two:

@media → responds to the screen/viewport

@container → responds to the size of its container


MEDIA QUERY
Screen
  ↓
"How big is the screen?"

@media


CONTAINER QUERY
Container
  ↓
"How much space does this container have?"

@container


p {
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
}













