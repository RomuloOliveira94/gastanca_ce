require 'rails_helper'

RSpec.describe "Api::V1::Deputies", type: :request do
  describe "GET /index" do
    let!(:deputies) { create_list(:deputy, 5) }

    it "returns http success" do
      get api_v1_deputies_path
      expect(response).to have_http_status(:success)
    end

    it "returns the correct number of deputies" do
      get api_v1_deputies_path
      expect(json.size).to eq(5)
    end

    it "returns deputies with correct attributes" do
      get api_v1_deputies_path

      deputies.each_with_index do |deputy, index|
        expect(json[index][:id]).to eq(deputy.id)
        expect(json[index][:name]).to eq(deputy.name)
        expect(json[index][:image_url]).to eq(deputy.image_url)
        expect(json[index][:party]).to eq(deputy.party.acronym)
        expect(json[index][:state]).to eq(deputy.state)
      end
    end
  end

  describe "GET /show" do
    let!(:deputy) { create(:deputy) }

    it "returns http success" do
      get api_v1_deputy_path(deputy)
      expect(response).to have_http_status(:success)
    end

    it "returns a 404 status if deputy not found" do
      get api_v1_deputy_path(id: 9999)
      expect(response).to have_http_status(:not_found)
    end

    it "returns the correct deputy" do
      get api_v1_deputy_path(deputy)
      expect(json[:deputy][:id]).to eq(deputy.id)
      expect(json[:deputy][:name]).to eq(deputy.name)
      expect(json[:deputy][:image_url]).to eq(deputy.image_url)
      expect(json[:deputy][:party]).to eq(deputy.party.acronym)
      expect(json[:deputy][:state]).to eq(deputy.state)
    end
  end
end
