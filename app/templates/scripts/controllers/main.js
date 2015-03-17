'use strict';

/**
 * @ngdoc function
 * @name <%= appname %>.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the <%= appname %>
 */
angular.module('<%= appname %>')
  .controller('MainCtrl', function ($scope, LiveOak, MessageService, $log) {

    var app = LiveOak.app();

    $scope.message = {name:'Anonymous', text: ''};
    $scope.messages = [];

    $scope.sendMessage = function(){
      MessageService.sendMessage($scope.message);
      $scope.message.text = '';
    };

    LiveOak.connect( function() {
      app.create( '/storage', { id: 'chat' }, {
        success: function() {
          $log.debug('Info: Chat collection created.');

          app.subscribe( '/storage/chat/*', function(data, action) {
            $scope.$apply(function(){
              console.log($scope.message);
              console.log($scope.messages);
              if (action === 'create') {
                MessageService.addMessage( data, $scope.messages );
              } else if (action === 'update') {
                MessageService.updateMessage( data, $scope.messages );
              } else if (action === 'delete') {
                MessageService.removeMessage( data, $scope.messages );
              }
            });
          });

          app.read( '/storage/chat?fields=*(*)', {
            sort: 'time',
            success: function(data) {
              $scope.$apply(function() {
                $scope.messages = data.members ? angular.copy(data.members) : [];
              });
            }
          });
        },
        error: function() {
          $log.debug('Error: Unable to create new chat collection.');
        }
      } );
    } );

  });
