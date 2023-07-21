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

    @movies = @movies.where('title LIKE ?', "%#{title}%")
                     .where('genre LIKE ?', "%#{genre}%")
                     .where('releasedate LIKE ?', "%#{year}%")
                     .order(average: :desc) if title.present? || genre.present? || year.present? || rating.present?

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
