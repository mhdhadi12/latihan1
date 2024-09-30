document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("skill-form");
  const greeting = document.getElementById("greeting");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const skill = document.getElementById("skill").value;

    greeting.textContent = `Hello, ${name}! You've selected ${skill}.`;

    // Change color scheme based on selected skill
    switch (skill) {
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
