class LoginController < ApplicationController
  protect_from_forgery prepend: true 
  skip_before_action :verify_authenticity_token, only: [:create]

  def index
  end

  def create
    @username = params[:email]
    @password = params[:password]

    user = User.find_by(email: @username)

    if user && user.password == @password
      session[:userid] = user.id
      redirect_to root_path
    else
      error_message = 'Invalid username or password'
      render json: { error: error_message }, status: :unprocessable_entity
    end
  end
end
