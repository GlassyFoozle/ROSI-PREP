const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const soundButton = document.getElementById('sound-btn')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex = 0
let currentAType = 0

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})



function startQuiz() {
  startButton.classList.add('hide') //hide start button
  shuffledQuestions = questions.sort(() => Math.random() - 0.5)
  questionContainer.classList.remove('hide') //show question container
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(Q) {
  questionElement.innerText = Q.question;
  currentAType = Q.aType
  console.log(currentAType)
  if (currentAType == 1) {soundButton.addEventListener('click', playA);playA()}
  if (currentAType == 2) {soundButton.addEventListener('click', playB);playB()}
  if (currentAType == 3) {soundButton.addEventListener('click', playC);playC()}
  if (currentAType == 4) {soundButton.addEventListener('click', playD);playD()}
  if (currentAType == 5) {soundButton.addEventListener('click', playE);playE()}
  if (currentAType == 6) {soundButton.addEventListener('click', playF);playF()}
  if (currentAType == 7) {soundButton.addEventListener('click', playG);playG()}
  if (currentAType == 8) {soundButton.addEventListener('click', playH);playH()}
  if (currentAType == 9) {soundButton.addEventListener('click', playI);playI()}
  if (currentAType == 10) {soundButton.addEventListener('click', playJ);playJ()}
  if (currentAType == 11) {soundButton.addEventListener('click', playK);playK()}
  if (currentAType == 12) {soundButton.addEventListener('click', playL);playL()}
  if (currentAType == 13) {soundButton.addEventListener('click', playM);playM()}
  if (currentAType == 14) {soundButton.addEventListener('click', playN);playN()}
  if (currentAType == 15) {soundButton.addEventListener('click', playO);playO()}
  if (currentAType == 16) {soundButton.addEventListener('click', playP);playP()}
  if (currentAType == 17) {soundButton.addEventListener('click', playQ);playQ()}
  if (currentAType == 18) {soundButton.addEventListener('click', playR);playR()}
  if (currentAType == 19) {soundButton.addEventListener('click', playS);playS()}
  if (currentAType == 20) {soundButton.addEventListener('click', playT);playT()}
  if (currentAType == 21) {soundButton.addEventListener('click', playU);playU()}
  if (currentAType == 22) {soundButton.addEventListener('click', playV);playV()}
  if (currentAType == 23) {soundButton.addEventListener('click', playW);playW()}
  if (currentAType == 24) {soundButton.addEventListener('click', playX);playX()}
  if (currentAType == 25) {soundButton.addEventListener('click', playY);playY()}
  if (currentAType == 26) {soundButton.addEventListener('click', playZ);playZ()}


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
  console.log(currentAType)
  if (currentAType == 1) soundButton.removeEventListener('click', playA)
  if (currentAType == 2) soundButton.removeEventListener('click', playB)
  if (currentAType == 3) soundButton.removeEventListener('click', playC)
  if (currentAType == 4) soundButton.removeEventListener('click', playD)
  if (currentAType == 5) soundButton.removeEventListener('click', playE)
  if (currentAType == 6) soundButton.removeEventListener('click', playF)
  if (currentAType == 7) soundButton.removeEventListener('click', playG)
  if (currentAType == 8) soundButton.removeEventListener('click', playH)
  if (currentAType == 9) soundButton.removeEventListener('click', playI)
  if (currentAType == 10) soundButton.removeEventListener('click', playJ)
  if (currentAType == 11) soundButton.removeEventListener('click', playK)
  if (currentAType == 12) soundButton.removeEventListener('click', playL)
  if (currentAType == 13) soundButton.removeEventListener('click', playM)
  if (currentAType == 14) soundButton.removeEventListener('click', playN)
  if (currentAType == 15) soundButton.removeEventListener('click', playO)
  if (currentAType == 16) soundButton.removeEventListener('click', playP)
  if (currentAType == 17) soundButton.removeEventListener('click', playQ)
  if (currentAType == 18) soundButton.removeEventListener('click', playR)
  if (currentAType == 19) soundButton.removeEventListener('click', playS)
  if (currentAType == 20) soundButton.removeEventListener('click', playT)
  if (currentAType == 21) soundButton.removeEventListener('click', playU)
  if (currentAType == 22) soundButton.removeEventListener('click', playV)
  if (currentAType == 23) soundButton.removeEventListener('click', playW)
  if (currentAType == 24) soundButton.removeEventListener('click', playX)
  if (currentAType == 25) soundButton.removeEventListener('click', playY)
  if (currentAType == 26) soundButton.removeEventListener('click', playZ)
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if(shuffledQuestions.length > currentQuestionIndex + 1){
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

const audioA = new Audio("mp3/audioA.mp3")
const audioB = new Audio("mp3/audioB.mp3")
const audioC = new Audio("mp3/audioC.mp3")
const audioD = new Audio("mp3/audioD.mp3")
const audioE = new Audio("mp3/audioE.mp3")
const audioF = new Audio("mp3/audioF.mp3")
const audioG = new Audio("mp3/audioG.mp3")
const audioH = new Audio("mp3/audioH.mp3")
const audioI = new Audio("mp3/audioI.mp3")
const audioJ = new Audio("mp3/audioJ.mp3")
const audioK = new Audio("mp3/audioK.mp3")
const audioL = new Audio("mp3/audioL.mp3")
const audioM = new Audio("mp3/audioM.mp3")
const audioN = new Audio("mp3/audioN.mp3")
const audioO = new Audio("mp3/audioO.mp3")
const audioP = new Audio("mp3/audioP.mp3")
const audioQ = new Audio("mp3/audioQ.mp3")
const audioR = new Audio("mp3/audioR.mp3")
const audioS = new Audio("mp3/audioS.mp3")
const audioT = new Audio("mp3/audioT.mp3")
const audioU = new Audio("mp3/audioU.mp3")
const audioV = new Audio("mp3/audioV.mp3")
const audioW = new Audio("mp3/audioW.mp3")
const audioX = new Audio("mp3/audioX.mp3")
const audioY = new Audio("mp3/audioY.mp3")
const audioZ = new Audio("mp3/audioZ.mp3")

function playA() {audioA.play()}
function playB() {audioB.play()}
function playC() {audioC.play()}
function playD() {audioD.play()}
function playE() {audioE.play()}
function playF() {audioF.play()}
function playG() {audioG.play()}
function playH() {audioH.play()}
function playI() {audioI.play()}
function playJ() {audioJ.play()}
function playK() {audioK.play()}
function playL() {audioL.play()}
function playM() {audioM.play()}
function playN() {audioN.play()}
function playO() {audioO.play()}
function playP() {audioP.play()}
function playQ() {audioQ.play()}
function playR() {audioR.play()}
function playS() {audioS.play()}
function playT() {audioT.play()}
function playU() {audioU.play()}
function playV() {audioV.play()}
function playW() {audioW.play()}
function playX() {audioX.play()}
function playY() {audioY.play()}
function playZ() {audioZ.play()}


const questions = [
  {
    question: '소리를 듣고 연상되는 알파벳을 고르세요.',
    aType: 1,
    answers: [
      {text: 'K', correct: false},
      {text: 'A', correct: true},
      {text: 'S', correct: false},
      {text: 'M', correct: false}
    ]
  },
  {
    question: '소리를 듣고 연상되는 알파벳을 고르세요.',
    aType: 2,
    answers: [
      {text: 'B', correct: true},
      {text: 'D', correct: false},
      {text: 'P', correct: false},
      {text: 'R', correct: false}
    ]
  },
  {
    question: '소리를 듣고 연상되는 알파벳을 고르세요.',
    aType: 3,
    answers: [
      {text: 'K', correct: false},
      {text: 'O', correct: false},
      {text: 'C', correct: true},
      {text: 'E', correct: false}
    ]
  },
  {
    question: '소리를 듣고 연상되는 알파벳을 고르세요.',
    aType: 4,
    answers: [
      {text: 'G', correct: false},
      {text: 'P', correct: false},
      {text: 'D', correct: true},
      {text: 'B', correct: false}
    ]
  },
  {
    question: '소리를 듣고 연상되는 알파벳을 고르세요.',
    aType: 5,
    answers: [
      {text: 'E', correct: true},
      {text: 'T', correct: false},
      {text: 'W', correct: false},
      {text: 'B', correct: false}
    ]
  },
  {
    question: '소리를 듣고 연상되는 알파벳을 고르세요.',
    aType: 6,
    answers: [
      {text: 'M', correct: false},
      {text: 'H', correct: false},
      {text: 'E', correct: false},
      {text: 'F', correct: true}
    ]
  },
  {
    question: '소리를 듣고 연상되는 알파벳을 고르세요.',
    aType: 7,
    answers: [
      {text: 'C', correct: false},
      {text: 'G', correct: true},
      {text: 'O', correct: false},
      {text: 'Q', correct: false}
    ]
  },
  {
    question: '소리를 듣고 연상되는 알파벳을 고르세요.',
    aType: 8,
    answers: [
      {text: 'A', correct: false},
      {text: 'X', correct: false},
      {text: 'E', correct: false},
      {text: 'H', correct: true}
    ]
  },
  {
    question: '소리를 듣고 연상되는 알파벳을 고르세요.',
    aType: 9,
    answers: [
      {text: 'I', correct: true},
      {text: 'L', correct: false},
      {text: 'H', correct: false},
      {text: 'T', correct: false}
    ]
  },
  {
    question: '소리를 듣고 연상되는 알파벳을 고르세요.',
    aType: 10,
    answers: [
      {text: 'I', correct: false},
      {text: 'Y', correct: false},
      {text: 'J', correct: true},
      {text: 'T', correct: false}
    ]
  },
  {
    question: '소리를 듣고 연상되는 알파벳을 고르세요.',
    aType: 11,
    answers: [
      {text: 'F', correct: false},
      {text: 'K', correct: true},
      {text: 'V', correct: false},
      {text: 'E', correct: false}
    ]
  },
  {
    question: '소리를 듣고 연상되는 알파벳을 고르세요.',
    aType: 12,
    answers: [
      {text: 'P', correct: false},
      {text: 'E', correct: false},
      {text: 'I', correct: false},
      {text: 'L', correct: true}
    ]
  },
  {
    question: '소리를 듣고 연상되는 알파벳을 고르세요.',
    aType: 13,
    answers: [
      {text: 'W', correct: false},
      {text: 'N', correct: false},
      {text: 'S', correct: false},
      {text: 'M', correct: true}
    ]
  },
  {
    question: '소리를 듣고 연상되는 알파벳을 고르세요.',
    aType: 14,
    answers: [
      {text: 'N', correct: true},
      {text: 'Y', correct: false},
      {text: 'B', correct: false},
      {text: 'X', correct: false}
    ]
  },
  {
    question: '소리를 듣고 연상되는 알파벳을 고르세요.',
    aType: 15,
    answers: [
      {text: 'Q', correct: false},
      {text: 'D', correct: false},
      {text: 'O', correct: true},
      {text: 'U', correct: false}
    ]
  },
  {
    question: '소리를 듣고 연상되는 알파벳을 고르세요.',
    aType: 16,
    answers: [
      {text: 'D', correct: false},
      {text: 'P', correct: true},
      {text: 'R', correct: false},
      {text: 'Y', correct: false}
    ]
  },
  {
    question: '소리를 듣고 연상되는 알파벳을 고르세요.',
    aType: 17,
    answers: [
      {text: 'O', correct: false},
      {text: 'Q', correct: true},
      {text: 'G', correct: false},
      {text: 'S', correct: false}
    ]
  },
  {
    question: '소리를 듣고 연상되는 알파벳을 고르세요.',
    aType: 18,
    answers: [
      {text: 'P', correct: false},
      {text: 'F', correct: false},
      {text: 'R', correct: true},
      {text: 'V', correct: false}
    ]
  },
  {
    question: '소리를 듣고 연상되는 알파벳을 고르세요.',
    aType: 19,
    answers: [
      {text: 'W', correct: false},
      {text: 'N', correct: false},
      {text: 'Z', correct: false},
      {text: 'S', correct: true}
    ]
  },
  {
    question: '소리를 듣고 연상되는 알파벳을 고르세요.',
    aType: 20,
    answers: [
      {text: 'T', correct: true},
      {text: 'H', correct: false},
      {text: 'I', correct: false},
      {text: 'Y', correct: false}
    ]
  },
  {
    question: '소리를 듣고 연상되는 알파벳을 고르세요.',
    aType: 21,
    answers: [
      {text: 'U', correct: true},
      {text: 'O', correct: false},
      {text: 'V', correct: false},
      {text: 'D', correct: false}
    ]
  },
  {
    question: '소리를 듣고 연상되는 알파벳을 고르세요.',
    aType: 22,
    answers: [
      {text: 'E', correct: false},
      {text: 'U', correct: false},
      {text: 'W', correct: false},
      {text: 'V', correct: true}
    ]
  },
  {
    question: '소리를 듣고 연상되는 알파벳을 고르세요.',
    aType: 23,
    answers: [
      {text: 'D', correct: false},
      {text: 'W', correct: true},
      {text: 'B', correct: false},
      {text: 'U', correct: false}
    ]
  },
  {
    question: '소리를 듣고 연상되는 알파벳을 고르세요.',
    aType: 24,
    answers: [
      {text: 'Y', correct: false},
      {text: 'A', correct: false},
      {text: 'X', correct: true},
      {text: 'J', correct: false}
    ]
  },
  {
    question: '소리를 듣고 연상되는 알파벳을 고르세요.',
    aType: 25,
    answers: [
      {text: 'L', correct: false},
      {text: 'T', correct: false},
      {text: 'Y', correct: true},
      {text: 'I', correct: false}
    ]
  },
  {
    question: '소리를 듣고 연상되는 알파벳을 고르세요.',
    aType: 26,
    answers: [
      {text: 'M', correct: false},
      {text: 'Z', correct: true},
      {text: 'S', correct: false},
      {text: 'N', correct: false}
    ]
  },
]