class Api::V1::DeputiesController < ApplicationController
  def index
    @deputies = Deputy.includes(:party).all
  end

  def show
    @deputy = Deputy.includes(expenses: [ :category, :supplier ]).find_by(id: params[:id])

    if @deputy.nil?
      render json: { error: "Deputy not found" }, status: :not_found
    end
  end
end
