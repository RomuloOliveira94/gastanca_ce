class Deputy < ApplicationRecord
  has_many :expenses, dependent: :destroy
  validates_presence_of :name, :integration_id, :cpf, :state
end
