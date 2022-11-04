import { NavLink } from "react-router-dom";

const NavBar  = () =>{
    return(
        <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" hrefLang="#" to={"/"}>
                                MERN
                        </NavLink>
                        <button className="navbar-toggler collapsed" 
                           type="button" 
                           data-bs-toggle="collapse" 
                           data-bs-target="#mobileMenu"
                            aria-controls="mobileMenu"
                             aria-expanded="false" 
                             aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon top-bar"></span>
                            <span className="navbar-toggler-icon middle-bar"></span>
                            <span className="navbar-toggler-icon bottom-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="mobileMenu">
                            <div className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink
                                     className="nav-link"
                                     activeClassName="active"
                                     to="/cruds/new">
                                        Create
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                     className="nav-link"
                                     activeClassName="active"
                                     to="/cruds">
                                        CRUDs
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                     className="nav-link"
                                     activeClassName="active"
                                     to="/cruds/grid-view">
                                        Grid View
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                     className="nav-link"
                                     activeClassName="active"
                                     to="/cruds/list-view">
                                        List View
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                     className="nav-link"
                                     activeClassName="active"
                                     to="/cruds/table-view">
                                        Table View
                                    </NavLink>
                                </li>
                            </div>
                        </div>
                    </div>
                </nav>
        </>
    )}

    export default NavBar;