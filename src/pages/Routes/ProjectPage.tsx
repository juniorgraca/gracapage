import NavBar from "../NavBar/NavBar"
import Projects from "../Projects/Projects"
import Footer from "../Footer/Footer"
import InititalBanners from "../InitialBanners/InititalBanners"

function ProjectsPage() {
  return (
    <div>
         <NavBar></NavBar>
         <InititalBanners></InititalBanners>
           <Projects></Projects>
          <Footer></Footer> 
    </div>
  )
}

export default ProjectsPage
