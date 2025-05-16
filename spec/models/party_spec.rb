require 'rails_helper'

RSpec.describe Party, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:acronym) }
  end

  describe 'associations' do
    it { should have_many(:deputies) }
  end

  describe 'database columns' do
    it { should have_db_column(:acronym).of_type(:string) }
  end
end
