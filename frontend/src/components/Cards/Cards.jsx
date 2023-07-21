import './cards.css'
import Infos from './Infos'
import Dubai from './dubai.jpg'
import usa from './Usa.jpg'
import turkey from './turkey.jpg'
import usaf from './usaf.png'
import bba from './bba.png'
import turkf from './turkf.png'
import { Link } from "react-router-dom";

function Cards() {
    return (
        <div className="Cards">
            <div className="Infos">
                <h3 className="d">Qayerga borishni xoxlaysiz ?</h3>
                <h1 className='title'>Mashhur Yo'nalishlar</h1>
            </div>


            <div className="Card_box">
                <div className="Card">
                    <img src={Dubai} className="city_img" />
                    <div className="card_infos">
                        <h2 className='country_name'>Dubai</h2>
                        <div className="flag">
                            <img src={bba} className="flagimg" />
                            <p className="info_flag">
                            Abu Dabi
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div className="Card">
                    <img src={usa} className="city_img" />
                    <div className="card_infos">
                        <h2 className='country_name'>Ozodlik haykali</h2>
                        <div className="flag">
                            <img src={usaf} className="flagimg" />
                            <p className="info_flag">
                            Amerika
                            </p>
                        </div>
                    </div>
                </div>
                <div className="Card">
                    <img src={turkey} className="city_img" />
                    <div className="card_infos">
                        <h2 className='country_name'>Turkey</h2>
                        <div className="flag">
                            <img src={turkf} className="flagimg" />
                            <p className="info_flag">
                            Turkiya
                            </p>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Cards