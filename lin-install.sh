#!/bin/bash

if [[ ! -z $http_proxy ]]; then
    npm config set proxy ${http_proxy}
fi
if [[ ! -z $https_proxy ]]; then
    npm config set https-proxy ${https_proxy}
fi
echo "Installing Sass"
if [[ ! -z $http_proxy ]]; then
    sudo gem install --http-proxy ${http_proxy} sass
else
    sudo gem install sass
fi

echo "npm install"
npm install

echo "bower install"
bower install
