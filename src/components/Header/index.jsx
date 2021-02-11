import "./header.scss"


export const Header = () => {
    return (
        <div id="header">
            <div className="header">
                <div className="header__text-top">
                    <p className="top">
                        We are CODIA
                    </p>
                </div>

                <div className="header__text-bottom">
                    <p className="bottom">
                        Lorem ipsum insert slogan here
                    </p>
                </div>
    
                <button className="header__btn">Learn more</button>

                <video autoPlay loop muted className="header__video">
                    <source src="/vid/vid-2.mp4" type="video/mp4"/>
                </video>
                {/*<img src="/img/header-2.jpg" alt="" className="header__img"/>*/}
            </div>
        </div>
    )
}