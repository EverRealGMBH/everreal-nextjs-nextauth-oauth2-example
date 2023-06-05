import { AuthOptions } from 'next-auth';
import NextAuth from 'next-auth/next';
import * as config from '../../../config';

export const authOptions: AuthOptions = {
  providers: [
    {
      id: 'everreal',
      name: 'EverReal',
      type: 'oauth',
      version: '2.0',
      authorization: {
        url: `https://${config.subdomain}.everreal.co/accounts/dialog/authorize`,
        params: { grant_type: 'authorization_code' },
      },
      token: {
        url: `https://${config.subdomain}.everreal.co/accounts/oauth/token`,
      },
      userinfo: `https://${config.subdomain}.everreal.co/accounts/api/userinfo`,
      async profile(profile: any) {
        return {
          ...profile,
          id: profile.id.toString(),
          name: `${profile.firstName} ${profile.lastName}`,
        };
      },
      clientId: config.clientId,
      clientSecret: config.clientSecret,
    },
  ],
  pages: {
    signIn: '/',
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return `${baseUrl}/protected/client`;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
