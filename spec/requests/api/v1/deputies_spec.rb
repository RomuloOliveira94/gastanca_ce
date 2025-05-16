require 'rails_helper'

RSpec.describe "Api::V1::Deputies", type: :request do
  before(:each) do
    @deputy = create(:deputy)
  end

  describe "GET /index" do
    it "returns http success" do
      get "/api/v1/deputies"

      expect(response.body).to include(@deputy.name)
      expect(response).to have_http_status(:success)
    end
  end
end
