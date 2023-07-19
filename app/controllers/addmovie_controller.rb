class AddmovieController < ApplicationController
  protect_from_forgery prepend: true
  before_action :isuser_present

  def index
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

    if @movie.save
      return render json: {messaage: "Success"}, status: :created
    else
    end
  end

  def isuser_present
    if session[:userid].present?
    else
      redirect_to login_path
    end
  end

  private

  def movie_params
    params.require(:movie).permit(:title, :poster, :genre, :director, :duration, :description,:releaseDate, :producer,:castCrew)
  end

end
