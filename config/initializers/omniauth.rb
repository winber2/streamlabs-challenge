OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '481538411291-cfgrieebjsehleej57mb1rg2hn2vh2dk.apps.googleusercontent.com', 'Fd4Jds8A9Zw_bQoQW7Jyo2uh', {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}, skip_jwt: true}
end
