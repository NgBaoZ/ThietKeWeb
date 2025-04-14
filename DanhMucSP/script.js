document.addEventListener("DOMContentLoaded", function () {
    // Lấy URL hiện tại
    const currentPage = window.location.pathname.split("/").pop();

    // Lấy tất cả các nút trong Danhmuc
    const buttons = document.querySelectorAll(".Danhmuc a");

    // Duyệt qua các nút và kiểm tra URL
    buttons.forEach(button => {
        const href = button.getAttribute("href");
        if (href === currentPage) {
            button.querySelector("button").classList.add("active");
        }
    });
});