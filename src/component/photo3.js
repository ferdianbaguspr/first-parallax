import { Parallax } from 'react-parallax';
import Farm3 from '../img/farm3.jpg'; 
import '../style/Styles.css';

const ImageThree = () => (
    <Parallax className='image' blur={0} bgImage={Farm3} strength={400} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <span className="img-txt">a trip to Farm</span>
        </div>
    </Parallax>
);

export default ImageThree;