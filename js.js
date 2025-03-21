//search
function navigateToLogin(userType) {
    window.location.href = "search.html?type=" + userType;
}

document.addEventListener("DOMContentLoaded", function () {
    let dropdownBtn = document.querySelector(".keyword-btn");
    let dropdownContent = document.querySelector(".dropdown-content");

    // عند النقر على الزر، قم بعرض/إخفاء القائمة
    dropdownBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // لمنع إغلاقها فور النقر على الزر
        dropdownContent.classList.toggle("show");
    });

    // عند النقر خارج القائمة، قم بإخفائها
    document.addEventListener("click", function (event) {
        if (!dropdownBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.classList.remove("show");
        }
    });
});