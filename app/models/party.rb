class Party < ApplicationRecord
  has_many :deputies, dependent: :destroy

  validates :acronym, presence: true, uniqueness: true
end
