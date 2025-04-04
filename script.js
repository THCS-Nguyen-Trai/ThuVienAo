// Hiệu ứng khi cuộn trang
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.backgroundColor = "#ff6f61";
  } else {
    header.style.backgroundColor = "#ff6f61";
  }
});

document.getElementById("kham-pha-ngay").addEventListener("click", () => {
  alert(
    "Chào mừng bạn đến với Thư Viện Ảo! Hãy khám phá thế giới sách tuyệt vời này nhé."
  );
});
document.getElementById("y-nghia").addEventListener("click", () => {
  alert("Chàch tuyệt vời này nhé.");
});

// Hiệu ứng khi di chuột qua sách
const books = document.querySelectorAll(".book");
books.forEach((book) => {
  book.addEventListener("mouseenter", () => {
    book.style.transform = "scale(1.05)";
  });
  book.addEventListener("mouseleave", () => {
    book.style.transform = "scale(1)";
  });
});
