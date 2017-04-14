# == Schema Information
#
# Table name: folders
#
#  id               :integer          not null, primary key
#  name             :string
#  size             :integer          default("0")
#  parent_folder_id :integer
#  path             :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Folder < ActiveRecord::Base

  has_many :items

  has_many :folders,
  class_name: "Folder",
  primary_key: :id,
  foreign_key: :parent_folder_id

end
