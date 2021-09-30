import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import Carrusel from '../components/Carrusel'
import Welcome from '../components/Welcome'
import Header from '../components/Header'

const Home = () => {
    const [welcomeOn, setWelcomeOn] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setWelcomeOn(false)
        }, 1000);
    }, [1])

    if (welcomeOn) {
        return <Welcome />
    }

    return (
        <div className="themed-container Main Home PageColor">
            <div className="themed-container Home">
                <div >
                    <div className=''>
                        <div className=''>
                            <Header />
                        </div>
                        <div className='container'>
                            <Hero />
                        </div>
                        <div>
                            <div id="imgLinea" style={{ backgroundImage: `url("https://i.postimg.cc/0jBR4PT2/line.png")` }}></div>
                            <h3 className='tituloCarousel text-center fw-light fs-1'>Popular MyTineraries</h3>
                            <Carrusel />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

