const quizData = [{
        question: 'Which of the following is a Markup language?',
        'A': 'HTML',
        'B': 'CSS',
        'C': 'JavaScript',
        'D': 'PHP',
        'correct': 'A',
    },

    {
        question: 'Inside Which HTML element do we put the JavaScript?',
        'A': '<script>',
        'B': '<scripting>',
        'C': '<js>',
        'D': '<javascript>',
        'correct': 'A',

    },

    {
        question: 'How to write an IF statement in JavaScript?',
        'A': 'if i == t then',
        'B': 'if i = 5',
        'C': 'if (i == 5)',
        'D': 'if i = 5 then',
        'correct': 'C',

    },

    {
        question: 'How to write an IF statement for executing if "i" is NOT equal to 5?',
        'A': 'if (i != 5)',
        'B': 'if i =! 5 then',
        'C': 'if i <> 5',
        'D': 'if (i <> 5)',
        'correct': 'A',

    },

    {
        question: 'Choose the correct HTML element for the largest heading:',
        'A': '<heading>',
        'B': '<h6>',
        'C': '<head>',
        'D': '<h1>',
        'correct': 'D',
    }
];

let index = 0;
let total = quizData.length;
let correct = 0;
let incorrect = 0;


let questionBox = document.getElementById('questionBox');
let OptionInput = document.querySelectorAll("input[type = 'radio' ]");

const LoadQuestion = () => {
    if (total === index) {
        return endQuiz();
    }

    reset();

    const data = quizData[index];

    // console.log(data);
    questionBox.innerHTML = ` ${index + 1})   ${data.question}`;
    OptionInput[0].nextElementSibling.innerText = data.A
    OptionInput[1].nextElementSibling.innerText = data.B
    OptionInput[2].nextElementSibling.innerText = data.C
    OptionInput[3].nextElementSibling.innerText = data.D
}

document.querySelector("#submit").addEventListener("click", function() {
    const data = quizData[index];
    const ans = getans();

    if (ans == data.correct) {
        correct++;
    } else {
        incorrect++;
    }

    index++;
    LoadQuestion();
})

const getans = () => {
    let ans;

    OptionInput.forEach(
        (input) => {

            if (input.checked) {
                ans = input.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    OptionInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementsByClassName("container")[0].innerHTML = `
    <div class = "Box"  style = "background-color: green " >
    <h3> ${correct} / ${total} are Correct </h3>  
    </div> `
}

// ---> Initial Call
LoadQuestion(index);