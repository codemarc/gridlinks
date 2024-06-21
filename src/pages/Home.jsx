
import { styled } from '@mui/material/styles';
import { Box, Paper, Grid } from "@mui/material"
import Motd from "../components/Motd"
import GridCard from "../components/GridCard"

import { default as data } from "../data/Data"
// console.log("data", data)
const keys = Object.keys(data)

const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
   ...theme.typography.body2,
   padding: theme.spacing(0),
   color: theme.palette.text.secondary,
 }));

export default function Home() {
  return (
   <>
   <Motd />
   <Box sx={{ flexGrow: 1, p:1, marginTop:"-2px", maxWidth:"900px"}}>
      <Grid container spacing={0}>
      {keys.map((o, ndx) => (
         <Grid item xs={3} key={ndx}>
            <Item><GridCard dto={data[o]} key={ndx}/></Item>
         </Grid>
         ))}
      </Grid>
    </Box>
   </>
 )
}