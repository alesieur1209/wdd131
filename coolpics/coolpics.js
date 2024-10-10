const menu_button = document.getElementById('menu_button');
const nav_bar=document.getElementById('nav_bar')
    
menu_button.addEventListener('click', function() {
        if (nav_bar.classList.contains("hide")) {
            nav_bar.classList.remove("hide")
        }
        else {
            nav_bar.classList.add("hide")
        }
    });

    const galleryImages = document.querySelectorAll(".gallery img");
    const viewer = document.getElementsByClassName("viewer")[0];
    const close_viewer = document.getElementsByClassName("close_viewer")[0];

    galleryImages.forEach(function(image) {
        image.addEventListener("click", function() {
            viewer.style.display = "block";
        });
    });

    close_viewer.addEventListener("click", function() {
        viewer.style.display = "none";
    });