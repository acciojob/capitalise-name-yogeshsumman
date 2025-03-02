let inputField = document.getElementById('fname');

// Add an event listener for the 'blur' event
inputField.addEventListener('blur', function (event) {
    // Get the current value of the input field
    const inputValue = event.target.value;

    // Convert the input value to uppercase
    const uppercaseValue = inputValue.toUpperCase();

    // Update the input field with the uppercase value
    event.target.value = uppercaseValue;
});