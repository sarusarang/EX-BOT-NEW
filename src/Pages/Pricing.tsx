import List from "@/Components/Price/List"
import PriceHead from "@/Components/Price/PriceHead"
import Particles from "@/Components/Price/Particles/Particles"
import PriceFoot from "@/Components/Price/PriceFoot"


export default function Pricing() {


    // Scroll to top when page is loaded
    window.scrollTo({ top: 0, behavior: 'smooth', });


    return (


        <>

            <main className="relative w-[100%] bg-white dark:bg-black overflow-x-hidden sm:pt-28 pt-28">


                {/* Enhanced background elements */}
                <div className="absolute inset-0 z-0">

                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,197,94,0.15),rgba(255,255,255,0))]"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(240,240,240,0.7))] dark:bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.7))]"></div>
                    <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-grid-white/[0.02]"></div>

                    {/* Background */}
                    <Particles
                        particleColors={['#ffffff', '#ffffff']}
                        particleCount={300}
                        particleSpread={10}
                        speed={0.1}
                        particleBaseSize={100}
                        moveParticlesOnHover={false}
                        alphaParticles={false}
                        disableRotation={false}
                    />

                </div>


                {/* Heading */}
                <PriceHead />


                {/* Price List */}
                <List />


                {/* Footer */}
                <PriceFoot />

            </main>


        </>


    )


}
