class Api::ItemsController < ApplicationController

  def update
    item = Item.find(params[:id])
    name_ext = item_params[:name].split('.')
    item.update_attribute(:name, name_ext[0])
    item.update_attribute(:ext, name_ext[1])
    @folder = Folder.find(item.folder_id)
    render 'api/folders/show'
  end

  def destroy
    item = Item.find(params[:id])
    item_size = item.size
    folder_id = item.folder_id
    item.destroy
    @folder = Folder.find(folder_id)
    @folder.size = @folder.size - item_size
    @folder.save!
    render 'api/folders/show'
  end

  private

  def item_params
    params.require(:item).permit(:name)
  end

end
