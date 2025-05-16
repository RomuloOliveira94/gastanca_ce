class Deputy < ApplicationRecord
  has_many :expenses, dependent: :destroy
  belongs_to :party
  validates :name, :integration_id, :cpf, :state, presence: true

  def image_url
    "http://www.camara.leg.br/internet/deputado/bandep/#{integration_id}.jpg"
  end
end
