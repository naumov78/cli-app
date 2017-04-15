class UpdateRecord < ActiveRecord::Migration
  drop_table(:records)

  def change
    create_table :records do |t|
      t.string :record_list

      t.timestamps null: false
    end
  end
end
