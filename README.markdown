Interlock Website
=====

This site was implemented using [nanoc3](http://nanoc.stoneship.org/), a Ruby program that "compiles" templates and content into a static HTML site.

Getting Started
=======

To compile the site, type:

    rake

This will compile HAML templates into HTML, and copy Javascript, CSS, and images from the `assets` directory to `output`.

Dependencies
=======

You'll need to have the following gems installed to compile:

* nanoc3
* haml
