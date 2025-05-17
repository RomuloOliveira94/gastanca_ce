class Api::V1::DeputiesController < ApplicationController
  def index
    @deputies = Deputy.includes(:party).all
  end

  def show
    @deputy = Deputy.includes(:party).find_by(id: params[:id])

    unless @deputy
      render json: { error: "Deputy not found" }, status: :not_found
    end
  end
end
