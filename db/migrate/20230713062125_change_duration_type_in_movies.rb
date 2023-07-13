class ChangeDurationTypeInMovies < ActiveRecord::Migration[7.0]
  def up
    change_column :movies, :duration, :string
  end

  def down
    change_column :movies, :duration, :time
  end
end
