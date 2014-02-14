(function(window, document) {

// Create all modules and define dependencies to make sure they exist
// and are loaded in the correct order to satisfy dependency injection
// before all nested files are concatenated by Grunt

// Config
angular.module('guakeTerminal.config', [])
    .value('guakeTerminal.config', {
        debug: true
    });

// Modules
angular.module('guakeTerminal.controllers', []);
angular.module('guakeTerminal.directives', []);
angular.module('guakeTerminal.filters', []);
angular.module('guakeTerminal.services', []);
angular.module('guakeTerminal',
    [
        'guakeTerminal.config',
        'guakeTerminal.controllers',
        'guakeTerminal.directives',
        'guakeTerminal.filters',
        'guakeTerminal.services'
    ]);
angular.module('guakeTerminal.controllers')
    .controller('AppCtrl', ['$scope', function($scope){

        // Your code here

    }]);})(window, document);