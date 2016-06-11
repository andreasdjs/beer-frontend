angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.topList', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/topList.html',
        controller: 'topListCtrl'
      }
    }
  })

  .state('tabsController.availableLocally', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/availableLocally.html',
        controller: 'availableLocallyCtrl'
      }
    }
  })

  .state('tabsController.availableOnline', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/availableOnline.html',
        controller: 'availableOnlineCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.showItem'
      2) Using $state.go programatically:
        $state.go('tabsController.showItem');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page6
      /page1/tab2/page6
      /page1/tab3/page6
  */
  .state('tabsController.showItem', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/showItem.html',
        controller: 'showItemCtrl'
      },
      'tab2': {
        templateUrl: 'templates/showLocalItem.html',
        controller: 'showItemCtrl'
      },
      'tab3': {
        templateUrl: 'templates/showOnlineItem.html',
        controller: 'showItemCtrl'
      }
    }
  })
/**/



/**/  

$urlRouterProvider.otherwise('/page1/page2')

  

});