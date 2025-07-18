import style from "./footer.module.css";

function Footer() {
    return <>
    <footer className={style.footer}>
        <div className="container">
            <div className="row gx-5">
                <div className = "col-lg-4">
                    <h3 className ="text-uppercase text-white text-center mb-4">location</h3>
                    <p className = "text-white fs-5">2215 John Daniel Drive
                        Clark, MO 65243</p>
                </div>
                <div className = "col-lg-4">
                    <h3 className ="text-uppercase text-white text-center mb-4">Around the Web</h3>
                    <div className = "text-white d-flex gap-5 fs-5 text-center">
                        <div className={`${style.icon} border border-white d-flex justify-content-center align-items-center rounded-circle`}>
                            <i className ="fa-brands fa-facebook-f"></i>
                        </div>
                        <div className={`${style.icon} border border-white d-flex justify-content-center align-items-center rounded-circle`}>
                            <i className ="fa-brands fa-twitter"></i>
                        </div>
                        <div className={`${style.icon} border border-white d-flex justify-content-center align-items-center rounded-circle`}>
                            <i className ="fa-brands fa-linkedin-in"></i>
                        </div>
                        <div className={`${style.icon} border border-white d-flex justify-content-center align-items-center rounded-circle`}>
                            <i className ="fa-solid fa-basketball"></i>
                        </div>
                    </div>
                </div>
                <div className = "col-lg-4">
                    <h3 className ="text-uppercase text-white text-center">About Freelancer</h3>
                    <p className = "text-white text-center fs-5">Freelance is a free to use, MIT licensed Bootstrap theme created by <a className = {`${style.start_bootstrap} text-decoration-none fs-5`} href = "#">Start's Bootstrap</a></p>
                </div>
            </div>
            
        </div>
        
    </footer>
    <p className = "p-4 mb-0 text-center bg-dark text-white">
                copyright &copy; your website
    </p>
    </>
}

export default Footer;