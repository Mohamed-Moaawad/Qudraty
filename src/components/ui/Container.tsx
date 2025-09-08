import { CustomContainerType } from '@/types';
import React from 'react'

const Container = ({children}: CustomContainerType) => {
    return <div className='px-5 md:px-10 lg:px-24'>{children}</div>
};
export default Container;