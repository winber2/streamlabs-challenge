Rails.application.routes.draw do
  get 'auth/:provider/callback', to: 'api/sessions#create'
  get 'auth/failure', to: "static_pages#root"
  get 'signout', to: 'api/sessions#destroy', as: 'signout'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
  end

  root to: "static_pages#root"
end
