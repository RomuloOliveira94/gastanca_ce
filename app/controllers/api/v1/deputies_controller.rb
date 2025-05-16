class Api::V1::DeputiesController < ApplicationController
  def index
    @deputies = Deputy.includes(:party).all

    render json: @deputies, include: :party
  end
end
