class HomeController < ApplicationController
  def index
    @movies = Movie.all
    if params[:query].present?
      search_query = params[:query]
      @movies = Movie.where('title LIKE ?', "%#{search_query}%")
    end
  end
end
