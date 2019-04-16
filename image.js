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
    // Delete button click
    document.getElementById('delete').onclick = function () {
        // Cleans any previous error message
        cleanError();

        // Gets image input and its value
        var imageInput = document.getElementById('image-url');
        var imageToRemove = imageInput.value;
        var found = false;

        // Gets all images
        var images = document.getElementsByTagName('img');

        // Loops over all images to remove the ones with the selected URL
        for (var i = 0; i < images.length; i++) {
            var image = images[i];

            // If source matches, removes image
            if (image.src === imageToRemove) {
                image.remove();
                found = true;
            }
        }


        if (found) {
            // Gets planning area; if it is empty, put some dots
            var planningArea = document.getElementById('planning-area');

            if (planningArea.innerHTML === '') {
                planningArea.innerHTML = '...';
            }
        } else {
            showError('Image to remove not found');
        }

        // Resets image input
        imageInput.value = '';
    };



