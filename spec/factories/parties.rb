FactoryBot.define do
  factory :party do
    acronym { FFaker::Lorem.words(3) }
  end
end
