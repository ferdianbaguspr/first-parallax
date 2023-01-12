import { Parallax } from 'react-parallax';
import Farm2 from '../img/farm2.jpg'; 
import '../style/Styles.css';

const ImageTwo = () => (
    <Parallax className='image' blur={0} bgImage={Farm2} strength={400} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">a trip to Farm</span>
        </div>
    </Parallax>
);

export default ImageTwo;