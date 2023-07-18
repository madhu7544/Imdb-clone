class MoviesController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:destroy,:create]

  def index
    @current = session[:userid].present?

    @movie = Movie.find(params[:id])
    @actor = Actor.where(movies_id: @movie.id)
  end

  def create
    @review = Review.new
    @review.rating = params[:rating]
    @review.review_text = params[:review]
    @review.movie_id = params[:id]

    if @review.save
      redirect_to root_path
    else
      render :index
    end
  end

  def destroy
    session.delete(:userid)
  end

end
