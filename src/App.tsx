import InitialNav from "./pages/InitialNav/InitialNav";
import NavBar from "./pages/NavBar/NavBar";
import InititalBanners from "./pages/InitialBanners/InititalBanners";
import InitialSkills from "./pages/InitialSkills/InitialSkills";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <div>
      <div>
        <>
          <NavBar></NavBar>
          <InititalBanners></InititalBanners>
          <InitialNav></InitialNav>
          <InitialSkills></InitialSkills>
          <Footer></Footer>
        </>
      </div>
    </div>
  );
}

export default App;
