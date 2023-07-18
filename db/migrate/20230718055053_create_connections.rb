class CreateConnections < ActiveRecord::Migration[7.0]
  def change
    create_table :connections do |t|
      t.string :movie_id
      t.string :actor_id

      t.timestamps
    end
  end
end
