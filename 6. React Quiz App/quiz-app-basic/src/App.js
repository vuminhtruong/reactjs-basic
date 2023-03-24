import {Box, Grid,Button} from "@mui/material"
import { useState } from "react";
import data from "./data/Questions.json";

function App() {
  const questions = data.questions;
  const [count,setCount] = useState(0);
  const [question,setQuestion] = useState(questions[count]);
  const [answers,setAnswers] = useState(question.answers);
  const [result,setResult] = useState(0);
  const [done,setDone] = useState(false);
  function handleClick(event){
    setTimeout(() => {
      if(count < 9){
        setCount(count + 1);
        setQuestion(questions[count + 1]);
        setAnswers(questions[count + 1].answers);
      } else {
        setDone(true);
      }
    },500)
    const selectedAnswer = answers.find(item => item.id === parseInt(event.target.value));
    if(selectedAnswer.isCorrect) {
      setResult(result + 1);
    }
  }

  return (
    <Box
      sx={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        width: 800,
        height: 400,
        borderRadius: 10,
        backgroundColor: 'info.main',
        // '&:hover': {
        //   backgroundColor: 'text.primary'
        // },
        '& button': { m: 2 }
      }}
    >
    {done ? <h1>You scored {result} out of {questions.length}</h1> : (
      <Grid container height= '100%'>
        <Grid item xs={6} className="grid">
          <div className="left">
            <h2>Question {question.id}/{questions.length}</h2>
            <h1>{question.question}</h1>
          </div>
        </Grid>
        <Grid item xs={6} className="grid">
          <div>
              {answers.map((item,index) => (
                <Button key={index} variant="contained" onClick={handleClick} value={item.id}>
                  {item.text}
                </Button>
              ))}
          </div>
        </Grid>
    </Grid>
    )}
    </Box>
  );
}

export default App;
