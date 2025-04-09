document.getElementById('search-bar').addEventListener('input', function () {
        const query = this.value.toLowerCase(); // Obtiene el texto ingresado en minúsculas
        const content = document.getElementById('search-content');
        const sections = content.querySelectorAll('section'); // Selecciona todas las secciones

        sections.forEach(section => {
            const text = section.textContent.toLowerCase(); // Convierte el texto de la sección a minúsculas
            if (text.includes(query)) {
                section.style.display = ''; // Muestra la sección si coincide
            } else {
                section.style.display = 'none'; // Oculta la sección si no coincide
            }
        });
    });