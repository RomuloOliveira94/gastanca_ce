Rails.application.routes.draw do
  get "*path", to: "home#index", constraints: ->(req) { !req.path.start_with?("/api") }
  root "home#index"

  namespace :api do
    namespace :v1 do
      resources :deputies, only: [ :index, :show ], defaults: { format: :json }
    end
  end
end
