import style from "./About.module.css";


function About() {
    return <section className = {style.about}>
        
            <h2 className=  {`${style.about_title} main_title position-relative`}>About</h2>
            <div className = {style.about_container}>
                <div className="row">
                    <div className="col-lg-6">
                        <p className = "text-white fs-5">
                            Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <p className = "text-white fs-5">
                            Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                </div>
            <div className={`${style.free_download} rounded-3 bg-transparent border border border-white text-white fs-5`}>Free Download</div>
        </div>
    </section>
}

export default About;