require_relative 'boot'

require 'rails/all'

# require 'faye/websocket'
#
# module ChatDemo
#   class ChatBackend
#     KEEPALIVE_TIME = 15 # in seconds
#
#     def initialize(app)
#       @app     = app
#       @clients = []
#     end
#
#     def call(env)
#     end
#   end
# end

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Streamlabs
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    # config.middleware.use ChatDemo::ChatBackend
  end
end
