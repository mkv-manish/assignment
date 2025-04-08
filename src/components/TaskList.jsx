import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../features/tasks/taskSlice';

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks.items);
  const dispatch = useDispatch();

return (
  <ul className="space-y-3">
    {tasks.map((task, index) => (
      <li
        key={index}
        className="flex justify-between items-center p-4 rounded-md shadow-sm border-l-4 bg-white border-gray-300"
      >
        <div>
          <p className="font-medium text-gray-800">{task.text}</p>
          <span className="text-sm text-gray-500">Priority: {task.priority}</span>
        </div>
        <button
          onClick={() => dispatch(removeTask(index))}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition cursor-pointer"
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
}