=========================
Guake.org Web site source
=========================


This repository contains the source code of the guake.org web site

Installation
============

- entry point is ``npm``. ``npm`` installs main tools such as brower, grunt compilers and other
  scripts management tools,
- ``bower`` is level two of dependency tool. It main installs the packages you will need in your
  website, such as ``angular``, ``jquery``, ``bootstrap``,...
- ``grunt`` is the build tool. Use it to compile you source files to

Install Node, Grunt and other dependencies
******************************************

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
***********************************

.. code-block:: bash

    npm -g install bower
    bower update
