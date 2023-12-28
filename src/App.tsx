import InitialNav from "./pages/InitialNav/InitialNav";

import InititalBanners from "./pages/InitialBanners/InititalBanners";
import InitialSkills from "./pages/InitialSkills/InitialSkills";
import NavBar from "./pages/NavBar/NavBar";
import Footer from "./pages/Footer/Footer";
import Projects from "./pages/Projects/Projects";


function App() {
  return (
    <div>
      <div>
        <>
             <NavBar></NavBar>
           <InititalBanners></InititalBanners> 
          <InitialNav></InitialNav>
          <InitialSkills></InitialSkills>
    <Projects></Projects>
          <Footer></Footer> 
        </>
      </div>
    </div>
  );
}

export default App;
