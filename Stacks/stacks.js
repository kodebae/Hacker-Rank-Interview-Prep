// LIFO last thing added firdst thing removed
// Array implementation of a stack


// cookie recipie 
// .push() method add to the back each time
// .pop() method removes from the end
// if we used .unshift() method to add to the front each time
// we need to use .shift() to remove from the front for a stack, LIFO

var stack = [];

stack.push("eat cookies") 
stack.push("cool cookies")
stack.push("bake cookies")
stack.push("scoop onto pan")
stack.push("chill dough")
stack.push("form dough")
stack.push("mix together")
stack.push("grab ingredients") // last into the stack but will be the first one out

// to remove call the pop method for each step in the recipie


console.log(stack)
// stack.pop()
// stack.pop()
// stack.pop()
// stack.pop()
// stack.pop()
// stack.pop()
// stack.pop()
// stack.pop()

