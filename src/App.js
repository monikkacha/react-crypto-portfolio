import React from 'react'
import Hero from './pages/Hero/Hero.js'
import Companie from './pages/Companie/Companie.js'
import Feature from './pages/Feature/Feature.js'
import Process from './pages/Process/Process.js'
import EditionalInfo from './pages/EditionalInfo/EditionalInfo.js'
import RecentBlogs from './pages/RecentBlogs/RecentBlogs.js'
import Footer from './pages/Footer/Footer.js'

const App = () => {
    return (
        <div>
            <Hero />
            <Companie />
            <Feature />
            <Process />
            <EditionalInfo />
            <RecentBlogs />
            <Footer />
        </div>
    )
}

export default App