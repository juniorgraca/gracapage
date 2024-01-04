import Footer from "../Footer/Footer"
import InititalBanners from "../InitialBanners/InititalBanners"
import InitialNav from "../InitialNav/InitialNav"
import InitialSkills from "../InitialSkills/InitialSkills"
import NavBar from "../NavBar/NavBar"
import Projects from "../Projects/Projects"

function Home() {
  return (
    <div>
       <NavBar></NavBar>
           <InititalBanners></InititalBanners> 
          <InitialNav></InitialNav>
          <InitialSkills></InitialSkills>
           <Projects></Projects>
          <Footer></Footer> 
    </div>
  )
}

export default Home
