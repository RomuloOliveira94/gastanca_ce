json.array! @deputies do |deputy|
  json.id deputy.id
  json.name deputy.name
  json.party deputy.party.acronym
  json.state deputy.state
end
