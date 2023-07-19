class Movie < ApplicationRecord
  has_one_attached :image
  has_many :actors
  has_many :reviews
end
