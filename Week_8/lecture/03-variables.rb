my_name = "Dex" # no const or let like in JavaScript


Name = "Dex" # capitalized -> constant
puts Name # => Dex

Name = "Declan" # reassigning constant only throws a *warning*, but it'll run:
puts Name # => Declan

# usually capitalize the whole word for clarity
CONSTNAME = "DEX"

# concatenate strings with +
puts "My name is " + my_name