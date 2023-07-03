import React, { createContext } from 'react';

import { GoogleOauthtype } from '../types/GoogleOauthtype';

export const UserContext = createContext<GoogleOauthtype | null>(null);