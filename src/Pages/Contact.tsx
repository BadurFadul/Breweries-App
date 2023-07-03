import React, { useEffect, useState } from 'react'
import { 
  Typography,
  Container,
  Box,
  TextField,
  TextareaAutosize,
  Button
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import SendIcon from '@mui/icons-material/Send';
import { yupResolver } from '@hookform/resolvers/yup';
import ContactSchema, { ContactSchemaData } from '../Validations/ContactSchema';

import { GoogleOauthtype } from '../types/GoogleOauthtype';



const Contact = () => {

  const [user, setUser] = useState<GoogleOauthtype | null>(null);

    useEffect(() => {
        // load user data from localStorage when component mounts
        const loadedUser = localStorage.getItem('user');
        if (loadedUser) {
            setUser(JSON.parse(loadedUser));
        }
    }, []);
  
  const {handleSubmit, control, formState: { errors }} = useForm<ContactSchemaData>({
    resolver: yupResolver(ContactSchema)
  })

  const onSubmit = async (data: ContactSchemaData) => {
    console.log(data)
  }
  return (
    <Container
      sx={{display:'flex', alignContent: 'center', justifyContent: 'center', marginTop: '2rem'}}
    >
      <Box
        sx={{width: '80%', display: 'flex', flexDirection: 'column'}}
      >
        <Typography variant='h3'
          sx={{height:'5rem', width:'35rem'}}
        >
          Love to hear from you, Get in Touch 👋
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
          sx={{display: 'flex', marginTop: '5rem', flexDirection: 'column', gap: '2rem'}}
          >
            <Box
              sx={{display: 'flex', gap: '2rem', width: '100%'}}
            >
              <Controller
                control={control}
                name='name'
                render={({ field: {onChange}}) => (
                  <TextField
                    placeholder='Name'
                    label= "Name"
                    defaultValue={user?.name || ''}
                    onChange={onChange}
                    sx={{width: '100%'}}
                    />
                )}
              />
              {errors.name && (
              <Typography sx={{ color: 'red' }}>
                {errors.name.message}
              </Typography>
            )}
              <Controller
              control={control}
              name="email"
              render={({ field: { onChange } }) => (
                <TextField
                  placeholder="Badur@mail.com"
                  label="Email"
                  type="email"
                  defaultValue={user?.email || ''}
                  onChange={onChange}
                  sx={{width: '100%'}}
                />
              )}
            />
            </Box>
            <Box
              sx={{display: 'flex', gap: '2rem', width: '100%'}}
            >
              <Controller
                control={control}
                name="occupation"
                render={({ field: { onChange } }) => (
                  <TextField
                    placeholder="A student"
                    label="occupation"
                    onChange={onChange}
                    sx={{width: '100%'}}
                 />
                )}
              />
              <Controller
                control={control}
                name="work"
                render={({ field: {onChange}}) => (
                  <TextField
                    placeholder='Work'
                    label='work'
                    onChange={onChange}
                    sx={{width:'100%'}}
                  />
                )}
              />
            </Box>
            <Box
              sx={{display: 'flex', gap: '2rem', width: '100%'}}
            >
              <Controller
              control={control}
              name="Message"
              render={({ field: { onChange } }) => (
                <TextareaAutosize
                  placeholder="Let us know your message"
                  minRows={3}
                  onChange={onChange}
                  style={{ width: '100%', height: '8rem'}}
                />
              )}
            />
            </Box>
            <Box
              sx={{display: 'flex', gap: '2rem', width: '100%'}}
            >
              <Button 
                variant='contained'
                type="submit" 
                sx={{backgroundColor: '#202020', width: '14rem'}}
              >
                Just Send <SendIcon fontSize='small'/>
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
      
    </Container>
  )
}

export default Contact