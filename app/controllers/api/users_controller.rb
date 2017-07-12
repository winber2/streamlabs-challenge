class Api::UsersController < ApplicationController
  def show
    @user = user.find_by(uid: params[:user][:uid])
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:uid, :name)
  end
end
