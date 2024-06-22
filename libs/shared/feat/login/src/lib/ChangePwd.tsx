import { useForm } from 'react-hook-form';
import { TextFieldElement as TextField } from 'react-hook-form-mui';

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { ChangePwdInput, useChangePwdMutation } from '@jaqua/shared/graphql';

type Props = {
  username: string;
  isInitialPwd: boolean;
};
export const ChangePwd = ({ username, isInitialPwd }: Props) => {
  const [changePwd] = useChangePwdMutation();

  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting },
  } = useForm({
    defaultValues: {
      password: '',
      confirm: '',
    },
  });

  const onSubmit = async ({
    password,
    confirm,
  }: {
    password: string;
    confirm: string;
  }) => {
    try {
      if (!username || password !== confirm) return;
      const input: ChangePwdInput = { username, password };
      await changePwd({ variables: { input } });
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <Paper sx={{ padding: 3, maxWidth: 500, margin: 'auto' }}>
      <Typography variant="h5" sx={{ mb: 1 }}>
        Neues Passwort
      </Typography>
      {isInitialPwd ? (
        <Alert color="info" sx={{ mb: 3 }}>
          Dies ist Ihr erster Login. Bitte wählen Sie ein eigenes Passwort mit
          mindestens 8 Zeichen.
        </Alert>
      ) : null}
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          name="password"
          label="Passwort"
          type="password"
          control={control}
          required
          InputProps={{
            inputProps: { min: 8 },
          }}
          sx={{ mb: 1 }}
        />
        <TextField
          fullWidth
          name="confirm"
          label="Wiederholung"
          type="password"
          control={control}
          required
          InputProps={{
            inputProps: { min: 8 },
          }}
          sx={{ mb: 2 }}
        />
        <Button
          type="submit"
          size="large"
          color="primary"
          variant="contained"
          fullWidth
          disableElevation
          disabled={!isValid || isSubmitting}
        >
          Passwort speichern
        </Button>
      </form>
    </Paper>
  );
};

export default ChangePwd;
