import { useState, useEffect } from 'react'
import { Grid, Container, Link } from '@mui/material'
import { useTheme } from "@mui/material/styles"
import quotes from '../data/quotes.json'

const defDoc = "https://codemarc.net/doc/gridlinks/#/"

export default function Motd() {
   const theme = useTheme()
   const [quote, setQuote] = useState({})

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length)
        setQuote(quotes[randomIndex])
    }, [])

    return (
      <Grid container spacing={0}>
         <Container sx={{ margin: "3px 12px 3px 12px"}}>
            <Link onClick={() => window.open(defDoc)} sx={{
               fontSize:"12px",
               textShadow:"none",
               textDecoration:"none",
               "&:hover": {
                  outline: "none",
                  textDecoration: "none",
                  color: theme.palette.mode === "dark" ? "lightgreen" : "green",
                  cursor: "pointer"
               }}}>
               {quote.message}<strong> - {quote.author}</strong>
            </Link>
         </Container>
      </Grid>

    )
}
