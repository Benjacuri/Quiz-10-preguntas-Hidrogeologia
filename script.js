document.addEventListener('DOMContentLoaded', () => {

    const quizData = [
        {
            question: "1. ¿Cuáles son los cinco componentes principales del ciclo hidrológico mencionados en las fuentes que describen el movimiento del agua en el planeta?",
            answers: {
                a: "Vulcanismo, terremotos, erosión, sedimentación y metamorfismo.",
                b: "Precipitación, evapotranspiración, escorrentía superficial, infiltración y flujo de agua subterránea.",
                c: "Desalinización, embalses, represas, canalización y tratamiento de aguas.",
                d: "Deforestación, agricultura intensiva, contaminación, sobreexplotación y desertificación."
            },
            correctAnswer: "b",
            type: "single"
        },
        {
            question: "2. Según las fuentes, ¿cuál es la diferencia fundamental entre el concepto de 'escasez hídrica' y el de 'sequía'?",
            answers: {
                a: "La escasez hídrica es un fenómeno meteorológico, mientras que la sequía se refiere a la sobreexplotación de los recursos.",
                b: "Ambas son sinónimos y describen la falta de agua debido exclusivamente al cambio climático.",
                c: "La escasez hídrica tiene que ver con el déficit de agua en el suelo, y la sequía con la calidad del agua disponible.",
                d: "La escasez hídrica se relaciona con la gestión humana del agua y la relación entre la oferta y la demanda, mientras que la sequía es un fenómeno meteorológico/climático asociado a la baja precipitación."
            },
            correctAnswer: "d",
            type: "single"
        },
        {
            question: "3. A nivel mundial, ¿qué porcentaje de la superficie terrestre está cubierta de agua y, de ese total, qué porcentaje es agua dulce? Adicionalmente, ¿qué sector es el mayor consumidor de agua dulce a nivel global?",
            answers: {
                a: "El 50% de la superficie terrestre está cubierta de agua, de la cual el 10% es agua dulce. El sector industrial es el mayor consumidor.",
                b: "El 80% de la superficie terrestre está cubierta de agua, de la cual solo el 1% es agua dulce. La minería es el mayor consumidor.",
                c: "El 70% de la superficie terrestre está cubierta de agua, de la cual solo el 3% es agua dulce. El sector agrícola es el mayor consumidor de agua dulce a nivel mundial, requiriendo aproximadamente el 70%.",
                d: "El 60% de la superficie terrestre está cubierta de agua, de la cual el 5% es agua dulce. El consumo doméstico es el mayor consumidor."
            },
            correctAnswer: "c",
            type: "single"
        },
        {
            question: "4. Define el término 'evapotranspiración' y explica de qué manera influye en el balance hídrico, según lo descrito en las fuentes.",
            answers: {
                a: "Es el proceso de condensación del vapor de agua en la atmósfera, lo que incrementa las precipitaciones y el agua disponible.",
                b: "La evapotranspiración es la cantidad de agua que los ríos llevan al mar, disminuyendo el volumen de agua en el interior del continente.",
                c: "La evapotranspiración es la combinación de la pérdida de agua por evaporación desde la superficie del suelo y por transpiración de los cultivos. Influye en el balance hídrico al hacer que el agua regrese a la atmósfera, reduciendo así la cantidad disponible para la infiltración eficaz y la escorrentía superficial.",
                d: "Se refiere al agua que se almacena en los embalses para uso humano, sin impacto significativo en el balance natural del agua."
            },
            correctAnswer: "c",
            type: "single"
        },
        {
            question: "5. ¿Qué se entiende por 'infiltración eficaz' o 'recarga' en el contexto del ciclo del agua? Menciona al menos un factor del suelo que puede influir en la capacidad de infiltración.",
            answers: {
                a: "Es el agua que se retiene en la superficie del suelo y se evapora rápidamente. Un factor influyente es la temperatura del aire.",
                b: "Es el volumen de agua que escurre por la superficie del terreno hacia los ríos después de una lluvia intensa. Un factor es la pendiente del terreno.",
                c: "Se entiende por infiltración eficaz o recarga la porción de agua de precipitación que atraviesa la superficie del terreno y, una vez superada la retención máxima del suelo (capacidad de campo), desciende por gravedad hasta la zona saturada o acuífero. Factores como el tamaño de grano y la intercalación de capas con distinto tamaño de grano pueden influir en esta capacidad.",
                d: "Es la cantidad total de agua que cae como precipitación en una cuenca. Un factor es la intensidad de la lluvia."
            },
            correctAnswer: "c",
            type: "single"
        },
        {
            question: "6. Las aguas subterráneas son consideradas una de las mayores reservas de agua dulce, pero a menudo son un recurso menos conocido. Según las fuentes, ¿qué tendencia se ha observado en los niveles de las aguas subterráneas en Chile, especialmente desde finales de los años 80 y exacerbado por la Megasequía?",
            answers: {
                a: "Una tendencia al aumento de los niveles de agua subterránea debido a un incremento de las precipitaciones en la zona central y norte.",
                b: "Los niveles de agua subterránea se han mantenido estables en la mayoría de las cuencas, sin cambios significativos antes o durante la Megasequía.",
                c: "Se ha observado una tendencia generalizada a la disminución sostenida de los niveles de las aguas subterráneas, especialmente a partir de 1988, y esta situación ha sido exacerbada desde 2010 con el inicio de la Megasequía, siendo las extracciones el principal factor impulsor.",
                d: "Una variación irregular sin un patrón claro, aunque con algunos picos de recuperación gracias a periodos húmedos excepcionales."
            },
            correctAnswer: "c",
            type: "single"
        },
        {
            question: "7. De acuerdo con la clasificación de unidades hidrogeológicas, ¿cuál es la principal diferencia entre un 'acuífero', un 'acuitardo' y un 'acuicludo' en términos de su capacidad para almacenar y transmitir agua?",
            answers: {
                a: "Un acuífero solo almacena agua, un acuitardo solo la transmite y un acuicludo hace ambas cosas.",
                b: "Un acuífero es impermeable, un acuitardo es semipermeable y un acuicludo es permeable.",
                c: "Un acuífero es una formación geológica permeable capaz de almacenar, transmitir y proporcionar cantidades aprovechables de agua. Un acuitardo es una unidad que retarda el flujo de agua, con menor permeabilidad. Un acuicludo es una unidad que prácticamente encierra o recluye el agua, con muy baja o nula permeabilidad.",
                d: "Acuífero, acuitardo y acuicludo son términos intercambiables que describen formaciones geológicas con la misma capacidad de contener agua."
            },
            correctAnswer: "c",
            type: "single"
        },
        {
            question: "8. ¿Qué factor controla principalmente el movimiento del agua subterránea y en qué dirección general se desplaza el agua en relación con las variaciones de la altura piezométrica?",
            answers: {
                a: "La temperatura del suelo, y el agua se desplaza de zonas más frías a más cálidas.",
                b: "La presión atmosférica, y el agua se mueve de áreas de baja presión a alta presión.",
                c: "La carga o altura hidráulica (o piezométrica), la cual refleja la energía del agua. El agua se desplaza desde zonas de mayor altura piezométrica hacia zonas de menor altura piezométrica.",
                d: "La composición química del agua, y se mueve de áreas con más minerales a menos minerales."
            },
            correctAnswer: "c",
            type: "single"
        },
        {
            question: "9. En el caso específico de la provincia de Petorca en Chile, ¿cuál es el principal factor antropogénico que, según las fuentes, ha llevado a la escasez extrema de agua para las comunidades locales?",
            answers: {
                a: "La actividad minera a gran escala, que contamina las fuentes de agua y las hace no aptas para el consumo.",
                b: "El alto consumo doméstico de agua por el crecimiento poblacional descontrolado en la provincia.",
                c: "La generación hidroeléctrica, que desvía los cursos de los ríos y reduce la disponibilidad de agua.",
                d: "El agronegocio, específicamente las grandes plantaciones de paltos (aguacates) de origen tropical. Estos cultivos demandan enormes cantidades de agua, extrayéndola de las napas subterráneas y dejando a las comunidades locales sin acceso al recurso."
            },
            correctAnswer: "d",
            type: "single"
        },
        {
            question: "10. ¿Cuál es la crítica principal al Código de Aguas de 1981 en Chile, en relación con la distribución del recurso hídrico, y qué se espera que un futuro proceso constituyente logre respecto a este marco legal?",
            answers: {
                a: "El Código de Aguas de 1981 es criticado por ser demasiado moderno y no adaptarse a las prácticas tradicionales de uso del agua. Se espera que el proceso constituyente lo mantenga sin cambios.",
                b: "Se critica que el Código no promovió la inversión privada en infraestructura hídrica, lo que llevó a un estancamiento en el desarrollo. El proceso constituyente busca reforzar su aplicación original.",
                c: "La principal crítica es que el Código de Aguas de 1981 privatizó los derechos de agua, desvinculándolos de la tierra, lo que condujo a una distribución desigual y a la usurpación de aguas usadas tradicionalmente. Además, carecía de un registro nacional claro, haciendo difícil el rastreo de su propiedad, y priorizó la oferta de agua sobre la regulación de la demanda, generando inconsistencias ambientales y sociales. Se espera que un futuro proceso constituyente logre una revisión y un cambio hacia un código de aguas diferente y más justo, que deje de otorgar derechos de forma perpetua.",
                d: "La crítica es que el Código de Aguas de 1981 no consideró la calidad del agua, enfocándose solo en la cantidad. El proceso constituyente pretende añadir un apartado sobre la calidad."
            },
            correctAnswer: "c",
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
                        <span class="answer-text">${letter} : ${currentQuestion.answers[letter]}</span>
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

            // Encontrar el elemento de la respuesta correcta
            const correctAnswerElement = answerContainer.querySelector(`input[value="${currentQuestion.correctAnswer}"]`).closest('label');
            correctAnswerElement.classList.add('correct-answer');

            // Si el usuario respondió incorrectamente, resalta su respuesta en rojo
            if (userAnswer && userAnswer !== currentQuestion.correctAnswer) {
                const userAnswerElement = answerContainer.querySelector(`input[value="${userAnswer}"]`).closest('label');
                userAnswerElement.classList.add('incorrect-answer');
            } else if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
            }
        });

        resultsContainer.innerHTML = `<p>${numCorrect} de ${quizData.length} respuestas correctas.</p>`;
        
        // Deshabilitar el botón de enviar para que no se pueda volver a presionar
        submitButton.disabled = true;
    }

    buildQuiz();
    submitButton.addEventListener('click', showResults);
});