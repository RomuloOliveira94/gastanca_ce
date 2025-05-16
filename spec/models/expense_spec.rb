require 'rails_helper'

RSpec.describe Expense, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:description) }
    it { should validate_presence_of(:amount) }
    it { should validate_presence_of(:deduction) }
    it { should validate_presence_of(:net_value) }
    it { should validate_presence_of(:deputy_id) }
    it { should validate_presence_of(:document_url) }
    it { should validate_presence_of(:document_type) }
    it { should validate_presence_of(:supplier_id) }
  end

  describe 'associations' do
    it { should belong_to(:deputy) }
    it { should belong_to(:supplier) }
  end

  describe 'database columns' do
    it { should have_db_column(:description).of_type(:string) }
    it { should have_db_column(:installment_number).of_type(:integer) }
    it { should have_db_column(:issue_date).of_type(:date) }
    it { should have_db_column(:amount).of_type(:decimal).with_options(precision: 10, scale: 2) }
    it { should have_db_column(:deduction).of_type(:decimal).with_options(precision: 10, scale: 2) }
    it { should have_db_column(:net_value).of_type(:decimal).with_options(precision: 10, scale: 2) }
    it { should have_db_column(:document_url).of_type(:text) }
    it { should have_db_column(:document_type).of_type(:integer) }
  end
end
