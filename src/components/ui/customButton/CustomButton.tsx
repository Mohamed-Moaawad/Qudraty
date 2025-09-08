import './CustomButton.css';
import { CustomButtonType } from '@/types';

const CustomButton = ({text = 'text', icon = '+', color, backgroundColor, url}: CustomButtonType) => {
    return (
        <a className='custom-button flex items-center rounded-lg' href={url} style={{backgroundColor, color,}}>
            <div className="icon" style={{borderColor: color}}>
                {icon}
            </div>
            <span>{text}</span>
        </a>
    );
};

export default CustomButton;