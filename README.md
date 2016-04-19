# The Great Project Website

This is the code for website of The Great Project Website.

## Technical details

The site is built use Jekyll static site generator which can be automatically built using Github pages.

In addition the Bourbon framework by thoughbot is used to enable quick development possible.

## Includes

* [HAML](http://haml.info):
  Simple template markup
* [Coffeescript](http://coffeescript.org):
  Write javascript with simpler syntax
* [Sass](http://sass-lang.com):
  CSS with superpowers
* [Autoprefixer](https://github.com/postcss/autoprefixer):
  Add vendor prefixes to CSS
* [Bourbon](http://bourbon.io):
  Sass mixin library
* [Neat](http://neat.bourbon.io):
  Semantic grid for Sass and Bourbon
* [Bitters](http://bitters.bourbon.io):
  Scaffold styles, variables and structure for Bourbon projects.
* [Fullcalendar](http://fullcalendar.io/):
  FullCalendar is a drag-n-drop jQuery plugin for displaying events on a full-sized calendar.


## Getting Started

Install dependencies
```
bundle install
```

Run the server and watch for changes in your files
```
jekyll serve -w
```

## Compiling Javascripts

sudo npm install uglify-js -g
	
Then use it to compress your files…

uglifyjs _javascript/* -o js/application.js