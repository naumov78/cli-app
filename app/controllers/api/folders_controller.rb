class Api::FoldersController < ApplicationController

  def show
    if params[:id] == "0"
      @folder = Folder.where(parent_folder_id: nil).first
    else
      @folder = Folder.find(params[:id])
    end
  end

  def create
    folder = Folder.create!(folder_params)
    @folder = Folder.find(folder_params[:parent_folder_id])
    folder.path = @folder.path + "/" + @folder.name
    folder.save!
    render 'api/folders/show'
  end

  def update
    folder = Folder.find(params[:id])
    @folder = Folder.find(folder.parent_folder_id)
    folder.update_attribute(:name, folder_params[:name])
    render 'api/folders/show'
  end

  def destroy
    folder = Folder.find(params[:id])
    @folder = Folder.find(folder.parent_folder_id)
    folder.destroy
    render 'api/folders/show'
  end


  private

  def folder_params
    params.require(:folder).permit(:name, :parent_folder_id)
  end

end
