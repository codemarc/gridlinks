import PropTypes from "prop-types"
import { useTheme } from "@mui/material/styles"
import { Link, Divider,Stack } from "@mui/material"
import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  textTransform: 'none',
  marginTop: "-1px",
  color: theme.palette.mode === "dark" ? "lightblue" : "green",
  fontSize: "8pt",
}))

CardItem.propTypes = {  dto: PropTypes.object  }

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
      color: theme.palette.mode === "dark" ? "rgb(162,239,169)" : dto.basecolor,
      "&:hover": {
         color: theme.palette.mode === "dark" ? "rgb(76,249,77)" : "green",
         backgroundColor: theme.palette.mode === "dark" ? "rgba(128,128,128,0.5)" : "rgba(128,128,128,0.5)",
         textDecoration: "none",
         cursor: "pointer",
      }
   }

 const showRows = (o, idx) => {
  return (
    <Stack direction="row" alignItems="left" key={idx} sx={{ width: "100%" }}>
      {itHas(o, "label") && o.label.startsWith("-" ) ? (
        <Divider key={idx} sx={{ fontSize: "8.5pt", marginTop: "3px", marginBottom: "6px",height:"1px", backgroundColor:"#ccc" }}>
         ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ</Divider>
      ) : (
        <>
          {itHas(o, "name1") &&
            o.name1.startsWith("-") ? ( <>
               <Divider key={idx} sx={{ fontSize: "8.5pt", marginTop: "9px", marginBottom: "1ßpx",height:"1px", backgroundColor:"#ccc" }}>
         ㅤㅤㅤㅤㅤ</Divider>
         <Link sx={blink} key={idx + "2"} href={o.href1} target={o.target1 ?? "_blank"} title={o.title1 ?? o.href1}>
               ㅤ{o.name1.substring(1)}ㅤ
              </Link>

               <Divider key={idx} sx={{ fontSize: "8.5pt", marginTop: "9px", marginBottom: "1px",height:"1px", backgroundColor:"#ccc" }}>
         ㅤㅤㅤㅤㅤ</Divider></>) :
          (
            <>
              <Div>{o.pre1}</Div>
              <Link sx={blink} key={idx} href={o.href1} target={o.target1 ?? "_blank"} title={o.title1 ?? o.href1}>
                {o.name1}
              </Link>
              <Div>{o.post1}</Div>
            </>
          )}
          {itHas(o, "name2") && (
            <>
              <Div>{o.pre2}</Div>
              <Link sx={blink} key={idx + "2"} href={o.href2} target={o.target2 ?? "_blank"} title={o.title2 ?? o.href2}>
                {o.name2}
              </Link>
              <Div>{o.post2}</Div>
            </>
          )}
          {itHas(o, "name3") && (
            <>
              <Div>{o.pre3}</Div>
              <Link sx={blink} key={idx + "3"} href={o.href3} target={o.target3 ?? "_blank"} title={o.title3 ?? o.href3}>
                {o.name3}
              </Link>
              <Div>{o.post3}</Div>
            </>
          )}
          {itHas(o, "name4") && (
            <>
              <Div>{o.pre4}</Div>
              <Link sx={blink} key={idx + "4"} href={o.href4} target={o.target4 ?? "_blank"} title={o.title4 ?? o.href4}>
                {o.name4}
              </Link>
              <Div>{o.post4}</Div>
            </>
          )}
        </>
      )}
    </Stack>
  );
};
   return (
   <>
   {itHas(dto,"links") && dto.links.map((o,idx) => ( showRows(o,idx)))}
   </>
   )
}