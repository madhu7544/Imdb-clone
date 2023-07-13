class MoviesController < ApplicationController
  def index
    @movie = Movie.find(params[:id])
    # render json: @movie
  end
end
