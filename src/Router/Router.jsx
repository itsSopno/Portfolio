import { createBrowserRouter } from "react-router-dom"; 
import App from "../App.jsx";
import Body from "../body.jsx";
import Project from "../Component/Project/Projectt.jsx";
import About from "../Component/About/about.jsx";
import ErrorPage from "../Component/Error/Error.jsx";
import Intro from "../Component/intro/intro.jsx";
 const ErrorWrapper = () => <ErrorPage />;
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorWrapper />,
    children: [
      { index: true, element: <Body /> },
      {path:"project", element:<Project></Project>},
      {path:"/about", element:<Intro></Intro>},
     
    ],
  },
]);

export default Router;
