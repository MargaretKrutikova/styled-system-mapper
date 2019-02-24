import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import styled, { theme } from './styled'

import Box from './Box'

const Header = styled.header({
  backgroundColor: '#282c34',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white'
})

const Main = styled.main({
  textAlign: 'center'
})

const Link = styled.a({
  color: '#61dafb'
})

const App: React.FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <Main>
      <Header>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Box
          bg="gray"
          py={{ xs: 'small', md: 'large' }}
          width={{ xs: '60vw', md: '30vw' }}
          my={{ xs: 'medium', md: 'xlarge' }}
        >
          <Link href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </Link>
        </Box>
      </Header>
    </Main>
  </ThemeProvider>
)
export default App
