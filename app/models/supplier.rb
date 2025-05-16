class Supplier < ApplicationRecord
  has_many :expenses, dependent: :destroy
  validates_presence_of :name, :document
end
