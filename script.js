window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  const animatedElements = document.querySelectorAll(".animate-on-scroll");
  animatedElements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.classList.add("active");
    }
  });
});

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

window.addEventListener("load", setupTypewriter);

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

const books = document.querySelectorAll(".book");
books.forEach((book) => {
  book.addEventListener("mouseenter", () => {
    book.style.transform = "scale(1.05)";
  });
  book.addEventListener("mouseleave", () => {
    book.style.transform = "scale(1)";
  });
});
// ==== Tìm kiếm truyện ====
const searchInput = document.getElementById("search-input");
searchInput?.addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  document.querySelectorAll(".book").forEach((book) => {
    const title = book.querySelector("h3")?.textContent.toLowerCase() || "";
    book.style.display = title.includes(keyword) ? "block" : "none";
  });
});

// ==== Xem trước PDF ====
document.addEventListener("click", function (e) {
  const link = e.target.closest("a");
  if (link && link.textContent.includes("Đọc Online")) {
    e.preventDefault();
    document.getElementById("pdfFrame").src = link.href;
    document.getElementById("pdfPreview").style.display = "block";
  }
});

function closePdf() {
  document.getElementById("pdfPreview").style.display = "none";
  document.getElementById("pdfFrame").src = "";
}
