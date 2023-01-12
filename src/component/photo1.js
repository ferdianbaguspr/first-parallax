import { Parallax } from 'react-parallax';
import Farm1 from '../img/farm1.jpg'; 
import '../style/Styles.css';

const ImageOne = () => (
    <Parallax className='image' 
        // blur={{min: -18, max: 10}} 
        bgImage={Farm1} 
        strength={400} 
        bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">a trip to Farm</span>
        </div>
    </Parallax>
);

export default ImageOne;
