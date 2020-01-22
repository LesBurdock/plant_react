class PlantPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def show?
    true
  end

  def update?
    # only plant owner can update plant
    record.user == user
  end

  def create?
    !user.nil?
  end

  def destroy?
    update?
  end
end
