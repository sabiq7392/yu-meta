import logo from '../images/logos/logo.png'

export default function Appbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid yu-container">
        <a className="navbar-brand" href="#home">
          <img src={logo} alt="" height={30} />
        </a>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse py-4 py-md-4 py-lg-0" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-1 gap-md-1 gap-lg-4">
            <li className="nav-item d-lg-flex d-md-grid align-items-center gap-1">
              <a className="nav-link active" aria-current="page" href="#explore">Explore</a>
              <a className="nav-link" href="#profile">Profile</a>
              <a className="nav-link" href="#login">Login</a>
            </li>
            <li className="nav-item d-flex align-items-center">
              <form className="d-flex align-items-center yu-bg-light yu-rounded w-100 px-2">
                <button className="d-grid align-items-center border-0 bg-white rounded-circle" style={{ width: 25, height: 25 }}>
                  <i className="bi bi-search" style={{ fontSize: 14 }} />
                </button>
                <input 
                  className="form-control yu-bg-light border-0" 
                  type="search" 
                  placeholder="Search" 
                  aria-label="Search" 
                />
              </form>
            </li>
            <li className="nav-item d-flex align-items-center">
              <a className="nav-link" href="#login" aria-label="profile">
                <i className="bi bi-person-fill yu-text-blue fs-1" />
              </a>
            </li>
            <li className="nav-item d-flex align-items-center">
              <a className="nav-link d-flex yu-fw-600 gap-2 yu-bg-red text-white rounded-pill py-1 px-3" href="#connect-wallet">
                <i className="bi bi-wallet2" />
                <span>Connect Wallet</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}