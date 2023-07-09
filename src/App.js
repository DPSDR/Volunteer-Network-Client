import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello World</div>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;