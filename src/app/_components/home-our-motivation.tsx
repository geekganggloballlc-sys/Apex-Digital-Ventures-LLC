'use client'

import React from 'react'

// components
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { SectionTitle } from '@/components/core'
import { styled, useMediaQuery, useTheme } from '@mui/material'

const CONTENT = [
  {
    value: '50+',
    description: 'Brands Grown',
    image: '/images/medal.png',
  },
  {
    value: '3M+',
    description: 'Ad Impressions Delivered',
    image: '/images/smile.png',
  },
  {
    value: '4.9★',
    description: 'Average Client Rating',
    image: '/images/success.png',
  },
]

const HomeOurMotivation = () => {
  const { breakpoints } = useTheme()
  const matchMobile = useMediaQuery(breakpoints.down('sm'))
  return (
    <Box
      id='home-motivation'
      sx={{
        pt: { xs: 8, md: 2 },
        pb: { xs: 8, md: 16, lg: 20 },
        width: '100%',
        backgroundColor: 'background.paper',
      }}
    >
      <Container>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 4 }} sx={{ pr: 4 }}>
            <Box>
              <SectionTitle>WHY APEX</SectionTitle>
              <Typography
                variant='h1'
                sx={{
                  fontSize: { xs: 20, md: 26, lg: 32 },
                  mb: 3,
                  lineHeight: 1.4,
                }}
              >
                The Agency That Treats Your Business Like Its Own.
              </Typography>
              <Typography
                sx={{
                  color: 'text.secondary',
                  fontSize: { xs: 14, md: 17 },
                  lineHeight: 1.8,
                }}
              >
                Results-obsessed. No fluff. Custom strategy, always. One agency, every channel, seamless execution.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Grid container spacing={matchMobile ? 2 : 3}>
                {CONTENT.map((item, index) => (
                  <Grid key={String(index)} size={{ xs: 6, md: 4 }}>
                    <StyledBox>
                      <StyledTitle variant='h2' sx={{ fontWeight: '800' }}>
                        {item.value}
                      </StyledTitle>
                      <StyledIcon>
                        <Image
                          src={item.image}
                          width={80}
                          height={80}
                          alt={item.description}
                        />
                      </StyledIcon>
                      <Divider sx={{ width: 36, my: 2 }} />
                      <Box>
                        <Typography>{item.description}</Typography>
                      </Box>
                    </StyledBox>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

const StyledBox = styled('div')(({ theme }) => ({
  padding: '14px 20px',
  '@media screen and (min-width: 600px)': {
    padding: '28px 32px',
  },
  boxShadow: theme.shadows[2],
  borderRadius: Number(theme.shape.borderRadius) * 2,
  backgroundColor: theme.palette.mode === 'dark' ? '#090e22' : '#D1E7FE',
  transition: theme.transitions.create(['background-color', 'transform'], {
    duration: 250,
  }),
  position: 'relative',
  '&:hover': {
    color: '#fbfbfb',
    backgroundColor:
      theme.palette.mode === 'dark' ? '#000' : theme.palette.primary.main,
    transform: 'translateY(-5px)',
  },
}))

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: 36,
  marginBottom: theme.spacing(4),
}))

const StyledIcon = styled(Typography)(({}) => ({
  width: 72,
  height: 'auto',
}))

export default HomeOurMotivation
