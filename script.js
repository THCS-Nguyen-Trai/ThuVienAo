// Hiệu ứng khi cuộn trang
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // Kích hoạt hiệu ứng khi scroll đến phần tử
  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  animatedElements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.classList.add("active");
    }
  });
});

// Khởi tạo Intersection Observer cho hiệu ứng scroll
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el);
  });
});

// Hiệu ứng typewriter cho tiêu đề chính
function setupTypewriter() {
  const typewriterElements = document.querySelectorAll(".typewriter");
  typewriterElements.forEach((el) => {
    const text = el.textContent;
    el.textContent = "";
    el.style.width = "0";

    setTimeout(() => {
      el.textContent = text;
      el.style.width = "auto";
    }, 100);
  });
}

// Gọi hàm khi trang tải xong
window.addEventListener("load", setupTypewriter);

// Xử lý sự kiện click
document.getElementById("kham-pha-ngay")?.addEventListener("click", () => {
  alert(
    "Chào mừng bạn đến với Thư Viện Ảo! Hãy khám phá thế giới sách tuyệt vời này nhé."
  );
});

document.getElementById("y-nghia")?.addEventListener("click", () => {
  alert(
    "Sách mở ra thế giới tri thức và nuôi dưỡng tâm hồn. Hãy đọc sách mỗi ngày!"
  );
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
