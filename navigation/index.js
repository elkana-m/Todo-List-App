import React from 'react';
import { useAuthenttication } from '../utils/hooks/useAuthentication';
import UserStack from './userStack';
import AuthStack from './authStack';

export default function RootNavigation() {
    const { user } = useAuthenttication();

    return user ? <UserStack /> : <AuthStack />;
}