import React from 'react';
import { Container, Grid, Typography, Link, IconButton, Box } from '@mui/material';
import { Facebook, Twitter, Google, Instagram, LinkedIn, GitHub, Home, Email, Phone, Print } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1c2331',
        color: 'white',
        py: 5,
        position: 'relative',
        minHeight: '45vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      
      {/* Links Section */}
      <Container sx={{ flexGrow: 1 }}>
        <Grid container spacing={4} mt={3}>
          {/* Company Name Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Company name
            </Typography>
            <Box sx={{ borderBottom: '2px solid #abf7da', width: '60px', mb: 2 }} />
            <Typography variant="body2">
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Typography>
          </Grid>

          {/* Products Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Products
            </Typography>
            <Box sx={{ borderBottom: '2px solid #abf7da', width: '60px', mb: 2 }} />
            <Link href="#" color="inherit" display="block">MDBootstrap</Link>
            <Link href="#" color="inherit" display="block">MDWordPress</Link>
            <Link href="#" color="inherit" display="block">BrandFlow</Link>
            <Link href="#" color="inherit" display="block">Bootstrap Angular</Link>
          </Grid>

          {/* Useful Links Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Useful links
            </Typography>
            <Box sx={{ borderBottom: '2px solid #abf7da', width: '60px', mb: 2 }} />
            <Link href="#" color="inherit" display="block">Your Account</Link>
            <Link href="#" color="inherit" display="block">Become an Affiliate</Link>
            <Link href="#" color="inherit" display="block">Shipping Rates</Link>
            <Link href="#" color="inherit" display="block">Help</Link>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact
            </Typography>
            <Box sx={{ borderBottom: '2px solid #abf7da', width: '60px', mb: 2 }} />
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
              <Home sx={{ mr: 1 }} /> New York, NY 10012, US
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
              <Email sx={{ mr: 1 }} /> info@example.com
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
              <Phone sx={{ mr: 1 }} /> + 01 234 567 88
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
              <Print sx={{ mr: 1 }} /> + 01 234 567 89
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Social Media Section */}
      <Box
        sx={{
          backgroundColor: '#14da8f',
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',  // Ensures vertical centering
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>  {/* New Box for centering */}
          <Typography variant="body2">Get connected with us on social networks:</Typography>
        </Box>
        <Box>
          <IconButton color="inherit">
            <Facebook />
          </IconButton>
          <IconButton color="inherit">
            <Twitter />
          </IconButton>
          <IconButton color="inherit">
            <Google />
          </IconButton>
          <IconButton color="inherit">
            <Instagram />
          </IconButton>
          <IconButton color="inherit">
            <LinkedIn />
          </IconButton>
          <IconButton color="inherit">
            <GitHub />
          </IconButton>
        </Box>
      </Box>

      {/* Copyright Section */}
      <Box
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          py: 2,
          textAlign: 'center',
          width: '100%',
          position: 'absolute',
          bottom: 0,
        }}
      >
        <Typography variant="body2">
          © 2024 Copyright: <Link href="https://mdbootstrap.com/" color="inherit">Intellisense</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
