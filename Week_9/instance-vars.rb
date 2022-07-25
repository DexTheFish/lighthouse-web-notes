class Person
  # attr_reader :name
  # attr_writer :name
  attr_accessor :name
  def initialize(name)
    @name = name
  end
end

p = Person.new('L. Ron')
p.name = "N. Name"
puts p.name