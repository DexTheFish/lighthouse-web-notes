bob=[1,2,3,4,5]

p bob.shuffle # print a shuffled bob, bob unchanged
p bob.shuffle! # print bob, bob shuffled
# the ! means "do it to urself"

bob.each_with_index do |value, index|
  p index
  p value
end

# bob.forEach((val, index) => console.log(val, index))