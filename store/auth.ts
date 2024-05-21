import { atom } from 'recoil';

interface AuthState {
  isAuthenticated: boolean;
  userEmail: string;
}

const authState = atom<AuthState>({
  key: 'authState',
  default: {
    isAuthenticated: false,
    userEmail: '',
  },
});

export default authState;
