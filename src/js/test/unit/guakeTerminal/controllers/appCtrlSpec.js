'use strict';

describe('AppCtrl', function() {

    var ctrl;
    var $scope;

    // Load module
    beforeEach(module('guakeTerminal'));

    beforeEach(inject(function($rootScope, $controller) {

        // Create scope
        $scope = $rootScope.$new();

        // Create controller
        ctrl = $controller('AppCtrl', {
            $scope: $scope
        });

    }));

    it('should be defined', function() {
        expect(ctrl).toBeDefined();
    });

});