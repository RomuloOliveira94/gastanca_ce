FactoryBot.define do
  factory :supplier do
    sequence(:name) { |n| "#{FFaker::Company.name} #{n}" }
    sequence(:document) { |n| "#{FFaker::IdentificationBR.cnpj} #{n}" }
  end
end
