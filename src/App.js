import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core'
import ThemeConfig from './elements/theme';
import WebLayout from './layout/webLayout'
import HomePage from './containers/homepage';

const CustomTheme = createTheme(ThemeConfig);

function App() {
  return (
    <>
      <ThemeProvider theme={CustomTheme}>
        <Router>
          <WebLayout>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
            </Routes>
          </WebLayout>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
