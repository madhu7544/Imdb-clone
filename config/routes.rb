Rails.application.routes.draw do
  root "home#index"

  get '/home', to: "home#index"
  get '/movies', to: "movies#index"
  get '/actors', to: "actors#index"
  get '/login', to: "login#index"
  get '/signup', to: "signup#index"
  get '/addmovie', to: "addmovie#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
