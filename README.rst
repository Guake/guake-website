=========================
Guake.org Web site source
=========================


This repository contains the source code of the guake.org web site

Introduction
============

Because web development is now fully a programation, building a web page required to set up all the
paradigms we use when developing any software. That why we have ``source code``, ``compilators``,
``components``, ``deployment procedures``,...

I am not really used to web development but this kind of suite me, since I am used to commit my
change in a central repository, write deployment scripts, think and rethink the architecture of my
software.

Designing a good looking web page is now just a **part** of the job of building a web site from
scratch. To be fair, I used to write PHP websites in my teen ages, and since then, I only managed to
get in touch with open source frame work such as Drupal, Joomla or Wordpress, relying on someelse's
job to deploy a good looking website.

For Guake I have decided to give a try on writing a one page web site using cutting edge web
development tool. But some good old habbits are still here, that's why I have writen down most of
the procedures and commands in easily understandable scripts, so they can be used at entry points in
my daily development routine.


More information
----------------

* http://gruntjs.com/getting-started

Components
==========

Main building tools
-------------------

- entry point is ``npm``. ``npm`` installs main tools such as brower, grunt compilers and other
  scripts management tools,
- ``bower`` is level two of dependency tool. It main installs the packages you will need in your
  website, such as ``angular``, ``jquery``, ``bootstrap``,...
- ``grunt`` is the build tool. Use it to compile you source files into testable website and to
  prepare the release process.

Main javascript components used in this project
-----------------------------------------------

- ``normalize.css``: CSS compatiblity
- ``jquery``: the infamous library
- ``bootstrap``: html template
- ``jquery.easing``: easing animation (non linear animations)
- ``jquery-scrolldeck``: perform animation on scroll position, parallax, ...
- ``less``: Less files are compiled into CSS files. Easier and more power to use than bare CSS
- ``coffeescript``: Same than Less for CSS, Coffeescript make Javascript a bit simpler to use.
- ``jade``: Again, same than Less for CSS and Coffeescript for JavaScript. Jade files are simpler
  than HTML file

Overview
--------

::

    Jade         ===============================> public/*.html

    Coffeescript ===== + jquery/other deps =====> public/js/*.js

    Less         ===============================> public/css/*.css

    Other
    images/files ===============================> public/img/*.png
                                                  public/files/*.*



Installation
============

Install Node, Grunt and other dependencies
------------------------------------------

Linux
-----

Corporate behind HTTP Proxy:

.. code-block:: bash

    npm config set proxy ${http_proxy}
    npm config set https-proxy ${https_proxy}

Install:

.. code-block:: bash

    npm install
    bower


Update to latest available version
----------------------------------

.. code-block:: bash

    npm update

Windows
-------

http://nodejs.org/download/

Install the .NET Framework 2.0 SDK
(http://www.microsoft.com/fr-fr/download/confirmation.aspx?id=19988)

.. code-block:: bash

    npm install -g grunt-cli

The dependency packages are:

.. code-block:: bash

    npm install grunt-contrib-uglify --save-dev
    npm install grunt-contrib-jshint --save-dev
    npm install grunt-contrib-concat --save-dev
    npm install grunt-contrib-watch --save-dev
    npm install grunt-contrib-jade --save-dev
    npm install grunt-contrib-less --save-dev
    npm install grunt-contrib-connect --save-dev
    npm install grunt-contrib-copy --save-dev
    npm install grunt-contrib-coffee --save-dev
    npm install jquery --save-dev

Upgrading required dependencies:

    .. code-block:: bash

        npm update

Update your development environment
-----------------------------------

.. code-block:: bash

    npm -g install bower
    bower update


EditorConfig
------------

Please use an editor that supports EditorConfig

  http://editorconfig.org/

For SublimeText, please install ``EditorConfig``.

Project bootstrapping
=====================

This project has been started by a squeleton built by Yeoman, using ``generator-jabl``:

.. code-block:: bash

    npm install -g yo
    npm install -g generator-jabl
    yo jabl

This generated the main ``packages.json``, ``grunt.json`` and the directory structure.

References:

* http://cnpmjs.org/package/generator-jabl


