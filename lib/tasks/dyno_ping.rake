# namespace :dyno_ping do
# end

desc "Pings PING_URL to keep a dyno alive"
task :dyno_ping do
  require "net/http"

  uri = URI('http://streamplay-app.herokuapp.com')
  Net::HTTP.get_response(uri)

end
