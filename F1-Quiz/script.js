const form1Data = [
    {
        question: "Phil Hill won the Drivers' World Championship in which year?",
        a: "1960",
        b: "1961",
        c: "1962",
        d: "1963",
        correct: "b",
    },
    {
        question: "Who was the first driver to reach 100 Grand Prix wins?",
        a: "Nigel Mansell",
        b: "Jim Clark",
        c: "Lewis Hamilton",
        d: "Jackie Stewart",
        correct: "c",
    },
    {
        question: "How old was Max Verstappen when he made his Grand Prix debut?",
        a: "16",
        b: "17",
        c: "18",
        d: "19",
        correct: "b",
    },
//]; - uncomment these two lines to start dubugging with short quiz list  
//    /*
    {
        question: "Which race in 2005 saw just 6 cars start the race on the grid?",
        a: "French Grand Prix",
        b: "Austrian Grand Prix",
        c: "British Grand Prix",
        d: "United States Grand Prix",
        correct: "d"
    },
    {
        question: "Which circuit saw the first F1 Sprint Race trial?",
        a: "Imola",
        b: "Monza",
        c: "Silverstone",
        d: "Catalunya",
        correct: "c"
    },
    {
        question: "Who was the first British World Champion?",
        a: "Peter Collins",
        b: "Mike Hawthorn",
        c: "Tony Brook",
        d: "Stirling Moss",
        correct: "b",
    },
    {
        question: "Who won the 2008 Canadian Grand Prix?",
        a: "Robert Kubica",
        b: "Jenson Button",
        c: "Fillipe Massa",
        d: "Kimi Raikkonen",
        correct: "a",
    },
    {
        question: "Who are the only team to win both the Drivers' and Constructors' Championships in their only season?",
        a: "Wolf",
        b: "Brawn",
        c: "Life",
        d: "Andrea Moda",
        correct: "b",
    },
    {
        question: "Who was the first driver to win 7 Drivers' World Championships?",
        a: "Alain Prost",
        b: "Lewis Hamilton",
        c: "Ayrton Senna",
        d: "Michael Schumacher",
        correct: "d",
    },
        {
        question: "Which circuit hosted the first World Championship race?",
        a: "Dijon",
        b: "Monza",
        c: "Monaco",
        d: "Silverstone",
        correct: "d",
    },
    {
        question: "Who won the 2008 Hungarian Grand Prix?",
        a: "Heikki Kovalainen",
        b: "Jenson Button",
        c: "Rubens Barrichello",
        d: "Lewis Hamilton",
        correct: "a",
    },
    {
        question: "Which team won the first World Constructors' Championship?",
        a: "Vanwall",
        b: "Ferrari",
        c: "Alfa Romeo",
        d: "Maserati",
        correct: "a",
    },
    {
        question: "In which country did Lewis Hamilton win his first Grand Prix?",
        a: "Australia",
        b: "China",
        c: "Germany",
        d: "Canada",
        correct: "d"
    },
    {
        question: "What was the previous name of the Red Bull team?",
        a: "Jordan",
        b: "Stewart",
        c: "Jaguar",
        d: "Minardi",
        correct: "c"
    },
    {
        question: "At which circuit did three drivers set identical pole position times in 1997?",
        a: "Hungaroring",
        b: "Jerez",
        c: "Hockenheim",
        d: "Monza",
        correct: "b",
    },
    {
        question: "Nelson Piquet won two Drivers Championships with which team?",
        a: "Williams",
        b: "Brabham",
        c: "Lotus",
        d: "McLaren",
        correct: "b",
    },
    {
        question: "In which year was the World Constructors' Championship introduced?",
        a: "1960",
        b: "1959",
        c: "1958",
        d: "1957",
        correct: "c",
    },
    {
        question: "Who drove for Williams Renault in 1989?",
        a: "Thierry Boutsen and Riccardo Patrese",
        b: "Riccardo Patrese and Nigel Mansell",
        c: "Thierry Boutsen and Martin Brundle",
        d: "Martin Brundle and Nigel Mansell",
        correct: "a",
    },
    {
        question: "Which company is the sole tyre supplier of Formula 1 since 2007?",
        a: "Michelin",
        b: "Pirelli",
        c: "Goodyear",
        d: "Bridgestone",
        correct: "b",
    },
    {
        question: "Where was the first Formula 1 race held at night?",
        a: "Abu Dhabi",
        b: "Bahrain",
        c: "Monaco",
        d: "Singapore",
        correct: "d",
    },
    {
        question: "Who won the 1965 World Drivers' Championship?",
        a: "John Surtees",
        b: "Jim Clark",
        c: "Graham Hill",
        d: "Denny Hulme",
        correct: "b",
    },
    {
        question: "Which team did Jarno Trulli drive for in the 2003 season?",
        a: "Renault",
        b: "Honda",
        c: "Williams",
        d: "BMW",
        correct: "a",
    },
    {
        question: "In which decade did Ferrari first allow sponsorship on their cars?",
        a: "1950's",
        b: "1960's",
        c: "1970's",
        d: "1980's",
        correct: "c",
    },
    {
        question: "Who came third in the 1981 Driver's World Chhampionship?",
        a: "Nelson Piquet",
        b: "Carlos Reutemann",
        c: "Didier Pironi",
        d: "Alan Jones",
        correct: "d",
    },
    {
        question: "When did Michael Schumacher start his first season with Ferrari?",
        a: "1995",
        b: "1996",
        c: "1997",
        d: "1998",
        correct: "b",
    },
    {
        question: "How many points did Nigel Mansell get in the 1991 Drivers' championship?",
        a: "72",
        b: "65",
        c: "75",
        d: "68",
        correct: "a",
    },
    {
        question: "Whichk driver wore a 'Superman' cape on the podium of the 2006 Monaco Grand Prix?",
        a: "Fernando Alonso",
        b: "Rubens Barrichello",
        c: "David Coulthard",
        d: "Jenson Button",
        correct: "c",
    },
    {
        question: "In which year was the World Driver's Championship first awarded?",
        a: "1949",
        b: "1952",
        c: "1951",
        d: "1950",
        correct: "d",
    },
    {
        question: "What is the longest sustained hard-corner in Formula 1?",
        a: "Sepang International Circuit Corner",
        b: "Monza's Parabolica",
        c: "Istanbul Park's Turn 8",
        d: "Brands Hatch Turn 4",
        correct: "c",
    },
    {
        question: "Who retired from Formula 1 in 1993, having taken his fourth title?",
        a: "Alain Prost",
        b: "Ayrton Senna",
        c: "Nelson Piquet",
        d: "Niki Lauda",
        correct: "a",
    },
    {
        question: "Which year did Damon Hill win the Formula 1 World Drivers' Championship?",
        a: "1997",
        b: "1996",
        c: "1995",
        d: "1994",
        correct: "b",
    },
    {
        question: "Who won the 1989 Japanese Grand Prix?",
        a: "Ayrton Senna",
        b: "Gerhard Berger",
        c: "Alessandro Nannini",
        d: "Thierry Boutsen",
        correct: "c",
    },
    {
        question: "How many World Drivers' Championships did Stirling Moss win?",
        a: "0",
        b: "1",
        c: "2",
        d: "3",
        correct: "a",
    },
    {
        question: "Ayrton Senna won how many Grands Prix?",
        a: "38",
        b: "39",
        c: "40",
        d: "41",
        correct: "d",
    },
    {
        question: "Which driver has won the most Formula 1 World Drivers' Championships in the 20th Century?",
        a: "Juan Manuel Fangio",
        b: "Michael Schumacher",
        c: "Jim Clark",
        d: "Alain Prost",
        correct: "a",
    },
    {
        question: "Who was the first World Driver's Champion?",
        a: "Alberto Ascari",
        b: "Juan-Manuel Fangio",
        c: "Giuseppe Farina",
        d: "Mike Hawthorn",
        correct: "c",
    },
    {
        question: "Which team did Michael Schumacher win his first championship?",
        a: "McLaren",
        b: "Williams",
        c: "Ferrari",
        d: "Benetton",
        correct: "d",
    },
    {
        question: "In what country is the circuit Spa-Francorchamps?",
        a: "Netherlands",
        b: "Belgium",
        c: "France",
        d: "Austria",
        correct: "b",
    },
    {
        question: "McLaren won the 1998 Constructors' Championship with which engine manufacturer?",
        a: "Mercedes",
        b: "Honda",
        c: "Renault",
        d: "Ford",
        correct: "a",
    },
    {
        question: "Who won the 1969 Constructors' Championship?",
        a: "Lotus",
        b: "Ferrari",
        c: "Matra",
        d: "Brabham",
        correct: "c",
    },
    {
        question: "Which engine manufacturer won the Constructors title in 1959, 1960, 1963 and 1965?",
        a: "Repco",
        b: "BRM",
        c: "Maserati",
        d: "Climax",
        correct: "d",
    },
];

// */ 
// form1Data - ALSO - uncomment above line when debugging

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = form1Data[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === form1Data[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < form1Data.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>You answered correctly ${score} out of ${form1Data.length} questions</h2>
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
});