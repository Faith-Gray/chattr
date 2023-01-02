import CommentIcon from '@mui/icons-material/Comment';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


function Loading() {
  return (
    <center className='loading' style={{display: 'grid', placeItems: 'center', marginTop: '30vh'}}>
        <div className='logoIcon' style={{ fontSize: '40px', marginBottom: '20px'}}>
            <CommentIcon/> Chattr
        </div>
        <Box>
        <CircularProgress />
        </Box>
    </center>
  )
}

export default Loading;