iterator_count = 0
loop do
  puts "Current iteration #{iterator_count}"
  iterator_count += 1
  break if iterator_count > 3
end


while iterator_count < 8 do
  puts "while iteration #{iterator_count}"
  iterator_count += 1
end


# Arrays
animals = ["Cat", "Giraffe", "Iguana", "Tardigrade"]
=begin
  in JS, we could use foreach:
    animals.foreach((animal, index) => {
      console.log(index,animal)
    })
=end

animals.each do |animal|
  puts animal
end

animals.each_with_index do |animal, index|
  print index
  puts animal
end

10.times do |i|
  puts "hello potato #{i}"
end

3.times do
  puts "wiggle"
end

# use 30...36 to exclude the endpoint 36
(30..36).each do |num|
  puts num
end
