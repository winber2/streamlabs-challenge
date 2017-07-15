class BroadcastMessageJob < ApplicationJob
  queue_as :default

  def perform(message)
    # Do something later
    ActionCable.server.broadcast 'static_pages_channel', message.content
  end

  private

  def render_message(message)
    ApplicationController.renderer.render message
  end

end
