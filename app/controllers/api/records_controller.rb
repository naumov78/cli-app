class Api::RecordsController < ApplicationController

  def index
    @records = Record.all
  end

  def create
    Record.create!(record_params)
    @records = Record.all
    render 'api/records/index'
  end

  private

  def record_params
    params.require(:record_line).permit(:record_list)
  end

end
