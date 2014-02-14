'use strict';

// Set the jasmine fixture path
// jasmine.getFixtures().fixturesPath = 'base/';

describe('guakeTerminal', function() {

    var module;
    var dependencies;
    dependencies = [];

    var hasModule = function(module) {
        return dependencies.indexOf(module) >= 0;
    };

    beforeEach(function() {

        // Get module
        module = angular.module('guakeTerminal');
        dependencies = module.requires;
    });

    it('should load config module', function() {
        expect(hasModule('guakeTerminal.config')).toBeTruthy();
    });

    it('should load controllers module', function() {
        expect(hasModule('guakeTerminal.controllers')).toBeTruthy();
    });

    it('should load filters module', function() {
        expect(hasModule('guakeTerminal.filters')).toBeTruthy();
    });

    it('should load directives module', function() {
        expect(hasModule('guakeTerminal.directives')).toBeTruthy();
    });

    it('should load services module', function() {
        expect(hasModule('guakeTerminal.services')).toBeTruthy();
    });

});
