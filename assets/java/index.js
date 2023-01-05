const startBtn = document.getElementById("startBtn")
const question = document.getElementById("questions")


startBtn.addEventListener("click", start) 

function start () {
    console.log("started")
    startBtn.classList.add("hidden")
    questionContainerElement.classList.remove("hidden")
    
}

const questions = [
    {
        question: 'what is 2 + 2',
        answer: [
            { text: "4", correct: true },
            { text: "22", correct: false}
        ]
    }
]