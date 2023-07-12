class HomeController < ApplicationController

  def index
    @movies = Movie.all
  end

  def new
    @movie = Movie.new
  end
  
  def create
    @movie = Movie.new(movie_params)
    if @movie.save
      redirect_to @movie
    else
      render :new
    end
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :description, :rating, :releaseddate, :castcrew, :director, :duration, :image)
  end

end
