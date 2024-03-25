import React , { useState } from 'react'

const Quiz = () => {

  const questions = [
    {
      question: '1) What is the database in MERN?',
      option: ['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS'],
      answer: 'MongoDB'
    },
    {
      question: '2) What is the backend API in MERN?',
      option: ['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS'],
      answer: 'ExpressJS'
    },
    {
      question: '3) What is a "callback" in React?',
      option: [
        'A function passed as an argument to another function to be executed later',
        'A React component used for handling asynchronous operations',
        'A method to update component state directly',
        'A type of event listener used in React applications'
      ],
      answer: 'A function passed as an argument to another function to be executed later'
    },
    {
      question: '4) Which part of MERN stack is responsible for handling the server side logic?',
      option: ['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS'],
      answer: 'NodeJS'
    },
    {
      question: '5) What is the PATCH method used for in Express.js?',
      option: [
        'To create a new resource',
        'To update an existing resource partially',
        'To retrieve data from the server',
        'To delete a resource'
      ],
      answer: 'To update an existing resource partially'
    },
    {
      question: '6) What is the Frontend in MERN?',
      option: ['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS'],
      answer: 'ReactJS'
    },
    {
      question: '7) What is the purpose of the "createIndex" method in MongoDB?',
      option: [
        'Deletes an index from a collection',
        'Creates a new collection in the database',
        'Inserts a document into a collection',
        'Creates an index on a specified field or fields of a collection'
      ],
      answer: 'Creates an index on a specified field or fields of a collection'
    },
    {
      question: '8) Which type of database is MongoDB?',
      option: [
        'Relational database',
        'Document-oriented database',
        'Key-value database',
        'Graph database'
      ],
      answer: 'Document-oriented database'
    },
    {
      question: '9) What is "state" in React?',
      option: [
      'A built-in React component',
      'A method to handle user input',
      'A data structure to manage component data and trigger re-renders',
      'A styling library commonly used in React applications'
      ],
      answer: 'A data structure to manage component data and trigger re-renders'
    },
    {
      question: '10) What data types can be represented in JSON?',
      option: [
        'Strings, Numbers, Booleans, Arrays, Objects',
        'Strings, Integers, Floats, Booleans, Lists',
        'Strings, Numbers, Booleans, Arrays, Dictionaries',
        'Strings, Integers, Booleans, Arrays, Objects'
      ],
      answer: 'Strings, Numbers, Booleans, Arrays, Objects'
    }
  ];

  const [selectedAnswers,setSelectedAnswers] = useState(Array(questions.length).fill(null));

  const handleChangeOption = (questionIndex,optionIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
  } 

  const calculateScore = ()=>{
      let score = 0;
      questions.forEach((question,index)=>{
        if(selectedAnswers[index]===null) {
          return ;
        }
        if(question.option[selectedAnswers[index]]===question.answer)
        {
          score++;
        }
      });
        fetch('https://sheetdb.io/api/v1/evpvzvlpkd6ty', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: [
                {
                    'email':localStorage.getItem('email'),
                    'mark': score,
                    'Participation name' : localStorage.getItem('name'),
                    'Time': new Date().toLocaleString()
                }
            ]
        })
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
      setSelectedAnswers(Array(questions.length).fill(null));
  }

  return (
    <div>
      <div className="test-1">
        <div className="quiz">
          <div className='question'>
            <h1>QUIZ</h1>
            {questions.map((question , index) => (
              <div key={index}>
                <p style={{marginTop:"12px"}}>{question.question}</p>
                <ul>
                  {question.option.map((option, optionIndex) => (
                    <li key={optionIndex} style={{listStyle:'none'}}>
                      <input type="radio" 
                      name={`question${index}`}
                      checked = {selectedAnswers[index]===optionIndex}
                      onChange={()=>handleChangeOption(index,optionIndex)}
                      /> {option}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <button className='quiz-submit-btn' onClick={calculateScore}>SUBMIT</button>
      </div>
    </div>
  )
}

export default Quiz