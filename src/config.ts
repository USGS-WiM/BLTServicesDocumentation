
//http://lgorithms.blogspot.com/2013/07/angularui-router-as-infrastructure-of.html
//http://www.funnyant.com/angularjs-ui-router/

declare var configuration: any;
module BLT {
    'use strinct';

    class config {
        static $inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
        constructor(private $stateProvider: ng.ui.IStateProvider, private $urlRouterProvider: ng.ui.IUrlRouterProvider, private $locationProvider: ng.ILocationProvider) {
            this.$stateProvider
                .state("main", {
                url: '/',
                reloadOnSearch: true,
                //abstract: true,
                template:'<ui-view/>',
                views: {
                    'main': {
                        templateUrl: "Views/homeview.html",
                        controller: "BLT.Controllers.MainController"
                    },
                    'sidebar': {
                        templateUrl: "Views/sidebarview.html",  
                        controller: "BLT.Controllers.SidebarController"

                    },
                    'navbar': {
                        templateUrl: "Views/navigationview.html",
                        controller: "BLT.Controllers.NavbarController"
                    }
                }
                })//end main state 
                          
            this.$urlRouterProvider.otherwise('/');

            //this.$locationProvider.html5Mode(true);                            
        }//end constructor
    }//end class

    angular.module('BLT',[
        "ui.router", "mobile-angular-ui",
        'leaflet-directive',
        "BLT.Services",
        "BLT.Controllers",
        'jsonFormatter', 'WiM.Services', 'WiM.Event', 'BLT.Directives'
        ])
        .config(config);
}//end module 