import React, { useEffect, useState } from 'react';
import './Skills.css';
import { useTheme } from './ThemeProvider'; // Import the custom hook

export const Skills = () => {
  const { isDarkMode } = useTheme(); // Access the isDarkMode value from the context
  const [learningTasks, setLearningTasks] = useState([]);

  useEffect(() => {
    fetch("https://syed-raiyan-ali.github.io/cv-api/api.json")
      .then((response) => response.json())
      .then((data) => setLearningTasks(data.learningTasks)) // Access only learningTasks
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className={`box box1 ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="inner-box1">
        <label>Skill Development Plan:</label>
        <i className="fa-solid fa-fan fa-2xl" id="fa-fan" />
      </div>
      <div id="list-cont" style={{ fontSize: 'clamp(10px, 1.6vw, 45px)' }}>
      <ul style={{margin: '0px', paddingLeft: '10px' }}>
          {learningTasks.map((task) => (
            <li style={{ display: 'flex', justifyContent: 'space-between',margin: '0px' }} key={task.id}className={task.completed ? 'completed-task' : ''}>
              {task.name}
              <input type="checkbox" checked={task.completed} readOnly />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
