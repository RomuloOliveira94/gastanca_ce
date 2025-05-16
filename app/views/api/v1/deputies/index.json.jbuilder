json.array! @deputies do |deputy|
  json.id deputy.id
  json.name deputy.name
  json.image deputy.image_url
  json.party deputy.party.acronym
  json.state deputy.state
end
