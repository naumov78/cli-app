Rails.application.routes.draw do

  root "static_pages#root"
  namespace :api, defaults: { format: :json } do

    resources :folders, only: [:show, :create, :update, :destroy]
    resources :items, only: [:update, :destroy]
    resources :records, only: [:index, :create, :destroy]

  end
end
