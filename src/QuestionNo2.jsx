import React, { useEffect, useState } from 'react';
import './QuestionNo2.css';

const QuestionNo2 = () => {
       const [joke, setJoke] = useState(null);
  const [run, setRun] = useState(true);

  const dataBase = async () => {
    setRun(true);
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      setJoke({ error: "Failed", message: "Failed to fetch, Try after some time." });
    } finally {
      setRun(false);
    }
  };

  useEffect(() => {
    dataBase();
  }, []);

  return (
    <div className="container">
      <h2>Jokes</h2>
      {run ? (
        <p>Fetching</p>
      ) : (
        <>
          <p><strong>Error:</strong> {joke.error}</p>
          <p><strong>message:</strong> {joke.message}</p>
        </>
      )}
      <button onClick={dataBase}>Next</button>
    </div>
  );
};

export default QuestionNo2;
