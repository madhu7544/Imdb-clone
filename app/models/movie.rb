class Movie < ApplicationRecord
  has_one_attached :image
  has_many :actors, dependent: :destroy
  has_many :reviews, dependent: :destroy
end
