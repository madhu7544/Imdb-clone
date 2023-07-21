class HomeController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:destroy]
  before_action :set_cache_headers

  def index
    @current = session[:userid].present?
    @movies = Movie.select('movies.*, AVG(reviews.rating) AS average')
                .left_joins(:reviews)
                .group('movies.id')
  end

  def search
    title =params[:title]
    year = params[:year]
    genre = params[:genre]
    rating = params[:rating]
    all = params[:all]
    @movies = Movie.select('movies.*, AVG(reviews.rating) AS average')
                .left_joins(:reviews)
                .group('movies.id')

    @movies= @movies.where('title LIKE ?', "%#{title}%") if title.present?
    @movies= @movies.where('genre LIKE ?', "%#{genre}%") if genre.present?
    @movies= @movies.where('releasedate LIKE ?', "%#{year}%") if year.present?
    @movies = @movies.order(average: :desc) if rating.present?
    render json: @movies
  end

  def destroy
    session.delete(:userid)
    redirect_to root_path
  end

  private

  def set_cache_headers
    response.headers["Cache-Control"] = "no-cache, no-store"
  end

end
