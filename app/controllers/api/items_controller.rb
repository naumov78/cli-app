class Api::ItemsController < ApplicationController

  def update
    item = Item.find(params[:id])
    name_ext = item_params[:name].split('.')
    @folder = Folder.find(item.folder_id)
    item.update_attribute(:name, name_ext[0])
    item.update_attribute(:ext, name_ext[1])
    render 'api/folders/show'
  end

  def destroy
    item = Item.find(params[:id])
    @folder = Folder.find(item.folder_id)
    item.destroy
    render 'api/folders/show'
  end

  private

  def item_params
    params.require(:item).permit(:name)
  end

end
