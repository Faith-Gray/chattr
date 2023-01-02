import CommentIcon from '@mui/icons-material/Comment';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import 'styles.css';


function Loading() {
  return (
    <center className='loading'>
        <CommentIcon/>
        <Box>
        <CircularProgress />
        </Box>
    </center>
  )
}

export default Loading;