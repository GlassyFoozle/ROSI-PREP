const heading = document.getElementById('heading')
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const alphabet = [
  document.getElementById('alphabet-1'),
  document.getElementById('alphabet-2'),
  document.getElementById('alphabet-3'),
  document.getElementById('alphabet-4'),
  document.getElementById('alphabet-5'),
  document.getElementById('alphabet-6'),
  document.getElementById('alphabet-7'),
  document.getElementById('alphabet-8'),
  document.getElementById('alphabet-9'),
  document.getElementById('alphabet-10'),
  document.getElementById('alphabet-11'),
  document.getElementById('alphabet-12'),
  document.getElementById('alphabet-13'),
  document.getElementById('alphabet-14'),
  document.getElementById('alphabet-15'),
  document.getElementById('alphabet-16'),
  document.getElementById('alphabet-17'),
  document.getElementById('alphabet-18'),
  document.getElementById('alphabet-19'),
  document.getElementById('alphabet-20'),
  document.getElementById('alphabet-21'),
  document.getElementById('alphabet-22'),
  document.getElementById('alphabet-23'),
  document.getElementById('alphabet-24'),
  document.getElementById('alphabet-25'),
  document.getElementById('alphabet-26')  
]

let currentQuestionIndex = 0

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startQuiz() {
  currentQuestionIndex = 0
  for(let i=0;i<26;i++) alphabet[i].classList.add('hide')
  startButton.classList.add('hide') //hide start button
  heading.classList.add('hide') //hide heading
  questionContainer.classList.remove('hide') //show question container
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(questions[currentQuestionIndex])
}

function showQuestion(Q) {
  questionElement.innerText = Q.question;
  Q.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn') //create new answer button
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }

    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while(answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  if(correct) soundCorrect.play()
  else soundIncorrect.play()
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  alphabet[currentQuestionIndex].classList.remove('hide')
  if(questions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = '다시 하기'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if(correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const soundCorrect = new Audio("mp3/sound_correct.mp3")
const soundIncorrect = new Audio("mp3/sound_incorrect.mp3")
soundIncorrect.volume = 0.3

const questions = [
  {
    question: '알파벳 순서에서 1번째 알파벳을 고르세요.',
    answers: [
    {text: 'H', correct: false},
    {text: 'A', correct: true},
    {text: 'B', correct: false},
    {text: 'X', correct: false},
    {text: 'K', correct: false}
    ]
  },
  {
    question: '알파벳 순서에서 2번째 알파벳을 고르세요.',
    answers: [
    {text: 'R', correct: false},
    {text: 'B', correct: true},
    {text: 'D', correct: false},
    {text: 'W', correct: false},
    {text: 'P', correct: false}
    ]
  },
  {
    question: '알파벳 순서에서 3번째 알파벳을 고르세요.',
    answers: [
    {text: 'D', correct: false},
    {text: 'O', correct: false},
    {text: 'U', correct: false},
    {text: 'C', correct: true},
    {text: 'V', correct: false}
    ]
  },
  {
    question: '알파벳 순서에서 4번째 알파벳을 고르세요.',
    answers: [
    {text: 'D', correct: false},
    {text: 'O', correct: false},
    {text: 'U', correct: false},
    {text: 'C', correct: true},
    {text: 'V', correct: false}
    ]
  },
  {
    question: '알파벳 순서에서 5번째 알파벳을 고르세요.',
    answers: [
    {text: 'D', correct: false},
    {text: 'O', correct: false},
    {text: 'U', correct: false},
    {text: 'C', correct: true},
    {text: 'V', correct: false}
    ]
  },
  {
    question: '알파벳 순서에서 6번째 알파벳을 고르세요.',
    answers: [
    {text: 'D', correct: false},
    {text: 'O', correct: false},
    {text: 'U', correct: false},
    {text: 'C', correct: true},
    {text: 'V', correct: false}
    ]
  },
  {
    question: '알파벳 순서에서 7번째 알파벳을 고르세요.',
    answers: [
    {text: 'D', correct: false},
    {text: 'O', correct: false},
    {text: 'U', correct: false},
    {text: 'C', correct: true},
    {text: 'V', correct: false}
    ]
  },
  {
    question: '알파벳 순서에서 8번째 알파벳을 고르세요.',
    answers: [
    {text: 'D', correct: false},
    {text: 'O', correct: false},
    {text: 'U', correct: false},
    {text: 'C', correct: true},
    {text: 'V', correct: false}
    ]
  },
  {
    question: '알파벳 순서에서 9번째 알파벳을 고르세요.',
    answers: [
    {text: 'D', correct: false},
    {text: 'O', correct: false},
    {text: 'U', correct: false},
    {text: 'C', correct: true},
    {text: 'V', correct: false}
    ]
  },
  {
    question: '알파벳 순서에서 10번째 알파벳을 고르세요.',
    answers: [
    {text: 'D', correct: false},
    {text: 'O', correct: false},
    {text: 'U', correct: false},
    {text: 'C', correct: true},
    {text: 'V', correct: false}
    ]
  },
  {
    question: '알파벳 순서에서 11번째 알파벳을 고르세요.',
    answers: [
    {text: 'D', correct: false},
    {text: 'O', correct: false},
    {text: 'U', correct: false},
    {text: 'C', correct: true},
    {text: 'V', correct: false}
    ]
  },
  {
    question: '알파벳 순서에서 12번째 알파벳을 고르세요.',
    answers: [
    {text: 'D', correct: false},
    {text: 'O', correct: false},
    {text: 'U', correct: false},
    {text: 'C', correct: true},
    {text: 'V', correct: false}
    ]
  },
  {
    question: '알파벳 순서에서 13번째 알파벳을 고르세요.',
    answers: [
    {text: 'D', correct: false},
    {text: 'O', correct: false},
    {text: 'U', correct: false},
    {text: 'C', correct: true},
    {text: 'V', correct: false}
    ]
  },
  {
    question: '알파벳 순서에서 14번째 알파벳을 고르세요.',
    answers: [
    {text: 'D', correct: false},
    {text: 'O', correct: false},
    {text: 'U', correct: false},
    {text: 'C', correct: true},
    {text: 'V', correct: false}
    ]
  },
  {
    question: '알파벳 순서에서 15번째 알파벳을 고르세요.',
    answers: [
    {text: 'D', correct: false},
    {text: 'O', correct: false},
    {text: 'U', correct: false},
    {text: 'C', correct: true},
    {text: 'V', correct: false}
    ]
  },
  {
    question: '알파벳 순서에서 16번째 알파벳을 고르세요.',
    answers: [
    {text: 'D', correct: false},
    {text: 'O', correct: false},
    {text: 'U', correct: false},
    {text: 'C', correct: true},
    {text: 'V', correct: false}
    ]
  },
  {
    question: '알파벳 순서에서 17번째 알파벳을 고르세요.',
    answers: [
    {text: 'D', correct: false},
    {text: 'O', correct: false},
    {text: 'U', correct: false},
    {text: 'C', correct: true},
    {text: 'V', correct: false}
    ]
  },
  {
    question: '알파벳 순서에서 18번째 알파벳을 고르세요.',
    answers: [
    {text: 'D', correct: false},
    {text: 'O', correct: false},
    {text: 'U', correct: false},
    {text: 'C', correct: true},
    {text: 'V', correct: false}
    ]
  },
  {
    question: '알파벳 순서에서 19번째 알파벳을 고르세요.',
    answers: [
    {text: 'D', correct: false},
    {text: 'O', correct: false},
    {text: 'U', correct: false},
    {text: 'C', correct: true},
    {text: 'V', correct: false}
    ]
  },
  {
    question: '알파벳 순서에서 20번째 알파벳을 고르세요.',
    answers: [
    {text: 'D', correct: false},
    {text: 'O', correct: false},
    {text: 'U', correct: false},
    {text: 'C', correct: true},
    {text: 'V', correct: false}
    ]
  },
  {
    question: '알파벳 순서에서 21번째 알파벳을 고르세요.',
    answers: [
    {text: 'D', correct: false},
    {text: 'O', correct: false},
    {text: 'U', correct: false},
    {text: 'C', correct: true},
    {text: 'V', correct: false}
    ]
  },
  {
    question: '알파벳 순서에서 22번째 알파벳을 고르세요.',
    answers: [
    {text: 'D', correct: false},
    {text: 'O', correct: false},
    {text: 'U', correct: false},
    {text: 'C', correct: true},
    {text: 'V', correct: false}
    ]
  },
  {
    question: '알파벳 순서에서 23번째 알파벳을 고르세요.',
    answers: [
    {text: 'D', correct: false},
    {text: 'O', correct: false},
    {text: 'U', correct: false},
    {text: 'C', correct: true},
    {text: 'V', correct: false}
    ]
  },
  {
    question: '알파벳 순서에서 24번째 알파벳을 고르세요.',
    answers: [
    {text: 'D', correct: false},
    {text: 'O', correct: false},
    {text: 'U', correct: false},
    {text: 'C', correct: true},
    {text: 'V', correct: false}
    ]
  },
  {
    question: '알파벳 순서에서 25번째 알파벳을 고르세요.',
    answers: [
    {text: 'D', correct: false},
    {text: 'O', correct: false},
    {text: 'U', correct: false},
    {text: 'C', correct: true},
    {text: 'V', correct: false}
    ]
  },
  {
    question: '알파벳 순서에서 26번째 알파벳을 고르세요.',
    answers: [
    {text: 'D', correct: false},
    {text: 'O', correct: false},
    {text: 'U', correct: false},
    {text: 'C', correct: true},
    {text: 'V', correct: false}
    ]
  }
]