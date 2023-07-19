class ActorsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:destroy]
  before_action :set_cache_headers

  def index
    @current = session[:userid].present?

    @actor = Actor.find(params[:id])
  end

  def destroy
    session.delete(:userid)
  end

  private

  def set_cache_headers
    response.headers["Cache-Control"] = "no-cache, no-store"
  end
end
