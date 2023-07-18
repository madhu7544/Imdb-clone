class ActorsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:destroy]

  def index
    @current = session[:userid].present?

    @actor = Actor.find(params[:id])
  end

  def destroy
    session.delete(:userid)
  end

end
