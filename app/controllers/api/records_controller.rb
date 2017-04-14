class Api::RecordsController < ApplicationController

  def index
    @records = Record.all
  end

  def create
    record = Record.create!(record_params)
    @records = Record.all
    render 'api/records/index'
  end

  private

  def record_params
    params.require(:record).permit(:record)
  end

end
