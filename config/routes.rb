Rails.application.routes.draw do
  devise_for :users

  root to: 'pages#home'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :plants, only: [ :index, :show, :update, :create, :destroy ]
    end
  end
  # resources :bookings, only: [:index, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

