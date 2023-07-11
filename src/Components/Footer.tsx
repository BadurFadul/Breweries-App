import React from 'react'
import {
    Box,
    IconButton,
} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignContent={'center'}
        alignItems={'center'}
        sx={{height: '10rem', backgroundColor: '#EEEEEE', padding: '2rem'}}
    >
        <Box display={'flex'} flexDirection={'column'} gap={'1rem'}>
            <Box>
                <img src="https://uploads.divjoy.com/logo.svg" alt="" style={{height: '2.5rem'}} />
            </Box>
            <Box>
                {`copyright: ©${new Date().getFullYear()} Badur Fadul`}
            </Box>
        </Box>
        <Box display={'flex'} flexDirection={'column'} gap={'1rem'}>
            <Box display={'flex'} >
                <Box>
                    <IconButton aria-label="github" component="a" href="https://github.com/BadurFadul" target='_blank'>
                        <GitHubIcon fontSize='large'/>
                    </IconButton>
                </Box>
                <Box>
                    <IconButton aria-label="email" component="a" href="mailto:badoryousif.by@gmail.com" target='_blank'>
                        <EmailIcon fontSize='large' />
                    </IconButton>
                </Box>
                <Box>
                    <IconButton aria-label="linkedin" component="a" href="https://www.linkedin.com/in/badreldin-fadul-821bb512b/" target='_blank'>
                        <LinkedInIcon  fontSize='large'/>
                    </IconButton>
                </Box>
            </Box>
            <Box display={'flex'} gap={'1rem'}>
                <Box>
                    <Link style={{textDecoration: 'none', color: 'black'}} to={'/companies'}>companies</Link>
                </Box>
                <Box>
                <Link style={{textDecoration: 'none', color: 'black'}} to={'/contact'}>companies</Link>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Footer