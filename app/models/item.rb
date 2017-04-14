# == Schema Information
#
# Table name: items
#
#  id         :integer          not null, primary key
#  name       :string
#  ext        :string
#  size       :integer
#  folder_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Item < ActiveRecord::Base

  belongs_to :folder

end
