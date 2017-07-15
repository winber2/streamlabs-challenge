App.static_pages = App.cable.subscriptions.create "StaticPagesChannel",
  connected: ->
    # Called when the subscription is ready for use on the server

  disconnected: ->
    # Called when the subscription has been terminated by the server

  received: (data) ->
    # Called when there's incoming data on the websocket for this channel
    $("##{data.chatroomId}").append "<span>#{data.message}</span>"

  speak: (message) ->
    @perform 'speak', message
