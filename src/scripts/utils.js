import Swal from "sweetalert2";
class Utils {
  static emptyElement(element) {
    element.innerHTML = "";
  }

  static showElement(element) {
    element.style.display = "block";
    element.hidden = false;
  }

  static hideElement(element) {
    element.style.display = "none";
    element.hidden = true;
  }

  static TimerToast = Swal.mixin({
    color: "white",
    toast: true,
    background: "var(--gray)",
    confirmButtonColor: "var(--green)",
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
      const progressBar = toast.querySelector(".swal2-timer-progress-bar");
      if (progressBar) {
        progressBar.style.backgroundColor = "var(--green)"; // Ganti dengan warna yang diinginkan
      }
    },
  });

  static PopUp = Swal.mixin({
    color: "white",
    background: "var(--gray)",
    confirmButtonColor: "var(--green)",
    position: "center",
    showConfirmButton: true,
  });

  static isValidInteger(newValue) {
    return Number.isNaN(newValue) || Number.isFinite(newValue);
  }

  static formatDateString(dateString) {
    const date = new Date(dateString);

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    const day = date.getDate();
    const year = date.getFullYear();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mei",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Okt",
      "Nov",
      "Des",
    ];
    const month = monthNames[date.getMonth()];

    return `${hours}:${minutes} - ${day} ${month} ${year}`;
  }
}

export default Utils;
