// Lấy các phần tử cần thiết
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
    const galleryImages = Array.from(document.querySelectorAll(".gallery .image-container img")); // Chuyển thành Array để dùng indexOf
const closeBtn = document.querySelector(".modal .close");
const prevBtn = document.querySelector(".modal .prev");
const nextBtn = document.querySelector(".modal .next");

let currentImageIndex;

// Hàm mở modal và hiển thị ảnh được chọn
function openModal(index) {
    currentImageIndex = index;
    modal.style.display = "block";
    modalImg.src = galleryImages[currentImageIndex].src;
}

// Hàm đóng modal
function closeModal() {
    modal.style.display = "none";
}

// Hàm hiển thị ảnh tiếp theo
function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    modalImg.src = galleryImages[currentImageIndex].src;
}

// Hàm hiển thị ảnh trước đó
function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    modalImg.src = galleryImages[currentImageIndex].src;
}

// Lặp qua tất cả các ảnh trong bộ sưu tập và thêm sự kiện click
galleryImages.forEach((img, index) => {
    img.onclick = () => openModal(index);
});

// Gán sự kiện click cho nút đóng
closeBtn.onclick = closeModal;

// Gán sự kiện click cho nút chuyển ảnh
prevBtn.onclick = showPrevImage;
nextBtn.onclick = showNextImage;

// Gán sự kiện click cho chính modal (vùng nền) để đóng
modal.onclick = function(event) {
    if (event.target === modal) { // Chỉ đóng nếu click vào nền, không phải ảnh
        closeModal();
    }
}

// Thêm điều khiển bằng bàn phím
document.addEventListener('keydown', function(event) {
    if (modal.style.display === "block") { // Chỉ hoạt động khi modal đang mở
        if (event.key === 'ArrowRight') showNextImage();
        if (event.key === 'ArrowLeft') showPrevImage();
        if (event.key === 'Escape') closeModal();
    }
});