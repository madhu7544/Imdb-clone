class AddNewForeignKeyToConnections < ActiveRecord::Migration[7.0]
  def change
    add_foreign_key :connections, :actors, on_delete: :cascade
  end
end
