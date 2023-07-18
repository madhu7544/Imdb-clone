class MoviesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:destroy]

  def index
    @current = session[:userid].present?

    @movie = Movie.find(params[:id])
    @actor = Actor.where(movies_id: @movie.id)
  end

  def destroy
    session.delete(:userid)
  end
end
