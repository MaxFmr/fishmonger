import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

const Batches = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState(null);

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
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1>Lots du jour</h1>
      <TextField
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        id='outlined-basic'
        label='Email Abapp'
        variant='outlined'
      />
      <TextField
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        id='outlined-basic'
        label='Mot de passe Abapp'
        variant='outlined'
        type='password'
      />

      <span>{response ? 'Go check your Db !' : null}</span>
      <Button onClick={() => onSubmit()}>Envoyer</Button>
    </div>
  );
};
export default Batches;
