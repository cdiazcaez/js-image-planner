window.onload = function () {

    // Add button click
    document.getElementById("add").onclick = function () {
        // Cleans any previous error message
        cleanError();

        // Gets image input and its value
        var imageInput = document.getElementById("image-url");
        var imageURL = imageInput.value;

        if (isURL(imageURL)) {
            // Resets input value
            imageInput.value = "";

            // Creates image and adds a click event listener
            var image = document.createElement("img");
            image.src = imageURL;
            image.onclick = function () {
                imageInput.value = imageURL;
            };
            // Gets planning area and remove initial dots
            var planningArea = document.getElementById("planning-area");

            if (planningArea.innerHTML === "...") {
                planningArea.innerHTML = "";
            }

            // Adds image
            planningArea.appendChild(image);
        } else {
            showError("Image URL is not valid");
        }
    };
    // Delete button click
    document.getElementById("delete").onclick = function () {
        // Cleans any previous error message
        cleanError();

        // Gets image input and its value
        var imageInput = document.getElementById("image-url");
        var imageToRemove = imageInput.value;
        var found = false;

        // Gets all images
        var images = document.getElementsByTagName("img");

        // Loops over all images to remove the ones with the selected URL
         Array.from(images).forEach(function (image) {
            // If source matches, removes image
            if (image.src === imageToRemove) {
                image.remove();
                found = true;
            }
        });

        if (found) {
            // Gets planning area; if it is empty, put some dots
            var planningArea = document.getElementById("planning-area");

            if (planningArea.innerHTML === "") {
                planningArea.innerHTML = "...";
            }
        } else {
            showError("Image to remove not found");
        }

        // Resets image input
        imageInput.value = "";
    };


    function showError(error) {
        document.getElementById("error-message").innerHTML = error;
    }
    function cleanError() {
        document.getElementById("error-message").innerHTML = "";
    }

    function isURL(str) {
        regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
        return regexp.test(str);
    }
};


// Done with CSS
/*
image.onmouseover = function () {
    image.style.maxHeight = 'auto';
    image.style.maxWidth = 'auto';

    image.style.minHeight = '500px';
    image.style.minWidth = '500px';
};
image.onmouseout = function () {
    image.style.minHeight = 'auto';
    image.style.minWidth = 'auto';

    image.style.maxHeight = '100px';
    image.style.maxWidth = '100px';
};*/


