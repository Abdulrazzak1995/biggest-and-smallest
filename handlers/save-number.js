function saveNumberHandler() {
  debugger;
  // read new number from user input
let newValue = document.getElementById('input').value;
  // read from state the data you will need for the next step
numbers.all.push(newValue);
  // find the new biggest and smallest values
const bigNumber = Math.max(...numbers.all);
const smallNumber = Math.min(...numbers.all);
  // update state: new biggest, new smallest, new current & save the last current
numbers.biggest = bigNumber;
numbers.smallest = smallNumber;
  // re-render the user interface with values stored in state
document.getElementById("biggest").innerText = bigNumber;
document.getElementById("smallest").innerText= smallNumber;
  // log user interaction: handler name, user input, new state
  log.push({
    handler: 'save number',
    newValue,
    numbers: JSON.parse(JSON.stringify(numbers))
  })
}
