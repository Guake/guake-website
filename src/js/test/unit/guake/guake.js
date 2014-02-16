'use strict';

// Set the jasmine fixture path
// jasmine.getFixtures().fixturesPath = 'base/';

describe('guake', function() {

    var module;
    var dependencies;
    dependencies = [];

    var hasModule = function(module) {
        return dependencies.indexOf(module) >= 0;
    };

    beforeEach(function() {

        // Get module
        module = angular.module('guake');
        dependencies = module.requires;
    });

});
