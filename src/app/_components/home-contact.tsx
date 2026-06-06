'use client'

import React from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Link from 'next/link'
import { StyledButton } from '@/components/core'
import EmailIcon from '@/assets/icons/eva--email-outline.svg'
import PhoneIcon from '@/assets/icons/eva--phone-outline.svg'
import SendIcon from '@/assets/icons/picon--send.svg'

const HomeContact = () => {
  return (
    <>
      <Box
        id='home-contact'
        component='section'
        sx={{
          position: 'relative',
          backgroundColor: 'background.paper',
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
        <Box
          sx={{
            pt: {
              xs: 5,
              md: 8,
            },
            pb: {
              xs: 8,
              md: 12,
            },
            position: 'relative',
          }}
        >
          <Container
            maxWidth='md'
            sx={{
              textAlign: {
                xs: 'center',
                md: 'left',
              },
            }}
          >
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 7 }}>
                <Box
                  sx={(theme) => ({
                    mb: 3,
                    borderRadius: 1,
                    display: 'inline-block',
                    padding: '6px 14px',
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.main,
                  })}
                >
                  <Typography
                    sx={{
                      fontSize: 12,
                      letterSpacing: 1,
                      textTransform: 'uppercase',
                    }}
                    variant='h5'
                  >
                    Let&apos;s talk
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    mb: 2,
                    fontSize: {
                      xs: 22,
                      md: 28,
                      lg: 36,
                    },
                    fontWeight: '800',
                  }}
                >
                  Let&apos;s make something
                  <br /> great together.
                </Typography>
                <Typography
                  variant='h5'
                  sx={{
                    color: 'text.secondary',
                    mb: 2,
                    fontWeight: '600',
                    lineHeight: 1.8,
                  }}
                >
                  Book a free 30-minute strategy call and let&apos;s figure
                  out exactly what your business needs to grow online. No
                  commitment. No fluff. Just a real conversation about your
                  goals.
                </Typography>
              </Grid>
              <Grid
                size={{ xs: 12, md: 5 }}
                sx={{
                  position: 'relative',
                  display: 'flex',
                  alignSelf: 'flex-end',
                  justifyContent: { xs: 'center', md: 'flex-end' },
                  mb: { xs: 0, md: 4 },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: {
                      xs: -8,
                      md: -90,
                    },
                    right: 0,
                    '& img': {
                      width: {
                        xs: 'auto',
                        md: 500,
                      },
                    },
                  }}
                >
                  <Image src='/images/envelope-1.svg' alt='Footer contact' width={500} height={400} />
                </Box>
                <Box sx={{ mt: 4 }}>
                  <Link href='/contact' passHref>
                    <StyledButton
                      variant='contained'
                      size='large'
                      color='primary'
                      endIcon={
                        <Box
                          component={SendIcon}
                          sx={{ mr: 1, width: 18, height: 18 }}
                        />
                      }
                    >
                      Book My Free Call
                    </StyledButton>
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Container>

          <Container maxWidth='md'>
            <Divider sx={{ width: '100%', my: 4 }} />
          </Container>

          <Container
            maxWidth='md'
            sx={{
              textAlign: {
                xs: 'center',
                md: 'left',
              },
            }}
          >
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 7 }}>
                <Box
                  sx={(theme) => ({
                    fontWeight: '500',
                    textDecoration: 'none',
                    color: theme.palette.text.primary,
                    ':hover': {
                      color: 'primary.main',
                    },
                  })}
                  component='a'
                  href='mailto:apexdigitalventuresllc01@gmail.com'
                >
                  <>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: { xs: 'center', md: 'flex-start' },
                      }}
                    >
                      <Box
                        component={EmailIcon}
                        sx={{ mr: 1, width: 26, height: 26 }}
                      />
                      <Typography sx={{ mb: 0 }} variant='h5'>
                        apexdigitalventuresllc01@gmail.com
                      </Typography>
                    </Box>
                    <Typography
                      variant='subtitle1'
                      sx={{ color: 'text.secondary' }}
                    >
                      Response within 24 hrs
                    </Typography>
                  </>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: 5 }}>
                <Box
                  sx={(theme) => ({
                    fontWeight: '500',
                    textDecoration: 'none',
                    color: theme.palette.text.primary,
                    ':hover': {
                      color: 'primary.main',
                    },
                  })}
                  component='a'
                  href='#'
                  target={'_blank'}
                  rel='noreferrer'
                >
                  <>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: { xs: 'center', md: 'flex-start' },
                      }}
                    >
                      <Box
                        component={PhoneIcon}
                        sx={{ mr: 1, width: 25, height: 25 }}
                      />
                      <Typography sx={{ mb: 0 }} variant='h5'>
                        Las Cruces, NM 88001
                      </Typography>
                    </Box>
                    <Typography
                      variant='subtitle1'
                      sx={{ color: 'text.secondary' }}
                    >
                      Office Location
                    </Typography>
                  </>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default HomeContact
