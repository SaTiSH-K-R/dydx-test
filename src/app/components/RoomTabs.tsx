import * as React from 'react';
import { Box, Tab, Typography } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import { useAppSelector } from '../hooks';
import RoomCard from './RoomCard';
import { TabPanel } from '@mui/lab';

export default function RoomTabs() {

  const { roomsInfo } = useAppSelector(state => state.rooms)
  const [value, setValue] = React.useState('0');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  if(roomsInfo === null) {
    return (
      <Typography>Please wait...</Typography>
    )
  } else if(roomsInfo.length === 1 && roomsInfo[0].room[0].id === '') {
    return (
      <Typography>No Rooms!!!</Typography>
    )
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            aria-label="room-tabs"
            variant={roomsInfo.length > 2 ? 'scrollable' : 'fullWidth'}
            scrollButtons={true}
            allowScrollButtonsMobile={true}
          >
            {roomsInfo.map((roominfo, index) => {
              return (
                <Tab label={`Room ${index + 1}`} value={index.toString()} key={roominfo.room[0].id} />
              )
            })}
          </TabList>
        </Box>
        {roomsInfo.map((roominfo, index) => {
          return (
            <TabPanel
              value={index.toString()}
              key={roominfo.room[0].id}
              sx={{ px: 0, pt: 0 }}
            >
              <RoomCard roominfo={roominfo} key={index}/>
            </TabPanel>
          )
        })}
      </TabContext>
    </Box>
  );
}