class RenameUserRatingsReviewsToReviews < ActiveRecord::Migration[7.0]
  def change
    rename_table :user_ratings_reviews, :reviews
  end
end
