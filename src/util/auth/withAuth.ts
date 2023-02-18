import {wrapper} from '@/redux/store';
import {GetServerSidePropsContext} from 'next';
import {DecodedJWT, selectToken, selectUser, User} from '@/redux/slices/auth';
import {Nullable} from '@/types';

export type WithAuthProps = {
  user: User;
  token: DecodedJWT;
};

export const withAuth = wrapper.getServerSideProps(store => async (ctx: GetServerSidePropsContext) => {
  const state = store.getState();

  const token = selectToken(state);

  if (!tokenIsValid(token)) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    };
  }

  return {
    props: {
      user: selectUser(state),
      token,
    }
  };
});

export const tokenIsValid = (token: Nullable<DecodedJWT>): boolean => {
  if (!token) {
    return false;
  }

  // Convert from ms to seconds
  const now = (new Date()).getTime() / 1000;

  return now < token.exp;
};