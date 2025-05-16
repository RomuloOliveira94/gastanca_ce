require 'rails_helper'

RSpec.describe Expense, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:amount) }
    it { should validate_presence_of(:deduction) }
    it { should validate_presence_of(:net_value) }
    it { should validate_presence_of(:deputy_id) }
    it { should validate_presence_of(:document_type) }
    it { should validate_presence_of(:supplier_id) }
    it { should validate_presence_of(:month) }
    it { should validate_presence_of(:year) }
  end

  describe 'associations' do
    it { should belong_to(:deputy) }
    it { should belong_to(:supplier) }
    it { should belong_to(:category) }
  end

  describe 'database columns' do
    it { should have_db_column(:installment_number).of_type(:integer) }
    it { should have_db_column(:issue_date).of_type(:date) }
    it { should have_db_column(:amount).of_type(:decimal).with_options(precision: 10, scale: 2) }
    it { should have_db_column(:deduction).of_type(:decimal).with_options(precision: 10, scale: 2) }
    it { should have_db_column(:net_value).of_type(:decimal).with_options(precision: 10, scale: 2) }
    it { should have_db_column(:document_url).of_type(:text) }
    it { should have_db_column(:document_type).of_type(:integer) }
    it { should have_db_column(:month).of_type(:integer) }
    it { should have_db_column(:year).of_type(:integer) }
  end
end
