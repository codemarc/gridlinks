import { useState, useEffect } from 'react'
import { Grid, Container, Link } from '@mui/material'
import { useTheme } from "@mui/material/styles"
import quotes from '../data/quotes.json'
import packageJson from "../../package.json"

export default function Motd() {
   const theme = useTheme()
   const [quote, setQuote] = useState({})

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length)
        setQuote(quotes[randomIndex])
    }, [])

    return (
      <Grid container spacing={0}>
         <Container sx={{ margin: "8px 12px 3px 12px"}}>
            <Link onClick={() => window.open(packageJson.description)} sx={{
               color: theme.palette.mode === "dark" ? "white" : "#1b2051",
               fontSize:"12px",
               textShadow:"none",
               textDecoration:"none",
               "&:hover": {
                  outline: "none",
                  textDecoration: "underline",
                  color: theme.palette.mode === "dark" ? "lightgreen" : "green",
                  backgroundColor: theme.palette.mode === "dark" ? "#555" : "white",
                  cursor: "pointer"
               }}}>
               {quote.message}<strong> - {quote.author}</strong>
            </Link>
         </Container>
      </Grid>

    )
}
