def block_friendly_method #callback
  puts "---start---"
  yield #callback()
  puts"---end---"
end

block_friendly_method do
  puts "running our callback! well, really it is a block."
end

block_friendly_method do 
  puts "this is a different block"
end