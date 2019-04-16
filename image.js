window.onload = function () {

    // Add button click
    document.getElementById('add').onclick = function () {
        // Cleans any previous error message
        cleanError();

        // Gets image input and its value
        var imageInput = document.getElementById('image-url');
        var imageURL = imageInput.value;
