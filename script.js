(() => {
  const form = document.getElementById("newsletterForm");
  const hint = document.getElementById("formHint");
  const year = document.getElementById("year");
  const lettersLink = document.getElementById("lettersLink");

  year.textContent = new Date().getFullYear();

  // TODO: Replace with your real archive URL (Substack/Beehiiv/blog)
  // Example: lettersLink.href = "https://yournewsletter.substack.com";
  lettersLink.href = "#";

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(String(email || "").trim());

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = new FormData(form).get("email");
    hint.textContent = "";

    if (!isValidEmail(email)) {
      hint.textContent = "❗ Please enter a valid email address.";
      return;
    }

    // Fake success (replace this with your provider integration)
    // Example options:
    // - POST to your backend
    // - Redirect to Substack/Beehiiv signup page
    // - Use Mailchimp embedded form
    hint.textContent = "✔️ You’re in! Check your inbox for a confirmation email.";

    form.reset();
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;

      const el = document.querySelector(id);
      if (!el) return;

      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", id);
    });
  });
})();