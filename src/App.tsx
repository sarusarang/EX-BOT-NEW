import { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"
import LoadingSpinner from "./Components/Common/MainLoader"
import { SmoothCursor } from "./Components/ui/smooth-cursor"
import { Toaster } from 'sonner';

// Lazy loaded Pages
const MainLayout = lazy(() => import("./Components/Layout/MainLayout"))
const Landing = lazy(() => import("./Pages/Landing"))
const Pricing = lazy(() => import("./Pages/Pricing"))
const Terms = lazy(() => import("./Pages/Terms"))
const Privacy = lazy(() => import("./Pages/Privacy"))
const Disclaimer = lazy(() => import("./Pages/Disclaimer"))
const Refund = lazy(() => import("./Pages/Refund"))
const GdprPolicy = lazy(() => import("./Pages/GdprPolicy"))



function App() {

  return (

    <>

      <Suspense fallback={<LoadingSpinner />}>

        <Routes>

          {/* Main Layout */}
          <Route element={<MainLayout />} >

            <Route path="/" element={<Landing />} />

            <Route path="/Pricing" element={<Pricing />} />

            <Route path="/termsconditions" element={<Terms />} />

            <Route path="/customerpolicychoice" element={<GdprPolicy />} />

            <Route path="/privacypolicy" element={<Privacy />} />

            <Route path="/refundpolicy" element={<Refund />} />

            <Route path="/disclaimer" element={<Disclaimer />} />

          </Route>


        </Routes>

      </Suspense>


      {/* Smooth Cursor */}
      <SmoothCursor />


      {/* Toaster */}
      <Toaster richColors position="top-center"/>

    </>

  )


}

export default App
