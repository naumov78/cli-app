class ChangeRecordsDataType < ActiveRecord::Migration
  drop_table(:records)

  def change
    create_table :records do |t|
      t.text :record_list, array:true, default: []

      t.timestamps null: false
    end
  end
end
