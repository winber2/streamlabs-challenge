class BroadcastMessageJob < ApplicationJob
  queue_as :default

  def perform(message)
    # Do something later
    ActionCable.server.broadcast('static_pages_channel', { message: message.content, chatroomId: message.chatroomId })
  end

  private

  def render_message(message)
    ApplicationController.renderer.render message
  end

end
