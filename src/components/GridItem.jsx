import PropTypes from "prop-types"
import { useTheme } from "@mui/material/styles"
import { Box, Divider,Stack } from "@mui/material"
import { Grid, Link } from "@mui/material"

CardItem.propTypes = {  dto: PropTypes.object  }

function xCardItem({ dto }) {
   const theme = useTheme()

   return (
      <Box sx={{ border: 0, margin: "5% 5% 0 5%", width: "90%", height: "80%" }}>
      {Object.prototype.hasOwnProperty.call(dto,"links") && dto.links.map((o, idx) => (
        (Object.prototype.hasOwnProperty.call(o, "name1") && o.name1.startsWith("-") ? (
            <Divider key={idx} sx={{fontSize:"9pt",marginTop:"4px",marginBottom:"1px"}}>{getDividerConent(o)}</Divider>
         ) : (
            <Grid key={idx} container>
            </Grid>
         ))
      ))}
      </Box>
   )
}


export default function CardItem({ dto }) {
   const theme = useTheme()
   const itHas = (o,k) => Object.prototype.hasOwnProperty.call(o, k)

   const blink = {
      padding: "3px",
      textDecoration: "none",
      textShadow: "0px 0px 1px #aaa",
      textTransform: "none",
      fontFamily: "mukta",
      fontSize: "8.5pt",
      fontWeight: 500,
      color: theme.palette.mode === "dark" ? "lightgreen" : dto.basecolor,
      "&:hover": {
         color: theme.palette.mode === "dark" ? "lightgreen" : "green",
         backgroundColor: theme.palette.mode === "dark" ? "rgba(128,128,128,0.5)" : "rgba(128,128,128,0.5)",
         textDecoration: "none",
         cursor: "pointer",
      }
   }

   const showRows = (o,idx) => {
      return (
      <Stack direction="row" alignItems="left" key={idx} sx={{width:"100%"}} >
      {(itHas(o, "name1") && ( <>{o.pre1}<Link sx={blink} key={idx} href={o.href1} target={o.target1 ?? "_blank"} title={o.title1 ?? o.href1}>{o.name1}</Link>{o.post1}</> ))}
      {(itHas(o, "name2") && ( <>{o.pre2}<Link sx={blink} key={idx} href={o.href2} target={o.target2 ?? "_blank"} title={o.title2 ?? o.href2}>{o.name2}</Link>{o.post2}</> ))}
      {(itHas(o, "name3") && ( <>{o.pre3}<Link sx={blink} key={idx} href={o.href3} target={o.target3 ?? "_blank"} title={o.title3 ?? o.href3}>{o.name3}</Link>{o.post3}</> ))}
      {(itHas(o, "name4") && ( <>{o.pre4}<Link sx={blink} key={idx} href={o.href4} target={o.target4 ?? "_blank"} title={o.title4 ?? o.href4}>{o.name4}</Link>{o.post4}</> ))}
      </Stack>)
   }

   return (
   <>
   {itHas(dto,"links") && dto.links.map((o,idx) => ( showRows(o,idx)))}
   </>
   )
}