const { exec } = require('child_process');

// Función para mover el ratón
const moveMouse = () => {
    // Obtiene la posición actual del ratón
    exec('xdotool getmouselocation --shell', (err, stdout) => {
        if (err) {
            console.error('Error getting mouse location:', err);
            return;
        }

        // Parse the output to get the current mouse position
        const lines = stdout.split('\n');
        const currentX = parseInt(lines[0].split('=')[1]);
        const currentY = parseInt(lines[1].split('=')[1]);

        // Calcula una nueva posición para el ratón (aquí simplemente suma 10 píxeles a la posición x actual)
        let newX = currentX + 10;
        const newY = currentY;

        if (newX > 1920) {
            // Si la nueva posición x es mayor que 1920, la establece a 0
            newX = 0;            
        }

        // Mueve el ratón a la nueva posición
        exec(`xdotool mousemove ${newX} ${newY}`, (err) => {
            if (err) {
                console.error('Error moving mouse:', err);
                return;
            }

            console.log(`Mouse moved to: x=${newX}, y=${newY}`);
        });
    });
};

// Establece un intervalo de 5 segundos (5000 ms)
setInterval(moveMouse, 5000);
