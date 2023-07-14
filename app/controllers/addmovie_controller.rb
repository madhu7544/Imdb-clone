class AddmovieController < ApplicationController
  protect_from_forgery prepend: true

  def index
  end

  def create
    @movie = Movie.new
    @movie.title=params[:title]
    @movie.poster=params[:poster]
    @movie.genre=params[:genre]
    @movie.director=params[:director]
    @movie.duration=params[:duration]
    @movie.description=params[:description]
    @movie.releasedate = params[:releaseDate]
    @movie.producer=params[:producer]
    @movie.castcrew = params[:castCrew]

    # @actor = Actor.new
    # @actor.name=params[:actorName]
    # @actor.photo=params[:actorImage]
    # @actor.description=params[:actorBio]

    if @movie.save
      redirect_to root_path
    else
      # Movie failed to save
      # Handle errors and return a response
    end
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :poster, :genre, :director, :duration, :description,:releaseDate, :producer,:castCrew)
  end

  # def actor_params
  #   params.require(:actor).permit(:actorName, :actorImage, :actorBio)
  # end

end
