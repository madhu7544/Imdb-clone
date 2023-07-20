class AddactorController < ApplicationController
    protect_from_forgery prepend: true
    skip_before_action :verify_authenticity_token, only: [:create]

    def index
        @movies = Movie.all
    end

    def create
        actor = Actor.new
        actor.name = params[:name]
        actor.photo = params[:photo]
        actor.description = params[:description]
        actor.movies_id = params[:movie_id]
        
        if actor.save
          return render json: {message: "Success"}, status: :created
        else
          return render json: { message: actor.errors.full_messages}, status: :unprocessable_entity
        end
    end
    
  private

    def actor_params
      params.require(:actor).permit(:name, :photo, :description,:movies_id)
    end

end
