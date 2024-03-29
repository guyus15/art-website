Rails.application.routes.draw do
  resources :emails
  devise_for :admins
  resources :posts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "posts#index"

  get '/:page' => "page#show"
end
