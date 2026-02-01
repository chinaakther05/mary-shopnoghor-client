import React from 'react';
import { useForm } from 'react-hook-form';

import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';

const Register = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const {registerUser, updateUserProfile} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handeleRegistration = (data) =>{
       console.log('after register',data.photo[0]);
       const profileImg = data.photo[0];

       registerUser(data.email, data.password)
       .then(result =>{
        console.log(result.user)

        const formData = new FormData();
        formData.append('image', profileImg)

        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`

        axios.post(image_API_URL, formData)
        .then(res =>{
            console.log('after image upoad', res.data.data.url)

            const userProfile = {
              displayName : data.name,
              photoURL : res.data.data.url
            }

            updateUserProfile(userProfile)
            .then(() =>{
              console.log('user profile updated done')
              navigate(location.state || '/')
            })
            .catch(error => console.log(error))
        })
       })
       .catch(error =>{
        console.log(error)
       })
    }

    return (
        <div className="card mt-8 w-full max-w-sm mx-auto shrink-0 shadow-2xl dark:bg-gray-800 text-gray-900 dark:text-gray-100">

<h3 className='text-2xl mt-3 text-center'>Welcome to Mary ShopnoGhor</h3>
            <p className='text-center mb-4'>Please register</p>

         
            <form 
              onSubmit={handleSubmit(handeleRegistration)} 
              className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
            >
                 <fieldset className="fieldset">

          <label className="label dark:text-gray-300">Name</label>
          <input 
            type="text" 
            {...register('name', { required: true })} 
            className="input bg-white dark:bg-gray-700 dark:text-gray-100" 
            placeholder="Your Name" 
          />
          {errors.name && <p className="text-red-500 text-sm">Name is required.</p>}

          <label className="label dark:text-gray-300">Photo</label>
          <input 
            type="file" 
            {...register('photo', { required: true })} 
            className="file-input bg-white dark:bg-gray-700 dark:text-gray-100" 
          />
          {errors.photo && <p className="text-red-500 text-sm">Photo is required.</p>}

          <label className="label dark:text-gray-300">Email</label>
          <input 
            type="email"
            {...register('email',{required:true})} 
            className="input bg-white dark:bg-gray-700 dark:text-gray-100" 
            placeholder="Email" 
          />
          {errors.email?.type==='required' && <p className="text-red-500 text-sm">Email is required</p>}

          {/* password field */}
          <label className="label dark:text-gray-300">Password</label>
          <input 
            type="password" 
            {...register('password',{
              required:true,
              minLength: 6,
              pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/
            })} 
            className="input bg-white dark:bg-gray-700 dark:text-gray-100" 
            placeholder="Password" 
          />

          {errors.password?.type === 'required' && <p className="text-red-500 text-sm">Password is required</p>}
          {errors.password?.type === 'minLength' && <p className="text-red-500 text-sm">Password must be at least 6 characters</p>}
          {errors.password?.type === 'pattern' && (
            <p className='text-red-500 text-sm'>
              must have uppercase, lowercase, number, special character and at least 6 chars
            </p>
          )}

          <div>
            <a className="link link-hover dark:text-gray-300">Forgot password?</a>
          </div>

          <button className="btn btn-neutral mt-4 w-full">
            Register
          </button>

        </fieldset>

        <p className='mt-4 text-center text-gray-600 dark:text-gray-300'>
            Already have an account?
            <Link 
              state={location.state} 
              className='text-blue-500 dark:text-blue-400 underline ml-1' 
              to='/login'
            >
              Login
            </Link>
        </p>
      </form>
    </div>
    );
};

export default Register;
