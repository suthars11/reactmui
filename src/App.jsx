// import Signup from "./Signup/Signup";
// // import "./App.css";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Login from "./Login/Login";

// function App() {
//   const route = createBrowserRouter([
//     {
//       path: "/",
//       element: <Signup />,
//     },
//     {
//       path: "/login",
//       element: <Login />,
//     },
//   ]);
//   return (
//     <div className="App">
//       <RouterProvider router={route}></RouterProvider>
//     </div>
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Route for the Signup component */}
          <Route path="/" element={<Signup />} />
          {/* Route for the Login component */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
