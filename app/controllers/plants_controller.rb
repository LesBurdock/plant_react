
  class PlantsController < ApplicationController

  skip_before_action :authenticate_user!, only: :index
  before_action :set_plant, only: [:show, :edit, :update, :destroy]

  def index
    @plants = Plant.all
    render 'pages/home'
    # see plant policy -scope
  end

  def show
    @plant = Plant.find(params[:id])
    @number_days = @plant.avail_to - @plant.avail_from
  end

  def new
    @plant = Plant.new
  end

  def create
    @plant = Plant.new(plant_params)
    @plant.user = current_user
    if @plant.save
      redirect_to plant_path(@plant), notice: 'Plant was saved'
    else
      render 'pages/home'
    end
  end

  def edit
    @plant = Plant.find(params[:id])

  end

  def update
    @plant = Plant.find(params[:id])
    if @plant.update(plant_params)
      @plant.save
      redirect_to @plant, notice: 'Plant was updated'
    else
      render 'pages/home'
    end
  end

  def destroy
    @plant = Plant.find(params[:id])

    @plant.destroy
    render 'pages/home'
  end

  private

  def set_plant
    @plant = Plant.find(params[:id])
  end

  def plant_params
    params.require(:plant).permit(:name, :description, :price,
                                  :care_instructions, :user_id, :address)
  end
end
