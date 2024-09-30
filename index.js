document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("skil-form");
  const greeting = document.getElementById("hasil");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const skil = document.getElementById("skil-select").value;

    greeting.textContent = `Hai, ${nama}! kamu memilih ${skil}.`;
    // Change color scheme based on selected skill
    switch (skil) {
      case "HTML":
        document.documentElement.style.setProperty(
          "--primary-color",
          "#e74c3c"
        );
        break;
      case "CSS":
        document.documentElement.style.setProperty(
          "--primary-color",
          "#3498db"
        );
        break;
      case "JavaScript":
        document.documentElement.style.setProperty(
          "--primary-color",
          "#f1c40f"
        );
        break;
    }
  });
});
