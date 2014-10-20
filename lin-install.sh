#!/bin/bash

if [[ ! -z $http_proxy ]]; then
    npm config set proxy ${http_proxy}
fi
if [[ ! -z $https_proxy ]]; then
    npm config set https-proxy ${https_proxy}
fi
npm install
bower install
