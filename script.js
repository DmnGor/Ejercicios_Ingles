// script.js
function checkAnswers() {
    // Respuestas correctas
    const correctAnswers = ["goes", "play", "watches"];
    
    // Obtener respuestas del usuario
    const userAnswer1 = document.getElementById("answer1").value.toLowerCase();
    const userAnswer2 = document.getElementById("answer2").value.toLowerCase();
    const userAnswer3 = document.getElementById("answer3").value.toLowerCase();
    
    let correctCount = 0;
    
    // Verificar respuesta 1
    if (userAnswer1 === correctAnswers[0]) {
        correctCount++;
    }
    
    // Verificar respuesta 2
    if (userAnswer2 === correctAnswers[1]) {
        correctCount++;
    }
    
    // Verificar respuesta 3
    if (userAnswer3 === correctAnswers[2]) {
        correctCount++;
    }
    
    // Mostrar resultados
    const resultElement = document.getElementById("result");
    if (correctCount === 3) {
        resultElement.textContent = "¡Excelente! Todas las respuestas son correctas.";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = `Tienes ${correctCount} respuestas correctas de 3. Sigue practicando.`;
        resultElement.style.color = "red";
    }
}
