import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { useNavigate } from 'react-router'; 

export default function Login() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 
    dispatch(login(username));
    navigate('/');
  };



return (
    <div className="h-screen bg-gray-900 flex justify-center items-center">
      <div className="bg-gray-700 rounded-lg p-8 shadow-2xl max-w-md w-full">
        <form onSubmit={handleLogin}>
          <h1 className="text-center text-3xl text-white mb-6 font-bold">Login</h1>
          <p className="mb-4 text-gray-300">
            Please enter your username to continue.
          </p>
          <input
            type="text"
            required
            placeholder="Username"
            className="w-full mb-4 p-2 text-white bg-gray-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 shadow-2xl cursor-pointer transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}


//   return (
//     <div className="h-screen  bg-gray-300 flex items-center justify-center ">
//       <div className="p-6 bg-white rounded shadow-2xl w-full max-w-md">
//         <form onSubmit={handleLogin}>
//           <h1 className="text-center text-2xl mb-6 font-bold">Login</h1>
//           <p className="mb-4 text-gray-600">
//             Please enter your username to continue.
//           </p>
//           <input
//             type="text"
//             required
//             placeholder="Username"
//             className="w-full mb-4 p-2 border rounded"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
