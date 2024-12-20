import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand d-flex gap-2 align-items-center" href="#">
          <img src="../../../public/logo.png" style={{ 
            width:"70px", height:'70px' , objectFit:'contain'
          }} />
          <div className="name-site">
            <h6 style={{ color:"#fff" , margin:'0' }}>Weather</h6>
            <small style={{ color:"rgb(172 172 172)" , fontSize:'13px' }}>tagline goes here</small>
          </div>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">News</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Live Cameras</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Photos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default Navbar

