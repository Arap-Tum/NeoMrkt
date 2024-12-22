 const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".toggle-btn");
const removeSidebar =document.querySelector(".remove-sidebar");

// Toggle sidebar visibility
toggleBtn.addEventListener('click', function () {
    sidebar.classList.toggle('active');
});

// Hide sidebar when clicking outside
document.addEventListener('click', function (event) {
    const isClickedInsideSidebar = sidebar.contains(event.target);
    const isClickedInsideToggleBtn = toggleBtn.contains(event.target);
    const isClickedInsideremoveSidebar = removeSidebar.contains(event.target);
  //close  sidebar when the  remove-sidebar button is clicked
    if (isClickedInsideremoveSidebar){
        sidebar.classList.remove('active');
    }
    else if (!isClickedInsideSidebar && !isClickedInsideToggleBtn) {
        // colose side bar if clicked outside of the sidebar and the toogle btn
        sidebar.classList.remove('active');
    }
});
 
// remove sidebar 


// Handle submenu toggling
document.querySelectorAll(".menu > li").forEach(function (menuItem) {
    menuItem.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent event bubbling

        // Close other active menu items
        document.querySelectorAll(".menu > li.active").forEach(function (otherItem) {
            if (otherItem !== menuItem) {
                otherItem.classList.remove("active");
                const otherSubmenu = otherItem.querySelector("ul");
                if (otherSubmenu) otherSubmenu.style.display = "none"; // Hide submenu
            }
        });

        // Toggle the "active" class on the clicked item
        menuItem.classList.toggle("active");

        // Find and toggle the submenu (if it exists)
        const submenu = menuItem.querySelector("ul");
        if (submenu) {
            submenu.style.display = submenu.style.display === "block" ? "none" : "block";
        }
    });
});

