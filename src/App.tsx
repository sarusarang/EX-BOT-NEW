import { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"


const Landing = lazy(() => import("./Pages/Landing"))
const Header = lazy(() => import("./Components/Layout/Header"))
const Footer = lazy(() => import("./Components/Layout/Footer"))


function App() {


  return (

    <>

      <Suspense fallback={<div>Loading...</div>}>

        <Header />

        <Routes>

          <Route path="/" element={<Landing />} />


        </Routes>

        <Footer />

      </Suspense>

    </>

  )


}

export default App
