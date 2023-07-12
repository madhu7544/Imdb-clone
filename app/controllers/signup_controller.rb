class SignupController < ApplicationController
  protect_from_forgery prepend: true
  def index
    # @user = User.new
  end

  def create
    @user = User.new
    @user.username=params[:name]
    @user.password=params[:password]
    @user.email=params[:email]
    if @user.save
      redirect_to login_path
    else
      render :index
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
