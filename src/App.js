import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main/Main';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import Reset from './Components/Reset/Reset';

function App() {
  const router = createBrowserRouter([

  {path : '/',
   element: <Main></Main> ,
   children : [
   
   {path :'/' , element : <Home></Home>},
   {path :'home' , element : <Home></Home>},
   {path :'login' , element : <Login></Login>},
   {path :'registration' , element : <Registration></Registration>},
   {path :'reset' , element : <Reset></Reset>},
   ],
  }

  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
