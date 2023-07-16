const responses = ["c", "a", "b", "a", "c"];

const form = document.querySelector(".quiz-form")
form.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
    e.preventDefault()

    const result = []

    const radioButtons = document.querySelectorAll("input[type=radio]:checked")

    radioButtons.forEach((radioButton, index) => {
        if (radioButton.value === responses[index]) {
            result.push(true)
        } else {
            result.push(false)
        }
    })

    showResults(result)
    addColors(result)
}

const titleResult = document.querySelector(".results h2")
const markResult = document.querySelector(".mark")
const helpResult = document.querySelector(".help")

function showResults(results) {
    const errorsNumber = results.filter(el => el === false).length;

    helpResult.textContent = "Retentez une autre réponse dans les case rouge, puis validez à nouveau !";
    helpResult.style.display = "block";
    markResult.innerHTML = "Score : <span>" + (5 - errorsNumber) + " / 5</span>";
    markResult.style.display = "block";

    switch (errorsNumber) {
        case 0:
            titleResult.textContent = `✔️ Bravo, c'est un sans faute ! ✔️`;
            helpResult.textContent = "Quelle culture ...";
            break;
        case 1:
            titleResult.textContent = `✨ Vous y êtes presque ! ✨`;
            helpResult.textContent = "Retentez une autre réponse dans la case rouge, puis validez à nouveau !";
            break;
        case 2:
            titleResult.textContent = `✨ Encore un effort ... 👀`;
            break;
        case 3:
            titleResult.textContent = `👀 Il reste quelques erreurs. 😭`;
            break;
        case 4:
            titleResult.textContent = `😭 Peut mieux faire ! 😭`;
            break;
        case 5:
            titleResult.textContent = `👎 Peut mieux faire ! 👎`;
            break;
        default:
            titleResult.textContent = "Wops, cas inattendu.";
    }

    console.log(errorsNumber)
}

const questions = document.querySelectorAll(".question-block")

function addColors(results) {
    results.forEach((response, index) => {
        if (results[index]) {
            questions[index].style.backgroundImage = "linear-gradient(to right, #a8ff78, #78ffd6)"
        } else {
            questions[index].style.backgroundImage = "linear-gradient(to right, #f5567b, #fd674c)"
        }
    })
}

const radioInputs = document.querySelectorAll("input[type=radio]")
radioInputs.forEach(radioInput => radioInput.addEventListener("input", resetColor))

function resetColor(e) {
    const index = e.target.getAttribute("name").slice(1) - 1
    const parentQuestionBlock = questions[index]

    parentQuestionBlock.style.backgroundColor = "f1f1f1"
    parentQuestionBlock.style.backgroundImage = "none"

}
