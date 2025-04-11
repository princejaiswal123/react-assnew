import React, { useState, useEffect } from 'react';
import { firestore } from './firebase-config'; 
const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const data = firestore.collection('tasks').onSnapshot(snapshot => {
      const tlist = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(tlist);
    });

    return () => data();
  }, []); 

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
