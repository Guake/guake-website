=========================
Guake.org Web site source
=========================


This repository contains the source code of the guake.org web site

Introduction
============

Because writing web pages using notepads or word-like software is not more relevant, we now need to
use a true development environment. That's what is "web development". So, building a web page
required to set up all the paradigms we use when developing any other "heavy" software. That why we
have **source code**, **compilators**, **components**, **deployment procedures**,...

I am not really used to web development but this kind of suite me, since I do software development
for almost 20 years. I am used to commit my change in a central repository, write deployment
scripts, think and rethink the architecture of my software. Why not for web pages?

Designing a good looking web page is now just a small **part** of the job of building a web site. To
be fair, I used to write PHP websites in my teen ages, and since then, I only managed to get in
touch with open source frame work such as Drupal, Joomla or Wordpress, relying on someelse's job to
deploy a good looking website. Software programming was more for C++, Java or even python projects.

For Guake I have decided to give a try on writing a one page web site using cutting edge web
development tool. But some good old habbits are still here, that's why I have writen down most of
the procedures and commands in easily understandable scripts, so they can be used at entry points in
my daily development routine.


Components
==========

Main building tools
*******************

- the main entry point for the project is ``npm``. ``npm`` (nodejs) installs the main tools such as
  ``brower``, the ``grunt`` task manager and other scripts management tools,
- ``bower`` is the level two of dependency management. It mainly installs the packages you will use
  in your website, such as ``angular``, ``jquery``, ``bootstrap``,...
- ``grunt`` is the build tool. Basically it is just a task manager, like Makefile or Ant. There is
  use set of plugins available to perform many operations. Grunt will compile your source files into
  testable website and will prepare the file for the release package.

More information
----------------

* http://nodejs.org/
* http://bower.io/
* http://gruntjs.com/getting-started

Technologies
============

In the new web development world, we need to carefully choose the language that matches our needs.
It is a real paradox that there are so many languages that needs to fill the lack of html, css, and
javascripts. These three are used in **every** modern web browser, yet they are not suited for web
development (so on the developer side).

Main File formats
*****************

From my humble web 2.0 experience I choose the following technologies:

**Less**

  This source file compiles to CSS file. I clearly prefere CSS over concurent solution like SCSS, it
  is less powerful, but powerful enough, and doesn't repends on Ruby environment (I hate when a tool
  forces us to setup a complete environment, completely different from the current one).

  I clearly prefer the ``sass`` syntax, for the lack of curly braces, matching the two other file
  format syntaxes.

  **Reference**: http://lesscss.org/

**CoffeeScript**

  As source file for Javascript. It adds syntax sugar over the ugly javascript syntax (I really hate
  JavaScript). Even if I am not completely fan of CoffeeScript syntax (I hate the definition syntax
  for a method, it far from being intuitive), but, it is still better than bare JavaScript.

  **Reference**: http://coffeescript.org/

**Jade**

  This is compiled into Html page. It is a simple template system than mainly binds HTML tags
  without complex HTML closing tags and hides all the verbosity of the HTML/XML format.

  **Reference**: http://jade-lang.com/

All these files are managed though the ``grunt`` building tool. Of course, ``npm``/``nodejs`` is
nearby, but ony in the installation process.

Other file format
*****************

**reStructuredText**

  Forget about using the the flawed Markdown format for writing your formatted text documents. Every
  implementation is different, leading to a format with almost no standart. How can we hate IE6 so
  much and still use a bad file format such as Markdown ?

  ``reStructuredText`` defines a proper standart for basic text formatting a clean extention
  mecanisms for other parser to add more features (such as ``sphinx-builder`` documentation system).

Building Overview
-----------------

Source files are converted into the web page like this::

    Jade         ===============================> public/*.html

    Coffeescript ===== + jquery/other deps =====> public/js/*.js

    Less         ===============================> public/css/*.css

    Other
    images/files ===============================> public/img/*.png
                                                  public/files/*.*

The Web components used in this projects
****************************************

**bootstrap**

  The famous framework from Twitter. It hides all complexity over the responsiveness stuff a modern
  website needs to respect in order to run seamlessly on PC, mobile, and any other devices.

  It also deals with all the differences between web browser I, as a developer, *do NOT want to deal
  with*. Thanks to ``bootstrap`` and its ``normalize.css``, all these annoying differences are
  abstracted.

  Reference: http://getbootstrap.com/

**jquery-scrolldeck**

  Simpler and powerful animation scrolling framework. It is a pretty old library, and seems only
  compatible with ``jquery-1.8.2``.

  Reference: http://johnpolacek.github.io/scrolldeck.js/

  **Note**: see this page for reproducting the *parallax* effect:
  http://www.ianlunn.co.uk/blog/code-tutorials/recreate-nikebetterworld-parallax/

**jquery.easing**

  Smooth movements on CSS events (imported by ``jquery-scrolldeck``)

  Reference: http://gsgd.co.uk/sandbox/jquery/easing/

**jquery**

  The famous jquery library (imported by ``jquery-scrolldeck``)

  Reference: http://gsgd.co.uk/sandbox/jquery/easing/

Other Grunt plugins used
************************

**sitemap**

  This plugin helps generating a Search Engine friendly file named ``sitemap.xml``.

**concat**, **uglify**, **watch**, **connect**, **copy**

  These grunt plugins are used in the build system in order to perform operations on the files,
  concatenating and *uglifying* the javascript files when preparing the deployment package.


Installation
============

Linux
*****

Corporate behind HTTP Proxy
---------------------------

.. code-block:: bash

    npm config set proxy ${http_proxy}
    npm config set https-proxy ${https_proxy}

Install
-------

.. code-block:: bash

    ./lin-install.sh


Update to latest available version
----------------------------------

.. code-block:: bash

    ./lin-update-deps.sh

Windows
*******

Install Node
------------

  http://nodejs.org/download/

Install the .NET Framework 2.0 SDK
----------------------------------

(seems required to build karma)

  http://www.microsoft.com/fr-fr/download/confirmation.aspx?id=19988

Install grunt and bower
-----------------------

.. code-block:: bash

    npm install -g grunt-cli
    npm install -g bower

Upgrading required dependencies
-------------------------------

.. code-block:: bash

    win-update-deps.bat

Update your development environment
-----------------------------------

.. code-block:: bash

    win-install.bat


EditorConfig
============

Please use an editor that supports EditorConfig

  http://editorconfig.org/

For SublimeText, please install ``EditorConfig``.

Development process
===================

Use the ``[win|lin]-dev-build.[bat|sh]`` script to build the environment. If you want to inspect
your change in a web browser, I advise to use ``[win|lin]-dev-serve.[bat|sh]``. It will start a
small web server and open you browser to the ``http://localhost:9000`` URL, where you can test the
changes in live.

**TODO**: I'd like to add LiveReload support to this web page.

Unit testing
************

Unit test is not supported for the moment in the current development environment, but that is a part
of the project I would like to add in the futur.

Miscellaneous informations
==========================

Project bootstrapping
*********************

This project has been started by a squeleton built by Yeoman, using ``generator-jabl``:

.. code-block:: bash

    npm install -g yo
    npm install -g generator-jabl
    yo jabl

This generated the main ``packages.json``, ``grunt.json`` and the directory structure.

**References**:

* http://cnpmjs.org/package/generator-jabl


Travis
******

A travis build has been configured for this repository. Find it here:

  https://travis-ci.org/Guake/guake-website/builds

It used to check that every pull request at least compiles.
