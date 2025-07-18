function Navbar() {
    return <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
            <a className="navbar-brand fs-3 fw-bold text-uppercase" href="#">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active text-uppercase fw-bold" aria-current="page" href="#">portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-uppercase fw-bold" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-uppercase fw-bold" href="#">Contact</a>
                    </li>
                    
                    
                </ul>
                
            </div>
        </div>
    </nav>

}

export default Navbar;