import React, { use } from 'react';
import { AuthContxt } from '../contexts/AuthContext/AuthContext';

const useAuth = () => {
    const authInfo = use(AuthContxt);
    return authInfo;
};

export default useAuth;