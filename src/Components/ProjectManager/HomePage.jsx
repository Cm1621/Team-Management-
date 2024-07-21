import React from 'react';
import Sidebar from './Sidebar'; // Adjust the path as needed

const HomePage = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex flex-col w-full p-6 space-y-6 overflow-auto">
        <MessagesRow />
        <TasksRow />
        <CompletedTasksRow />
      </div>
    </div>
  );
};

const MessagesRow = () => {
  const hasMessages = true; // Replace this with actual message check logic

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-green-400">Messages</h2>
      <p className="text-gray-400">
        {hasMessages ? "You have new messages." : "You have no new messages."}
      </p>
    </div>
  );
};



const TasksRow = () => {
  const tasks = [
    { id: 1, title: 'Task 1', description: 'Description for task 1' },
  ];

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-green-400">To Do Tasks </h2>
      <div className="space-y-4">
        {tasks.map(task => (
          <div key={task.id} className="p-4 bg-gray-700 rounded-lg shadow">
            <h3 className="text-xl font-bold text-green-400">{task.title}</h3>
            <p className="text-gray-400">{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const CompletedTasksRow = () => {
  const completedTasks = [
    { id: 1, title: 'Completed Task 1', description: 'Description for completed task 1' },
  ];

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-green-400">Completed Tasks</h2>
      <div className="space-y-4">
        {completedTasks.map(task => (
          <div key={task.id} className="p-4 bg-gray-700 rounded-lg shadow">
            <h3 className="text-xl font-bold text-green-400">{task.title}</h3>
            <p className="text-gray-400">{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
