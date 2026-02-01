import React from 'react';
import logo from '../../assets/new logo.png'
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to='/'>
         <div className='flex items-center gap-2'>
           
            <img src={logo} className='w-[68px] h-[50px]' alt="" />
             <h2 className='text-2xl font-bold text-emerald-400 items-center dark:text-emerald-300 mb-4'>মেরির স্বপ্নঘর</h2>
        </div>
        </Link>
       
    );
};

export default Logo;