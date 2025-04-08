import { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "./Components/Layout/Layout"
import LoadingSpinner from "./Components/Layout/MainLoader"


const Landing = lazy(() => import("./Pages/Landing"))
const Pricing = lazy(() => import("./Pages/Pricing"))
const Terms = lazy(() => import("./Pages/Terms"))
const Privacy = lazy(() => import("./Pages/Privacy"))
const Disclaimer = lazy(() => import("./Pages/Disclaimer"))
const Refund = lazy(() => import("./Pages/Refund"))



function App() {

  return (

    <>

      <Suspense fallback={<LoadingSpinner />}>

        <Routes>

          <Route element={<Layout />} >

            <Route path="/" element={<Landing />} />

            <Route path="/Pricing" element={<Pricing />} />

            <Route path="/termsconditions" element={<Terms />} />

            <Route path="/privacypolicy" element={<Privacy />} />

            <Route path="/refundpolicy" element={<Refund />} />

            <Route path="/disclaimer" element={<Disclaimer />} />

          </Route>

        </Routes>

      </Suspense>

    </>

  )


}

export default App
