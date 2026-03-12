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
// Filter assignments by course
document.addEventListener("DOMContentLoaded", function(){

    const filter = document.getElementById("course-filter")

    if(filter){

        filter.addEventListener("change", function(){

            const courseId = this.value
            window.location = "?course=" + courseId

        })

    }

})


// Toggle assignment completion
function toggleComplete(id){

    fetch(`/assignment/${id}/complete/`,{
        method:"POST",
        headers:{
            "X-CSRFToken": csrftoken
        }
    })
    .then(response => response.json())
    .then(data => {

        if(data.success){
            location.reload()
        }

    })

}
