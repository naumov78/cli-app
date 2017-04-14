json.records records do |record|
  json.extract! record, :id, :record
end
