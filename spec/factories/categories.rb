FactoryBot.define do
  factory :category do
    name { FFaker::Product.name }
  end
end
