class StaticPagesChannel < ApplicationCable::Channel
  def subscribed
    stream_from "static_pages_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def speak(data)
    # ActionCable.server.broadcast 'static_pages_channel', data['message']
    Message.create content: data['message']
  end
end
