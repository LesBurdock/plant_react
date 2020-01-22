class Api::V1::PlantsController < Api::V1::BaseController
  acts_as_token_authentication_handler_for User, except: [:index, :show]
  before_action :set_plant, only: [:show, :update, :destroy]

  def index
    @plants = policy_scope(Plant)
  end

  def create
    @plant = Plant.new(plant_params)
    @plant.user = current_user
    authorize @plant
    if @plant.save
      render :show
    else
      render_error
    end
  end

  def show
    @plant = Plant.find(params[:id])
    authorize @plant
  end

  def update
    if @plant.update(plant_params)
      render :show
    else
      render_error
    end
  end

  def destroy
    @plant.destroy
    head :no_content
  end

  private

  def set_plant
    @plant = Plant.find(params[:id])
    authorize @plant
  end

  def render_error
    render json: { errors: @plant.errors.full_messages },
      status: :unprocessable_entity
  end

  def plant_params
    params.require(:plant).permit(:name, :description)
  end
end
