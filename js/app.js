/* ======== MODO OSCURO ========== */
const btnTheme = document.getElementById("btn-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const storedTheme = localStorage.getItem("theme"); // "dark" | "light" | null

if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
  document.body.classList.add("dark");
}

btnTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

/* ========== VALIDACIÓN DE FORMULARIO ================ */

const formData = document.getElementById("form-data");

formData.addEventListener("submit", function(e) {
  e.preventDefault();

  let isValid = true;
})


  /* ---- Nombre ---- */

const nameError = document.getElementById("name-error");
  if (inputName.value.trim() === "") {
    nameError.textContent = "El nombre es obligatorio.";
    inputName.classList.add("error");
    isValid = false;
  } else {
    nameError.textContent = "";
    inputName.classList.remove("error");
  }

  /* ---- Email ---- */
 const emailError = document.getElementById("email-error");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (inputEmail.value.trim() === "") {
    emailError.textContent = "El email es obligatorio.";
    inputEmail.classList.add("error");
    isValid = false;
  } else if (!emailPattern.test(inputEmail.value)) {
    emailError.textContent = "El email no es válido.";
    inputEmail.classList.add("error");
    isValid = false;
  } else {
    emailError.textContent = "";
    inputEmail.classList.remove("error");
  }


  /* ---- Mensaje ---- */
const messageError = document.getElementById("message-error");
  if (inputMessage.value.trim() === "") {
    messageError.textContent = "El mensaje es obligatorio.";
    inputMessage.classList.add("error");
    isValid = false;
  } else {
    messageError.textContent = "";
    inputMessage.classList.remove("error");
  }
 


/* ========== ENVÍO DE FORMULARIO ================ */
if (isValid) {
    alert("¡enviado!");
    formData.reset();
    // Limpiar errores visuales
    inputName.classList.remove("error");
    inputEmail.classList.remove("error");
    inputMessage.classList.remove("error");
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
  }