import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import Aurora from "../Price/Aurora/Aurora"

export default function Layout() {


    return (


        <>

            <main className="relative min-h-screen w-full flex flex-col">


                {/* Top Aurora */}
                <div className="absolute top-0 left-0 w-full h-[20vh] z-1 dark:block hidden">

                    <Aurora
                        colorStops={["#166534", "#15803D", "#16A34A"]}

                        blend={0.5}
                        amplitude={1.0}
                        speed={0.5}
                    />

                </div>


                {/* Header */}
                <Header />


                {/* Main Content */}
                <div className="flex-1">

                    <Outlet />

                </div>


                {/* Footer */}
                <Footer />

            </main>

        </>



    )




}
