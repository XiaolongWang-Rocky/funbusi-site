import logo from '../images/logo.png';

function Header() {
    return (
        <header className="row funbusi_header">
            <div className="col-md-6">
                <a id="home" href="/#banner" className="scroll"><img alt="FUNBUSI Logo" src={logo} /></a>
            </div>
            <div className="col-md-6">
                <ul className="nav nav-pills funbusi_nav">
                    <li className="nav-item funbusi_nav_btn">
                        <a className="nav-link scroll" href="/#services_sec">Services</a>
                    </li>
                    <li className="nav-item funbusi_nav_btn">
                        <a className="nav-link scroll" href="/#about_us">About Us</a>
                    </li>
                    <li className="nav-item funbusi_nav_btn">
                        <a className="nav-link scroll" href="/#contact_us">Contact Us</a>
                    </li>
                    <li className="nav-item dropdown ml-md-auto">
                        <a className="nav-link dropdown-toggle funbusi_menu_drop" href="http://example.com"
                            id="navbarDropdownMenuLink" data-toggle="dropdown"></a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item scroll" href="#services_sec">Services</a>
                            <a className="dropdown-item scroll" href="#about_us">About Us</a>
                            <a className="dropdown-item scroll" href="#contact_us">Contact Us</a>
                        </div>
                    </li>
                </ul>
            </div>
	    </header>
    );
}

export default Header;