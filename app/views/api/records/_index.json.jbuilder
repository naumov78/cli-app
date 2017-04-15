json.records records do |record_list|
  json.extract! record_list, :id, :record_list
end
