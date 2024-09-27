import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Routes from "./Routes";
import StoryPage from "./components/StoryPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes/>,
  },
  {
    path: "/story",
    element: <StoryPage/>,
  },
]);
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
