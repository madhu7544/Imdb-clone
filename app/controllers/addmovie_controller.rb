class AddmovieController < ApplicationController
  protect_from_forgery prepend: true

  def index
  end

  def create
    @movie = Movie.new(movie_params)
    @movie.title=params[:title]
    @movie.poster=params[:poster]
    @movie.genre=params[:genre]
    @movie.director=params[:director]
    @movie.duration=params[:duration]
    @movie.description=params[:description]
    puts movie

    if @movie.save
      # Movie saved successfully
      # Redirect or return a response as needed
    else
      # Movie failed to save
      # Handle errors and return a response
    end
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :poster, :genre, :director, :duration, :description)
  end
  @user = User.new
end
