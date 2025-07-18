import cabinImage from "../../assets/cabin.png";
import cakeImage from "../../assets/cake.png";
import circusImage from "../../assets/circus.png";
import gameImage from "../../assets/game.png";
import safeImage from "../../assets/safe.png";
import submarine from "../../assets/submarine.png";

import style from "./Portfolio.module.css";


function Portfolio() {
    return <section className = {style.portfolio} id = "portfolio">
        <h2 className =  {`${style.portfolio_title} main_title position-relative`} >portfolio</h2>
        <div className="container">
            <div className="row gx-4 gy-5">
                <div className = "col-md-12 col-lg-4">
                    <img className = "img-fluid rounded-3" src= {cabinImage} alt="" />
                </div>
                <div className = "col-md-12 col-lg-4">
                    <img className = "img-fluid rounded-3" src= {cakeImage} alt="" />
                </div>
                <div className = "col-md-12 col-lg-4">
                    <img className = "img-fluid rounded-3" src= {circusImage} alt="" />
                </div>
                <div className = "col-md-12 col-lg-4">
                    <img className = "img-fluid rounded-3" src= {gameImage} alt="" />
                </div>
                <div className = "col-md-12 col-lg-4">
                    <img className = "img-fluid rounded-3" src= {safeImage} alt="" />
                </div>
                <div className = "col-md-12 col-lg-4">
                    <img className = "img-fluid rounded-3" src= {submarine} alt="" />
                </div>
                
            </div>
        </div>
    </section>
}

export default Portfolio;