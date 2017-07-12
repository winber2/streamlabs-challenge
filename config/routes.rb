# Rails.application.routes.draw do
#   # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
#   root to: 'static_pages#root'
# end

Rails.application.routes.draw do
  get 'auth/:provider/callback', to: 'api/sessions#create'
  get 'auth/failure', to: "static_pages#root"
  get 'signout', to: 'api/sessions#destroy', as: 'signout'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
  end

  root to: "static_pages#root"
end
