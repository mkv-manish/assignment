import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice';

export default function TaskInput() {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('Medium');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTask({ text, priority }));
      setText('');
    }
  };


return (
  <div className="flex flex-col sm:flex-row items-center gap-3 mb-6">
    <input
      type="text"
      placeholder="New task..."
      className="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      value={text}
      onChange={(e) => setText(e.target.value)}
    />

    <select
      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      value={priority}
      onChange={(e) => setPriority(e.target.value)}
    >
      <option>High</option>
      <option>Medium</option>
      <option>Low</option>
    </select>

    <button
      onClick={handleAdd}
      className="px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition shadow cursor-pointer"
    >
      Add
    </button>
  </div>
);
}
