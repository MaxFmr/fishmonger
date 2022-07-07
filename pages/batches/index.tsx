import { TextField, Button, Box } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { Block } from '../custom_types/bigChainContent';

const Batches = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState([]);

  const onSubmit = async () => {
    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_SERVER + '/api/abapp',
        {
          apiEmail: email,
          apiPassword: password,
        }
      );
      setResponse(response.data);
      console.log(response.data);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          sx={{
            width: '30%',
            display: 'flex',
            flexDirection: 'column',
          }}>
          {' '}
          <h1>Lots du jour</h1>
          <TextField
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id='outlined-basic'
            label='Email Abapp'
            variant='outlined'
            sx={{
              margin: '10px',
            }}
          />
          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id='outlined-basic'
            label='Mot de passe Abapp'
            variant='outlined'
            type='password'
            sx={{
              margin: '10px',
            }}
          />
          <Button onClick={() => onSubmit()}>Envoyer</Button>
        </Box>

        <span>
          {response.length
            ? response.map((p: Block) => {
                return <div>{p.id}</div>;
              })
            : ''}
        </span>
      </Box>
    </div>
  );
};
export default Batches;
