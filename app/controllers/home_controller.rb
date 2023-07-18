class HomeController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:destroy]

  def index
    @current = session[:userid].present?
    @movies = Movie.all    
  end

  def search
    title =params[:title]
    year = params[:year]
    genre = params[:genre]
    rating = params[:rating]
    all = params[:all]
    @movies = Movie.all

    @movies= @movies.where('title LIKE ?', "%#{title}%") if title.present?
    @movies= @movies.where('genre LIKE ?', "%#{genre}%") if genre.present?
    @movies= @movies.where('releasedate LIKE ?', "%#{year}%") if year.present?
    @movies = @movies.order(rating: :desc) if rating.present?
    render json: @movies
  end

  def destroy
    session.delete(:userid)
    redirect_to root_path
  end

end
