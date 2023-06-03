import { useState } from 'react';
//import { useNavigate  } from 'react-router-dom';
import { Box, Button, Card, CardActions, CardContent, CircularProgress, TextField, CardMedia } from '@mui/material';
import Logo from '../../image/logomoney.png'
import * as yup from 'yup';
import { useAuthContext } from '../../shared/contexts';


const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(5),
});


export const Login: React.FC = () => {
  const { login } = useAuthContext();
  //const navigate  = useNavigate ();

  const [isLoading, setIsLoading] = useState(false);

  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  const handleSubmit = () => {
    setIsLoading(true);

    loginSchema
      .validate({ email, password }, { abortEarly: false })
      .then(dadosValidados => {
        login(dadosValidados.email, dadosValidados.password)
          .then(() => {
            setIsLoading(false);
           // navigate('/dashboard');
          });
      })
      .catch((errors: yup.ValidationError) => {
        setIsLoading(false);

        errors.inner.forEach(error => {
          if (error.path === 'email') {
            setEmailError(error.message);
          } else if (error.path === 'password') {
            setPasswordError(error.message);
          }
        });
      });
  };


 

  return (
    <Box width='100vw' height='100vh' display='flex' alignItems='center' justifyContent='center'  
     sx={{ background: 'linear-gradient(to bottom, gray, black)', }}>

      <Card >
        <CardContent sx={{backgroundColor:'#645b5b'}}>
          <Box display='flex' flexDirection='column' gap={2} width={350} height={280} alignItems='center'  >
   
          <CardMedia
          component="img"
          height={130}
          image={Logo}
          alt="logo tipo"        
        />
          

            <TextField
              fullWidth
              type='email'
              label='Email'
              variant="standard"             
              value={email}
              disabled={isLoading}
              error={!!emailError}
              helperText={emailError}
              onKeyDown={() => setEmailError('')}
              onChange={e => setEmail(e.target.value)}
              inputProps={{
                style: {
                  color: '#e4e4f4',
                },
              }}
            />

            <TextField
              fullWidth
              label='Senha'
              type='password'
              variant="standard"              
              value={password}
              disabled={isLoading}
              error={!!passwordError}
              helperText={passwordError}
              onKeyDown={() => setPasswordError('')}
              onChange={e => setPassword(e.target.value)}
              inputProps={{
                style: {
                  color: '#e4e4f4',
                },
              }}
            />
          </Box>
        <CardActions>
          <Box width='100%' display='flex' justifyContent='center' marginBottom={1}>

            <Button
              variant='contained'
              disabled={isLoading}
              onClick={handleSubmit}
              endIcon={isLoading ? <CircularProgress variant='indeterminate' color='inherit' size={20} /> : undefined}
              sx={{  background: 'linear-gradient(to right, #0000FF, #00FF00)', }}
             >
              Entrar
            </Button>

          </Box>
        </CardActions>
              </CardContent>
      </Card>
    </Box>
  );
};