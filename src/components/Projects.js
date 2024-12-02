import React, { useEffect, useState } from 'react';
import './Projects.css';
import { useTheme } from './ThemeProvider'; // Import the custom hook

export const Projects = () => {
  const { isDarkMode } = useTheme(); // Access the isDarkMode value from the context
  const [projectTasks, setProjectTasks] = useState([]);

  // Fetch only the project tasks data
  useEffect(() => {
    fetch("https://syed-raiyan-ali.github.io/cv-api/api.json") // Update this URL with your JSON file location
      .then((response) => response.json())
      .then((data) => setProjectTasks(data.projectTasks)) // Set only projectTasks in state
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className={`box box3 ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="inner-box3">
        <label>Projects <span style={{ fontSize: 'clamp(10px, 1.6vw, 60px)' }}>(click on completed proj. to visit)</span>:-</label>
      </div>
      <div id="proj-list-cont" style={{ fontSize: 'clamp(10px, 1.6vw, 45px)' }}>
        <ul style={{ margin: '0px', paddingLeft: '10px' }}>
          {projectTasks.map((task) => (
            
            <li key={task.id} style={{ display: 'flex', justifyContent: 'space-between', margin: '0px' }} className={task.completed ? 'completed-task' : ''}>

              {task.url ? (<a href={task.url} target="_blank" rel="noopener noreferrer" className={task.completed ? 'completed-task' : ''}>{task.name}</a>) : 
              
              (
                <span className={task.completed ? 'completed-task' : ''}>{task.name}</span>
              )}

              <input type="checkbox" checked={task.completed} readOnly />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
