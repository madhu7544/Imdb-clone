class AddmovieController < ApplicationController
  protect_from_forgery prepend: true

  def index
    @movies = Movie.all
  end

  def create
    @current = session[:userid]
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
    @movie.rating = params[:rating]


    if @movie.save
      return render json: {messaage: "Success"}, status: :created
    else
    end
  end


  private

  def movie_params
    params.require(:movie).permit(:title, :poster, :genre, :director, :duration, :description,:releaseDate, :producer,:castCrew,:rating)
  end

end
