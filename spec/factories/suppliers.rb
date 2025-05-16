FactoryBot.define do
  factory :supplier do
    name { FFaker::Company.name }
    document { FFaker::IdentificationBR.cnpj }
  end
end
