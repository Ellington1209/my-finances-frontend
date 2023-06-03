import { Api } from '../axios-config';


interface IAuth {
  accessToken: string;
}

const auth = async (username: string, password: string): Promise<IAuth | Error> => {
  try {
    const { data } = await Api.post('/oauth/token', { grant_type: "password",  client_id: "2",  client_secret: "0cN4ehykn0uo07mBk5x7B4dsxfUacs1wrtF3gmNn",  username, password  });

    if (data) {
      return data;
    }

    return new Error('Erro no login.');
  } catch (error) {
    console.error(error);
    return new Error((error as { message: string }).message || 'Erro no login.');
  }
};

export const AuthService = {
  auth,
};