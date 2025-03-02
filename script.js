//your JS code here. If required.

//we got the input in the inputField
let inputField=document.getElementById('fname');

// Add an event listener for the 'input' event
inputField.addEventListener('input', function (event) {
    // Get the current value of the input field
    const inputValue = event.target.value;

    // Convert the input value to uppercase
    const uppercaseValue = inputValue.toUpperCase();

    // Update the input field with the uppercase value
    event.target.value = uppercaseValue;
});

//we update the eisitng string to uppercase