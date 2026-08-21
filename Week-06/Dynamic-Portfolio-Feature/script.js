const form = document.getElementById("contactForm");
const submitButton = document.getElementById("submitButton");
const status = document.getElementById("status");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  status.textContent = "";
  status.className = "status";

  const formData = new FormData(form);

  try {
    const response = await fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formData).toString(),
    });

    if (!response.ok) {
      throw new Error(`Submission failed: ${response.status}`);
    }

    form.reset();

    status.textContent =
      "Message sent successfully! I'll get back to you soon.";

    status.className = "status success";
  } catch (error) {
    console.error("Form submission error:", error);

    status.textContent =
      "Something went wrong. Please try again.";

    status.className = "status error";
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Send message";
  }
});