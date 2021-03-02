import "./ourWork.scss"


export const OurWork = () => {
    return (
        <div id="ourWork">
           <div className="container"> 
                <div className="container__text">
                    <h1 className="container__text-title">Lorem ipsum</h1>
                    <h3 className="container__text-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
                    <p className="container__text-text">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                <div className="container__img">
                    <img src="img/mockup.png" className="container__work_img" alt="img"/>
                </div>
           </div>
        </div>
    )
}