class LoginController < ApplicationController
  protect_from_forgery prepend: true
  def index
  end

  def create
    @username = params[:email]
    @password = params[:password]
    # render json: { username: username, password: password}

    user = User.find_by(email: @username)

    if user && user.password == @password
      session[:user_id] = user.id
      redirect_to root_path
    else
      redirect_to login_path
    end
  end

end
