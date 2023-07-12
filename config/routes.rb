Rails.application.routes.draw do
  root "home#index"

  get '/home', to: "home#index"
  get '/movies/:id', to: "movies#index"
  get '/actors/:id', to: "actors#index"
  get '/login', to: "login#index"
  get '/signup', to: "signup#index"
  post '/signup', to: "signup#create"

  get '/addmovie', to: "addmovie#index"


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # resources :movies do
  #   resources :movies
  # end
  
end
