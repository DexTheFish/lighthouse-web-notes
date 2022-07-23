# this gives an example of how .each might work under the hood.
# it gives insight into how blocks and yields work.

class Array 
  def my_each
    i = 0
    while i < self.size
        yield(self[i])  
        i+=1      
    end
    self
  end
end