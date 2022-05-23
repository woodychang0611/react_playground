import * as React from 'react';
import App from './App';
import GithubCardApp from './GithubCardApp';
import Game from './Game'
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));



export default function BasicTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Game/>
          </TabPanel>
          <TabPanel value="2">
            <GithubCardApp title='test'/>
          </TabPanel>
        </TabContext>
      </Box>
    );
  }

root.render(
    <React.StrictMode>
        <BasicTabs/>
    </React.StrictMode>
  );