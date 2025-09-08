import { TextTitleType } from '@/types';
import './TextTitle.css';

const TextTitle = ({title, description}: TextTitleType) => {
    return (
        <div className='text-title w-full flex flex-col items-center my-20 '>
            <h4>{title}</h4>
            <p className='mt-5 text-center'>{description}</p>
        </div>
    );
};

export default TextTitle;