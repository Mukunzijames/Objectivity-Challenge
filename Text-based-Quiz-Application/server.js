
const questions = [
    {
      question: "What is the causes of malaria?",
      choices: ["goat", "snake", "anophele", "cow"],
      answer: "Paris"
    },
    {
      question: "Who killed sarah?",
      choices: ["migabo alain", "mugisha kevine", "Ndahiro james", "shema william"],
      answer: "migabo alain"
    },
    {
      question: "What is your most favorable langauge?",
      choices: ["java", "javascript", "pythob", "c ++"],
      answer: "javascript"
    }
  ];
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function startQuiz() {
    let score = 0;
  
    const shuffledQuestions = shuffleArray(questions.slice());
  
    for (let i = 0; i < shuffledQuestions.length; i++) {
      const questionObj = shuffledQuestions[i];
      const question = questionObj.question;
      const choices = questionObj.choices;
      const answer = questionObj.answer;
  
      console.log(`Question ${i + 1}: ${question}`);
      for (let j = 0; j < choices.length; j++) {
        console.log(`${j + 1}. ${choices[j]}`);
      }
  
      const userAnswer =("Enter your answer (1-4):");
  
      if (userAnswer === null) {
        break; 
      } else if (choices[userAnswer - 1] === answer) {
        console.log("Correct!");
        score++;
      } else {
        console.log(`Incorrect. The correct answer is ${answer}.`);
      }
    }
  
    console.log(`You scored ${score} out of ${questions.length}.`);
  }
  
  startQuiz();
  