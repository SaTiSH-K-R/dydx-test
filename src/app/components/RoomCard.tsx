import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import roomImage from './../../roomImagePlaceholder.jpg'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined'
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import PersonIcon from '@mui/icons-material/Person'
import ChildCareIcon from '@mui/icons-material/ChildCare'
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard'
import CancelIcon from '@mui/icons-material/Cancel'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

const RoomCard = (props: any) => {

  const { roominfo } = props
  
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          columnGap: '10px',
          marginBottom: '15px',
          marginTop: '20px'
        }}
      >
        <IconButton
          size="medium"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          style={{backgroundColor: '#499ef3'}}
        >
          <MeetingRoomIcon style={{color: '#1a1d32'}} fontSize='small'/>
        </IconButton>
        <div style={{flexGrow: 1}}>
          <div style={{
            fontSize: '15px'
          }}>
            <b>{roominfo.room[0].roomName}</b>
          </div>
          <div style={{
            fontSize: '11px',
            marginTop: '4px'
          }}>
            {`${roominfo.room[0].roomType} - ${roominfo.hotel[0].hotelName}`}
          </div>
          <div style={{
            fontSize: '11px',
            marginTop: '4px'
          }}>
            {`${roominfo.room[0].travelStartDate} - ${roominfo.room[0].travelEndDate}`}
          </div>
        </div>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <MoreVertIcon/>
        </IconButton>
      </div>
      <img src={roomImage} alt="hotel" style={{width: '100%', height: 'auto'}}/>
      <div>
        <Chip
          variant="outlined"
          style={{color: '#1b5e20', borderColor: '#1b5e20', marginRight: '10px'}}
          avatar={<CheckCircleOutlinedIcon style={{color: '#1b5e20'}} />}
          label={
            roominfo.room[0].roomStatus === 'Active' ? 'Booked'
            : roominfo.room[0].roomStatus === 'Pending' ? 'Processing'
            : 'Cancelled'
          }
        />
        <Chip
          variant='outlined'
          style={{color: '#9c27b0', borderColor: '#9c27b0'}}
          avatar={<MonetizationOnOutlinedIcon style={{color: '#9c27b0'}} />}
          label={
            Number(roominfo.room[0].remainingBalance) <= 0 ? 'Paid In Full'
            : Number(roominfo.room[0].remainingBalance) > 0 && roominfo.room[0].daysTillFinalPaymentDue <= 0
            ? `Past Due - $${roominfo.room[0].remainingBalance}` : ''
          }
        />
      </div>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='center'
        sx={{mt: '20px', mb: '10px'}}
      >
        <Stack
          direction='row'
          justifyContent='flex-start'
          alignItems='center'
        >
          <Button variant='text'>
            <EditLocationAltIcon sx={{mr: '5px'}}/> Modify
          </Button>
          <Button variant='text'>
            <MonetizationOnOutlinedIcon sx={{mr: '5px'}}/> Make Payment
          </Button>
        </Stack>
        <IconButton size="large">
          <KeyboardArrowDownIcon />
        </IconButton>
      </Stack>
      <Divider/>
      <div style={{marginTop: '20px'}}>
        <b>Guests in this room</b>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          marginTop: '30px',
          marginBottom: '20px'
        }}
      >
        {roominfo.travelers !== null && roominfo.travelers.map((traveler: any) => {
          return (
            <Chip
              key={traveler.id}
              variant='outlined'
              style={{color: '#1976d2', borderColor: '#1976d2'}}
              avatar={
                traveler.age > 13
                ? <PersonIcon style={{color: '#1976d2'}} />
                : <ChildCareIcon style={{color: '#1976d2'}} />
              }
              label={`${traveler.firstName} ${traveler.lastName}`}
            />
          )
        })}
      </div>
      <Divider/>
      <div style={{marginTop: '20px', marginBottom: '30px'}}>
        <b>Room Extras</b>
      </div>
      <Chip
        variant='outlined'
        style={{color: '#1976d2', borderColor: '#1976d2'}}
        avatar={<DepartureBoardIcon style={{color: '#1976d2'}} />}
        label='Transfer Purchased'
        sx={{mb: '20px'}}
      />
      <Divider/>
      <Chip
        variant='filled'
        // style={{color: 'red', borderColor: '#1976d2'}}
        color='error'
        avatar={<CancelIcon style={{color: 'lightgray'}} />}
        label='Cancel Room'
        sx={{mt: '30px', mb: '20px'}}
      />
    </>
  )
}

export default RoomCard