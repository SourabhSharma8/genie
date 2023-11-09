
import Root from "../Component/Hoc/Root.js";
import LandingPage from "../Component/LandingPage";
import Result from "../Component/Results/ProductListing.js";


const routes = [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
            path: "/result",
            element: <Result/> ,
          },
        
      ],
    },
  ];
  
  export default routes;
  