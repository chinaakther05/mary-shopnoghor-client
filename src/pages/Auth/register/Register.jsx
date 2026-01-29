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

        // store the image and get the photo url
        const formData = new FormData();
        formData.append('image', profileImg)

   const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`


      axios.post(image_API_URL, formData)
      .then(res =>{
        console.log('after image upoad', res.data.data.url)

        // update user profile
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
       <div>
            <form onSubmit={handleSubmit(handeleRegistration)}>
                 <fieldset className="fieldset">

          <label className="label">Name</label>
                    <input 
                        type="text" 
                        {...register('name', { required: true })} 
                        className="input bg-white dark:bg-gray-700 dark:text-gray-100" 
                        placeholder="Your Name" 
                    />
                    {errors.name && <p className="text-red-500 text-sm">Name is required.</p>}

                    <label className="label">Photo</label>
                    <input 
                        type="file" 
                        {...register('photo', { required: true })} 
                        className="file-input bg-white dark:bg-gray-700 dark:text-gray-100" 
                    />
                    {errors.photo && <p className="text-red-500 text-sm">Photo is required.</p>}

          <label className="label">Email</label>
          <input type="email"{...register('email',{required:true})} className="input" placeholder="Email" />
          {errors.email?.type==='required' && <p className="text-red-500 text-sm">Email is required</p>}

          {/* password fild */}
          <label className="label">Password</label>
          <input type="password" {...register('password',{required:true,
            minLength: 6,
            pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/

          })} className="input" placeholder="Password" />
            {errors.password?.type === 'required' && <p className="text-red-500 text-sm">Password is required</p>}
        {errors.password?.type === 'minLength' && <p className="text-red-500 text-sm">Password must be at least 6 characters</p>}
        {errors.password?.type === 'pattern' && (
  <p className='text-red-500'>
    must have uppercase, lowercase, number, special character and at least 6 chars
  </p>
)}


          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
         <p className='mt-2 text-center dark:text-gray-300'>
                    Already have an account? 
                    <Link state={location.state} className='text-blue-500 dark:text-blue-400 underline ml-1' to='/login'> Login</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;