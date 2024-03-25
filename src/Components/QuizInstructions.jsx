import React from 'react'

const QuizInstructions = () => {
  return (
    <div>
        <div className="test-instruction">
            <div className="quiz-nstruction">
                <h1>Quiz Instructions</h1>
                <p>Number of questions: 10</p>
                <p>Total marks: 10</p>
                <p>Test duration: No time limit</p>
                <p>Re-attempt: Yes</p>
                <h1 style={{marginTop:'25px'}}>Instructions</h1>
                <p> 1) Please ensure you have a stable internet connection.</p>
                <p> 2) You can re-attempt any more times.</p>
                <p>3) Topics are based on MERN stack development</p>
                <h1 style={{marginTop:'25px'}}>Our Recommandation</h1>
                <p> 1) Please ensure you have a stable internet connection.</p>
                <p> 2) Refer our videos,pdf before attending the test.</p>
                <h1 style={{marginTop:'25px'}}>Certificate eligibility</h1>
                <p>1) Every participants will get a e-participation certificate.</p>
                <p>2) Participants who get more than 50% will receieve Certificate of Appreciation</p>
                <p>3) Certificate will be generated within an hour.</p>
                <p>4) The certificate will be mailed to email.</p>
            </div>
        </div>
    </div>
  )
}

export default QuizInstructions
