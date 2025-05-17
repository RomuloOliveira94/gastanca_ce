require 'rails_helper'

RSpec.describe Deputy, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:integration_id) }
    it { should validate_presence_of(:cpf) }
    it { should validate_presence_of(:state) }
  end

  describe 'associations' do
    it { should have_many(:expenses) }
  end

  describe 'database columns' do
    it { should have_db_column(:name).of_type(:string) }
    it { should have_db_column(:integration_id).of_type(:string) }
    it { should have_db_column(:cpf).of_type(:string) }
    it { should have_db_column(:state).of_type(:string) }
  end

  describe '#image_url' do
    it 'returns the correct image URL' do
      deputy = Deputy.new(integration_id: 12345)
      expect(deputy.image_url).to eq("http://www.camara.leg.br/internet/deputado/bandep/12345.jpg")
    end
  end

  let(:deputy) { create(:deputy) }
  let(:category1) { create(:category, name: "Transporte") }
  let(:category2) { create(:category, name: "Alimentação") }
  let(:supplier) { create(:supplier) }

  before do
    create(:expense, deputy: deputy, category: category1, supplier: supplier, net_value: 100, month: 1, year: 2024)
    create(:expense, deputy: deputy, category: category1, supplier: supplier, net_value: 200, month: 2, year: 2024)
    create(:expense, deputy: deputy, category: category2, supplier: supplier, net_value: 300, month: 1, year: 2024)
  end

  describe "#total_category_expenses" do
    it "returns the total net_value grouped by category" do
      expect(deputy.total_category_expenses).to eq({
        "Transporte" => 300.0,
        "Alimentação" => 300.0
      })
    end
  end

  describe "#total_expenses" do
    it "returns the sum of all net_value" do
      expect(deputy.total_expenses).to eq(600.0)
    end
  end

  describe "#monthly_expenses" do
    it "returns expenses grouped by month name" do
      expect(deputy.monthly_expenses.keys).to include("Janeiro", "Fevereiro")
      expect(deputy.monthly_expenses["Janeiro"].size).to eq(2)
      expect(deputy.monthly_expenses["Fevereiro"].size).to eq(1)
    end
  end

  describe "#highest_expense" do
    it "returns the expense with the highest net_value" do
      expect(deputy.highest_expense.net_value).to eq(300.0)
    end
  end

  describe "#total_monthly_expenses" do
    it "returns the total net_value grouped by month name" do
      expect(deputy.total_monthly_expenses).to eq({
        "Janeiro" => 400.0,
        "Fevereiro" => 200.0
      })
    end
  end

  describe "#average_total_monthly_expense" do
    it "returns the average monthly expenses" do
      expect(deputy.average_total_monthly_expense).to eq(300.0)
    end
  end
end
