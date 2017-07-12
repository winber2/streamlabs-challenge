class Api::SessionsController < ApplicationController
  def create
    user = User.from_omniauth(request.env["omniauth.auth"])
    session[:user_id] = user.id
    render template: "static_pages/root"
  end

  def destroy
    session[:user_id] = nil
    render template: "static_pages/root"
  end
end
