import {Link} from "react-router-dom";
import style from './LandingPage.module.css';

export default function LandingPage(){

    return (
        <div className={style.background} >

            <div className={style.contains}>

                <a className={style.Link} href="https://www.linkedin.com/in/maximiliano-g-b37459179/">
                        <div className={style.LinkText} >
                            By Maximiliano Grosman
                        </div>
                </a>
                
                <div className={style.button} >
                    <Link className={style.Link} to="/home">
                        <div >
                            Home Page
                        </div>
                    </Link>
                </div>
            
            </div>

        </div>
    );
};