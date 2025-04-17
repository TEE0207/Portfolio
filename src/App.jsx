// import { createBrowserRouter , createRoutesFromElements ,RouterProvider ,Route, Routes} from "react-router-dom"

import {Route, Routes} from "react-router-dom"
// import RootLayout from "./RootLayout"
import HomePage from "./Home/HomePage"
import ProjectPage from "./Project/ProjectPage"
import ProjectLayout from "./ProjectLayout"
import HomeLayout from "./HomeLayout"


function App() {
  
  // const router =  createBrowserRouter(createRoutesFromElements(

  //   <Route path="/" element={<RootLayout />}>

  //      <Route index element ={<HomePage />} />

  //      <Route path="projects" element={<ProjectPage />}/>


  //   </Route>

  // ))
  
  return (
          // <RouterProvider router={router} />

          <Routes>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
      
          <Route element={<ProjectLayout />}>
            <Route path="/projects" element={<ProjectPage />} />
          </Route>
        </Routes>
      
  )
}

export default App
