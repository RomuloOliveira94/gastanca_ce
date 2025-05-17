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
    let!(:deputy) { create(:deputy, :with_expenses) }

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
      expect(json[:id]).to eq(deputy.id)
      expect(json[:name]).to eq(deputy.name)
      expect(json[:image_url]).to eq(deputy.image_url)
      expect(json[:party]).to eq(deputy.party.acronym)
      expect(json[:state]).to eq(deputy.state)
    end

    it "returns the correct expenses by month" do
      get api_v1_deputy_path(deputy)
      expected_expenses = deputy.monthly_expenses.map do |month, expenses|
        {
          month: month,
          expenses: expenses.map do |expense|
            expense_expected_hash(expense)
          end
        }
      end

      expect(json[:monthly_expenses]).to eq(expected_expenses)
    end

    it "returns the correct total expenses by category" do
      get api_v1_deputy_path(deputy)
      expected_totals = deputy.total_category_expenses.map do |category, value|
        {
          category: category,
          value: value.to_f
        }
      end

      expect(json[:total_category_expenses]).to eq(expected_totals)
    end

    it "returns the correct total expenses" do
      get api_v1_deputy_path(deputy)
      expected_total = deputy.total_expenses.to_f

      expect(json[:total_expenses]).to eq(expected_total)
    end

    it "returns the correct average total monthly expense" do
      get api_v1_deputy_path(deputy)
      expected_average = deputy.average_total_monthly_expense.to_f.round(2)

      expect(json[:average_total_monthly_expense]).to eq(expected_average)
    end

    it "returns the correct most expensive expense" do
      get api_v1_deputy_path(deputy)
      most_expensive = deputy.most_expensive_expense

      expect(json[:most_expensive_expense]).to eq(expense_expected_hash(most_expensive))
    end
  end

  private

  def expense_expected_hash(expense)
    {
      id: expense.id,
      installment_number: expense.installment_number,
      issue_date: expense.issue_date.to_s,
      amount: expense.amount.to_f,
      deduction: expense.deduction.to_f,
      net_value: expense.net_value.to_f,
      document_url: expense.document_url,
      document_type: expense.document_type,
      month: expense.month,
      year: expense.year,
      supplier: {
        name: expense.supplier.name,
        document: expense.supplier.document
      },
      category: {
        name: expense.category.name
      }
    }
  end
end
