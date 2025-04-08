import React from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

export default function Home() {


  return (
  <div className="min-h-screen  p-6 sm:p-8 max-w-3xl mx-auto">
    <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
      My Tasks
    </h1>
    <TaskInput />
    <TaskList />
  </div>
); 
}
