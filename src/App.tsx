import InitialNav from "./pages/InitialNav/InitialNav";
import NavBar from "./pages/NavBar/NavBar";
import InititalBanners from "./pages/InitialBanners/InititalBanners";
import InitialSkills from "./pages/InitialSkills/InitialSkills";

function App() {
  return (
    <div>
      <div>
        <>
          <NavBar></NavBar>
          <InititalBanners></InititalBanners>
          <InitialNav></InitialNav>
          <InitialSkills></InitialSkills>
        </>
      </div>
    </div>
  );
}

export default App;
