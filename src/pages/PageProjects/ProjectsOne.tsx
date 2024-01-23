 import ImgHeader from "/Projectimg/mandalorian1.png";
import ImgBoody from "/Projectimg/mandalorian2.png";
 import ImgFooter from "/Projectimg/mandalorian3.png";
import Footer from "../Footer/Footer"

import {
 NavBarContent,Img1, Img2, Img3

  
} from "../../components/ProjectOne.style";
function ProjectsOne() {
  return (
<>
<NavBarContent>
    <Img1 src={ImgHeader}/>
    <Img2 src={ImgBoody}/>
    <Img3 src={ImgFooter}/>
</NavBarContent>
<Footer></Footer>
     </>

  )
}

export default ProjectsOne
