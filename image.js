window.onload = function () {

    // Add button click
    document.getElementById('add').onclick = function () {
        // Cleans any previous error message
        cleanError();

        // Gets image input and its value
        var imageInput = document.getElementById('image-url');
        var imageURL = imageInput.value;

        if (isURL(imageURL)) {
            // Resets input value
            imageInput.value = '';

            // Creates image and adds a click event listener
            var image = document.createElement('img');
            image.src = imageURL;
            image.onclick = function () {
                imageInput.value = imageURL;
            };
            // Gets planning area and remove initial dots
            var planningArea = document.getElementById('planning-area');

            if (planningArea.innerHTML === '...') {
                planningArea.innerHTML = '';
            }

            // Adds image
            planningArea.appendChild(image);
        } else {
            showError('Image URL is not valid');
        }
    };


