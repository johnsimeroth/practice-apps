import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import Form1 from './components/Form1.jsx';
import Form2 from './components/Form2.jsx';
// import Form3 from './components/Form3.jsx';
// import Confirmation from './components/Confirmation.jsx';

// TODO: explore if routes can be cleaned up using something like /forms/:formID
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/forms/form1',
        element: <Form1 />
      },
      {
        path: '/forms/form2',
        element: <Form2 />
      }
      // {
      //   path: '/forms/form3',
      //   element: <Form3 />
      // },
      // {
      //   path: '/confirmation',
      //   element: <Confirmation />
      // }
    ]
  },
]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// );

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById('root'));



// ReactDOM.render(
//   <div>
//     <p>Hello, World!</p>
//     <p>
//       <code>Page Cookie: {JSON.stringify(document.cookie, undefined, '\t')}</code>
//     </p>
//   </div>,
//   document.getElementById('root')
// );
