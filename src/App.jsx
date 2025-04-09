import { createBrowserRouter , createRoutesFromElements ,RouterProvider ,Route } from "react-router-dom"
import RootLayout from "./RootLayout"
import HomePage from "./Home/HomePage"
import ProjectPage from "./Project/ProjectPage"


function App() {
  
  const router =  createBrowserRouter(createRoutesFromElements(

    <Route path="/" element={<RootLayout />}>

       <Route index element ={<HomePage />} />

       <Route path="projects" element={<ProjectPage />}/>


    </Route>


  ))
  
  return (
          <RouterProvider router={router} />
  )
}

export default App
