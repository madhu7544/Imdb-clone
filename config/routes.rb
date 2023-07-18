Rails.application.routes.draw do
  root "home#index"

  get '/home', to: "home#index"
  get '/search', to: "home#search"
  post "/home", to: "home#destroy"

  get '/movies/:id', to: "movies#index"
  post "/movies/:id", to: "movies#destroy"

  get '/actors/:id', to: "actors#index"
  post "/actors/:id", to: "actors#destroy"

  get '/login', to: "login#index"
  post '/login', to: 'login#create'
  

  get '/signup', to: "signup#index"
  post '/signup', to: "signup#create"
  
  get '/addmovie', to: "addmovie#index"
  post '/addmovie', to: "addmovie#create"

  get '/addactor', to: "addactor#index"
  post '/addactor', to: "addactor#create"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # resources :movies do
  #   resources :movies
  # end
end
