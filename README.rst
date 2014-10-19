=========================
Guake.org Web site source
=========================


This repository contains the source code of the guake.org web site

Installation
============

Install Node, Grunt and other dependencies
******************************************

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
