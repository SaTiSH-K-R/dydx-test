import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import Header from './app/components/Header';
import RoomCard from './app/components/RoomCard';
import RoomTabs from './app/components/RoomTabs';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { getRoomsInfo } from './app/redux/roomSlice';

function App() {

  const { roomsInfo } = useAppSelector(state => state.rooms)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getRoomsInfo())
  }, [dispatch])
  
  return (
    <>
      <Header />
      <Container maxWidth='sm'>
        {roomsInfo !== null && roomsInfo.length === 1 && roomsInfo[0].room[0].id !== ''
          ? <RoomCard roominfo={roomsInfo[0]} />
          : <RoomTabs />
        }
      </Container> 
    </>
  );
}

export default App;
