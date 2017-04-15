# == Schema Information
#
# Table name: records
#
#  id          :integer          not null, primary key
#  record_list :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Record < ActiveRecord::Base
end
