class Api::MessagesController < ApplicationController
  def index
    if params[:name] && params[:chatroomId]
      @messages = Message.where(user: params[:name], chatroomId: params[:chatroomId])
      render :index
    elsif params[:chatroomId]
      @messages = Message.where(chatroomId: params[:chatroomId])
      render :index
    end
  end
end
