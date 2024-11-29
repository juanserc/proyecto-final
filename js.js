document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        themeToggle.textContent = savedTheme === 'dark-mode' ? 'Modo Claro' : 'Modo Oscuro';
    } else {
        body.classList.add('dark-mode'); // Valor predeterminado
    }

    // Alternar entre modos claro y oscuro
    themeToggle.addEventListener('click', function() {
        const isDarkMode = body.classList.contains('dark-mode');

        if (isDarkMode) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            themeToggle.textContent = 'Modo Oscuro';
            localStorage.setItem('theme', 'light-mode');
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            themeToggle.textContent = 'Modo Claro';
            localStorage.setItem('theme', 'dark-mode');
        }
    });

    // Efectos de hover en las opciones del menú
    const menuItems = document.querySelectorAll('nav ul li a');

    menuItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            item.style.color = '#ddb30c'; // Color del texto al hacer hover
            item.style.borderBottom = '2px solid #ddb30c'; // Línea inferior al hacer hover
        });

        item.addEventListener('mouseout', function() {
            item.style.color = '#333'; // Color original del texto
            item.style.borderBottom = 'none'; // Eliminar línea inferior
        });
    });
});

