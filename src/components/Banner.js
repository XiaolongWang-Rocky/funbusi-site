import {Carousel} from 'antd';
import Slogan from './Slogan';
import { sloganList } from '../static-data';

function Banner() {
    return (
        <div>
            <div className="row funbusi_section" id="banner">
                <div className="col-md-12 funbusi_banner wow fadeIn animated" data-wow-duration="2s">
                    <Carousel effect='fade' autoplay dots={false}>
                        {sloganList.map(slogan=><Slogan key={slogan.id} text={slogan.content}/>)}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Banner;