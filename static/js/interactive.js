// Handles JavaScript interactions for the application

document.addEventListener("DOMContentLoaded", function () {

    // Example: simple form validation
    const forms = document.querySelectorAll("form");

    forms.forEach(function(form){

        form.addEventListener("submit", function(event){

            const titleInput = document.querySelector("#title");

            if(titleInput && titleInput.value.trim() === ""){
                alert("Assignment title cannot be empty!");
                event.preventDefault();
            }

        });

    });

});
