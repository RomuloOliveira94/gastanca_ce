class Deputy < ApplicationRecord
  has_many :expenses, dependent: :destroy
  validates :name, :integration_id, :cpf, :state, presence: true
end
