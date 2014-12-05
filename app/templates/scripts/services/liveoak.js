'use strict';

angular.module('<%= appname %>').factory('LiveOak', function () {
  return new LiveOak({host: '<%= serverHost %>', port: <%= serverPort %>});
});

angular.module('<%= appname %>').factory('MessageService', function (LiveOak, $log) {

  var messageService = {};

  messageService.addMessage = function(data, messages) {
    messages.unshift(data);
  };

  function processMessage(data, messages, callback) {
    for (var i in messages){
      var msg = messages[i];
      if (data.id === msg.id){
        callback(i);
        break;
      }
    }
  }

  messageService.removeMessage = function(data, messages) {
    processMessage(data, messages, function(i) {
        messages.splice(i, 1);
      }
    );
  };

  messageService.updateMessage = function(data, messages) {
    processMessage(data, messages, function(i){
      messages[i] = data;
    });
  };

  messageService.sendMessage = function(message){
    if (message === ''){
      $log.debug('WARNING: No message in the input box.');
      return;
    }
    $log.debug('INFO: Going to create new message item in the collection.');
    LiveOak.create( '/<%= appname %>/storage/chat',
      {
        name: message.name,
        text: message.text,
        time: new Date().getTime()
      },
      {
        success: function() {
          $log.debug('INFO: Message sent.');
        },
        error: function() {
          $log.debug( 'ERROR: Unable to send the message.' );
        }
      } );
  };

  return messageService;
});
