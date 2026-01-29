import React from 'react';
import { useForm } from 'react-hook-form';

import { Link } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const {registerUser} = useAuth();

    const handeleRegistration = (data) =>{
       console.log('after register',data);
       registerUser(data.email, data.password)
       .then(result =>{
        console.log(result.user)
       })
       .catch(error =>{
        console.log(error)
       })
    }

    return (
       <div>
            <form onSubmit={handleSubmit(handeleRegistration)}>
                 <fieldset className="fieldset">
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