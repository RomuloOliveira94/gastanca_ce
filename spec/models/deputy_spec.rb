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
end
