class Deputy < ApplicationRecord
  has_many :expenses, dependent: :destroy
  belongs_to :party
  validates :name, :integration_id, :cpf, :state, presence: true
end
