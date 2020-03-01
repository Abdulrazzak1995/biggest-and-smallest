function resetHandler() {
  debugger;
  // reset state to initial values
  
  //question
numbers.current = 0;
numbers.biggest = -Infinity;
numbers.smallest = Infinity ;
numbers.all = [] ;
  // re-render UI with values saved in state
document.getElementById('input').innerHTML = nubers.current;
document.getElementById('biggest').innerHTML = -Infinity;
document.getElementById('smallest').innerHTML = Infinity;
  // log interaction: handler name, new state
  log.push({
    handler: 'reset',
    numbers: JSON.parse(JSON.stringify(numbers))
  })

}
