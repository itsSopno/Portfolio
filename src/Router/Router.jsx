import { createBrowserRouter } from "react-router-dom"; 
import App from "../App.jsx";
import Body from "../body.jsx";
import Project from "../Component/Project/Projectt.jsx";
import About from "../Component/About/about.jsx";
import ErrorPage from "../Component/Error/Error.jsx";
import Intro from "../Component/intro/intro.jsx";
import ProjectDetailPage from "../Component/ProjectDetail/ProjectDetailPage.jsx";
import ProjectsPage from "../Component/ProjectShowcase/ProjectShowcase.jsx";
import ProjectPage from "../Optional/ProjectPage.jsx";
import ContactSection from "../Component/ContactSection/ContactSection.jsx";
import DetailPage from "../Component/Detailpage/DetailPage.jsx";
 const ErrorWrapper = () => <ErrorPage />;

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorWrapper />,
    children: [
      { index: true, element: <Body /> },
      {path:"/about", element:<Intro></Intro>},
      {path:"project" , element:<ProjectsPage></ProjectsPage>},
      {path:"project/:id", element:<ProjectDetailPage></ProjectDetailPage>},
     {path:"/projectt", element:<DetailPage></DetailPage>},
     {path: "/contact", element:<ContactSection></ContactSection>},
  
    ],


  },
]);

export default Router;
