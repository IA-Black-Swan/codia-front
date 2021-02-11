import "./navbar.scss"


export const Navbar = () => {
    return (
        <div id="navbar">
            <div className="navbar">
                <div className="navbar__logo">
                    <div className="navbar__item">
                        logo
                    </div>
                </div>

                <div className="navbar__menu">
                    <div className="navbar__item">
                        <button className="navbar__btn">Home</button>
                    </div>

                    <div className="navbar__item">
                        <button className="navbar__btn">Our work</button>
                    </div>

                    <div className="navbar__item">
                        <button className="navbar__btn">About us</button>
                    </div>

                    <div className="navbar__item">
                        <button className="navbar__btn">Contact</button>
                    </div>

                    <div className="navbar__item">
                        <button className="navbar__btn">Log in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}