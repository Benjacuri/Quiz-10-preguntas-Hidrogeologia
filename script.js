document.addEventListener('DOMContentLoaded', () => {

    const quizData = [
        {
            question: "1. El ciclo del agua es un proceso continuo y dinámico que describe el movimiento del agua a través de la atmósfera, la Tierra y los océanos. ¿Qué tipo de energías controlan principalmente este ciclo?",
            answers: {
                a: "Energía cinética y potencial",
                b: "Energía solar y la fuerza de gravedad",
                c: "Energía geotérmica y la fuerza eólica"
            },
            correctAnswer: "b",
            type: "single"
        },
        {
            question: "2. A nivel mundial, el agua cubre gran parte de la superficie terrestre. ¿Qué porcentaje de la superficie de la Tierra está cubierta de agua y qué fracción de esa agua es dulce y apta para consumo humano, agrícola e industrial?",
            answers: {
                a: "90% cubierta, 5% dulce, 1.2% apta",
                b: "70% cubierta, 3% dulce, 0.62% apta",
                c: "50% cubierta, 10% dulce, 2.5% apta"
            },
            correctAnswer: "b",
            type: "single"
        },
        {
            question: "3. En el contexto chileno, específicamente en Chile Central, ¿cuál es la principal causa del agotamiento de los recursos hídricos subterráneos según el estudio de Taucare et al. (2024)?",
            answers: {
                a: "La Megasequía, que redujo drásticamente la recarga de los acuíferos.",
                b: "La sobreexplotación de los derechos de agua (aumento sostenido de las extracciones).",
                c: "Cambios en el uso del suelo y la deforestación."
            },
            correctAnswer: "b",
            type: "single"
        },
        {
            question: "4. En hidrogeología, ¿qué es un \"Acuífero\" y cuáles son dos tipos de formaciones geológicas que, a diferencia de los acuíferos, retardan o impiden significativamente el flujo de agua?",
            answers: {
                a: "Un Acuífero es una formación impermeable. Las otras son Acuicludo y Acuifugo.",
                b: "Un Acuífero es una formación permeable. Las otras son Acuitardo y Acuicludo.",
                c: "Un Acuífero es una formación que almacena agua de forma temporal. Las otras son Acuiclo y Acuifugo."
            },
            correctAnswer: "b",
            type: "single"
        },
        {
            question: "5. La Evapotranspiración es un componente clave del ciclo del agua. ¿Cómo se define la Evapotranspiración y qué cuatro factores meteorológicos principales influyen en la Evapotranspiración Potencial (ETP)?",
            answers: {
                a: "Es la evaporación del agua de los lagos y ríos. Influye la presión, la humedad, el viento y la temperatura.",
                b: "Es la transpiración de las plantas. Influyen la radiación, el viento, la presión y la temperatura.",
                c: "Es la combinación de la evaporación del suelo y la transpiración de las plantas. Influyen la radiación, la temperatura del aire, la humedad relativa y la velocidad del viento."
            },
            correctAnswer: "c",
            type: "single"
        },
        {
            question: "6. En la \"Radiografía del Agua: Brecha y Riesgo Hídrico en Chile\" (2018), se introduce el concepto de \"Brecha Hídrica\". ¿Qué representa este indicador y cuál es su fórmula principal?",
            answers: {
                a: "Representa el déficit de precipitaciones. Su fórmula es (Precipitaciones/Evaporación) x 100%.",
                b: "Representa la diferencia entre el agua disponible y la que se necesita. Su fórmula es (Consumo Hídrico / Oferta Hídrica) x 100%.",
                c: "Representa la calidad del agua. Su fórmula es (Contaminantes / Litros de agua) x 100%."
            },
            correctAnswer: "b",
            type: "single"
        },
        {
            question: "7. El estudio de Taucare et al. (2024) analizó la relación entre la Megasequía (2010-2020) y el descenso de los niveles de agua subterránea en Chile Central. ¿Cuál fue la principal conclusión sobre el factor dominante del agotamiento de los acuíferos durante este período?",
            answers: {
                a: "La Megasequía fue el factor dominante, causando una drástica disminución de la recarga de los acuíferos.",
                b: "La presión antropogénica (aumento de extracciones) fue el factor dominante, superando al impacto climático.",
                c: "Fue una combinación equilibrada de la Megasequía y el aumento de la demanda humana."
            },
            correctAnswer: "b",
            type: "single"
        },
        {
            question: "8. Selecciona al menos tres soluciones innovadoras o prácticas sostenibles para enfrentar la escasez hídrica mencionadas en el video \"Al rescate del agua en Chile\".",
            answers: {
                a: "Desalinización, uso de aguas lluvias y control de fugas en tuberías.",
                b: "Sistemas de cultivo eficientes (lombricultura), reciclaje de aguas grises y atrapanieblas.",
                c: "Bombeo de agua de acuíferos profundos, construcción de nuevos embalses y siembra de nubes."
            },
            correctAnswer: "b",
            type: "single"
        },
        {
            question: "9. Según el video de DW Español, ¿cómo impactó el Código de Aguas de 1981 en la disponibilidad y gestión del agua en Chile?",
            answers: {
                a: "Reguló y centralizó el control del agua para el Estado.",
                b: "Desvinculó el agua de la tierra, permitiendo su privatización y generando una repartición desigual.",
                c: "Estableció un registro nacional unificado de todos los derechos de agua."
            },
            correctAnswer: "b",
            type: "single"
        },
        {
            question: "10. ¿Cuál es la diferencia entre \"Sequía\" y \"Estrés Hídrico\"?",
            answers: {
                a: "La sequía es un evento climático, mientras que el estrés hídrico es un problema de calidad del agua.",
                b: "La sequía es un evento de déficit de agua con daño asociado, mientras que el estrés hídrico es el síntoma de la escasez cuando se extrae más agua de la que se recarga.",
                c: "La sequía es la falta de agua dulce, mientras que el estrés hídrico es la falta de agua salada."
            },
            correctAnswer: "b",
            type: "single"
        }
    ];

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    function buildQuiz() {
        const output = [];

        quizData.forEach((currentQuestion, questionNumber) => {
            const answers = [];
            for (let letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question-box">
                    <p>${currentQuestion.question}</p>
                    <ul class="answers">${answers.map(a => `<li>${a}</li>`).join('')}</ul>
                </div>`
            );
        });

        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;

        quizData.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'green';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        resultsContainer.innerHTML = `<p>${numCorrect} de ${quizData.length} respuestas correctas.</p>`;
    }

    buildQuiz();
    submitButton.addEventListener('click', showResults);
});