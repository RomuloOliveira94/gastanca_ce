FactoryBot.define do
  factory :deputy do
    name { FFaker::NameBR.name }
    integration_id { rand(1000..9999) }
    cpf { FFaker::IdentificationBR.cpf }
    state { FFaker::AddressBR.state }
    party

    trait :with_expenses do
      after(:create) do |deputy|
        create_list(:expense, 3, deputy: deputy)
      end
    end
  end
end
