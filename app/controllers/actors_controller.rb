class ActorsController < ApplicationController
  def index
    @current = session[:userid].present?

    @actor = Actor.find(params[:id])
  end
end
