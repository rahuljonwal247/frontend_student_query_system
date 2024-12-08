// // // pages/login.tsx
// // import { useState } from "react";
// // import { useRouter } from "next/router";
// // import { isAuthenticated } from "../utils/auth";

// // const LoginPage = () => {
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const router = useRouter();

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();

// //     // Add your authentication logic here
// //     if (username === "student" && password === "password") {
// //       localStorage.setItem("token", "your-jwt-token"); // Replace with actual JWT token
// //       router.push("/queries");
// //     }
// //   };

// //   if (isAuthenticated()) {
// //     router.push("/queries");
// //   }

// //   return (
// //     <div className="min-h-screen flex items-center justify-center">
// //       <form onSubmit={handleSubmit} className="space-y-4 p-6 border border-gray-300 rounded-lg">
// //         <div>
// //           <label className="block">Username</label>
// //           <input
// //             type="text"
// //             value={username}
// //             onChange={(e) => setUsername(e.target.value)}
// //             required
// //             className="w-full p-2 border border-gray-300 rounded"
// //           />
// //         </div>
// //         <div>
// //           <label className="block">Password</label>
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //             className="w-full p-2 border border-gray-300 rounded"
// //           />
// //         </div>
// //         <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
// //           Login
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default LoginPage;


// // pages/login.tsx
// import { useState } from "react";
// import { useRouter } from "next/router";
// import { isAuthenticated } from "../utils/auth";

// // Mocked users for simplicity
// const mockUsers = {
//   student: { username: "student", password: "password", role: "student" },
//   resolver: { username: "resolver", password: "password", role: "resolver" },
// };

// const LoginPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(""); // Reset any previous errors

//     // Simulate user authentication with mocked user data
//     const user = Object.values(mockUsers).find(
//       (u) => u.username === username && u.password === password
//     );

//     if (user) {
//       localStorage.setItem("token", "your-jwt-token"); // Store token
//       localStorage.setItem("role", user.role); // Save user role
//       if (user.role === "student") {
//         router.push("/queries");
//       } else if (user.role === "resolver") {
//         router.push("/queries");
//       }
//     } else {
//       setError("Invalid username or password.");
//     }
//   };

//   if (isAuthenticated()) {
//     const role = localStorage.getItem("role");
//     if (role === "student") {
//       router.push("/queries");
//     } else if (role === "resolver") {
//       router.push("/queries");
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <form onSubmit={handleSubmit} className="space-y-4 p-6 border border-gray-300 rounded-lg">
//         <div>
//           <label className="block">Username</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>
//         <div>
//           <label className="block">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>
//         {error && <p className="text-red-500">{error}</p>}
//         <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;






























import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      // Send POST request to the backend API for login
      const response = await fetch("https://student-query-system.onrender.com/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Ensure the correct content type
        },
        body: JSON.stringify({ email, password }), // Send the email and password as JSON
      });
  
      // Check if the response is successful (status code 200-299)
      if (!response.ok) {
        throw new Error("Login failed. Please check your credentials.");
      }
  
      // Parse the response body as JSON
      const data = await response.json(); // Parse the response to JSON
  
      // Log the response to inspect the structure
      console.log(data);
  
      // Check if the token exists in the response
      if (data?.user?.token) {
        // Store the token in localStorage
        localStorage.setItem('token', data.user.token);
        localStorage.setItem('user', data.user.role);
  
        // Redirect based on user role
        if (data?.user?.role === 'student') {
          router.push('/student-dashboard');
        } else {
          router.push('/resolver-dashboard');
        }
      } else {
        throw new Error("Failed to retrieve user data.");
      }
    } catch (error) {
      console.error("Login error:", error); // Log the error
      alert("Login failed. Please check your credentials."); // Show alert to user
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="p-6 bg-white rounded shadow-md w-80">
        <h1 className="mb-4 text-xl font-semibold">Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
