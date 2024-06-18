import PropTypes from "prop-types"
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom"
import { Box, Container, Grid } from "@mui/material"
import { TextField, Button, Switch } from "@mui/material"
import { fontSize, textAlign } from "@mui/system"
import { ChromeReaderModeOutlined } from "@mui/icons-material"


export default function Settings({themeProps}) {
   const { name, ls, darkMode, setDarkMode } = themeProps
   const {gh,li,tw,ig,fb,ic,ib,ca,go,sm} = ls.header

   const [githubUrl, setGithubUrl] = useState(gh ?? '')
   const [linkedinUrl, setLinkedinUrl] = useState(li ??'')
   const [twitterUrl, setTwitterUrl] = useState(tw ?? '')
   const [instaUrl, setInstaUrl] = useState(ig ?? '')
   const [facebookUrl, setFacebookUrl] = useState(fb ?? '')
   const [icloudUrl, setIcloudUrl] = useState(ic ?? '')
   const [inboxUrl, setInboxUrl] = useState(ib ?? '')
   const [calendarUrl, setCalendarUrl] = useState(ca ?? '')
   const [travelUrl, setTravelUrl] = useState(go ?? '')
   const [brokerUrl, setBrokerUrl] = useState(sm ?? '')

   useEffect(() => {
      setGithubUrl(gh)
      setLinkedinUrl(li)
      setTwitterUrl(tw)
      setInstaUrl(ig)
      setFacebookUrl(fb)
      setIcloudUrl(ic)
      setInboxUrl(ib)
      setCalendarUrl(ca)
      setTravelUrl(go)
      setBrokerUrl(sm)
    }, [gh, li, tw, ig, fb, ic, ib, ca, go, sm])


    const box1 = { "fontFamily": "Verdana, Geneva, Tahoma, sans-serif", "margin": "12px 0px 0px 2px" }
    const button1 = { height: 26, textTransform: "none", marginLeft: "300px", textAlign:"center", marginTop: "6px" }
    const button2 = { textTransform: "none", paddingRight: 2, fontSize: "10pt", fontWeight:600, textAlign: "center"}
    const line = {margin:"8px 0px 8px 18px",width:"240px"}
    const lline = {margin:"8px 0px 8px 18px",width:"240px"}


    const pagelink = "/settings"
    const navigate = useNavigate()
    const location = useLocation()
    const handleNav = () => { navigate(location.pathname === pagelink ? "/" : pagelink) }
    const handleCancel = () => { handleNav() }
    const handleReset = () => { localStorage.removeItem(name);chrome.runtime.reload() }

    const handleUpdate = () => {
      ls.header.gh = githubUrl
      ls.header.li = linkedinUrl
      ls.header.tw = twitterUrl
      ls.header.ig = instaUrl
      ls.header.fb = facebookUrl
      ls.header.ic = icloudUrl
      ls.header.ib = inboxUrl
      ls.header.ca = calendarUrl
      ls.header.go = travelUrl
      ls.header.sm = brokerUrl
      localStorage.setItem(name, JSON.stringify(ls))
      handleNav() }

       const toggleDarkMode = () => {
         ls.dm = !darkMode
         setDarkMode(ls.dm)
         localStorage.setItem(name,JSON.stringify(ls))
      }


    return (
      <Box sx={box1}>
         <Container sx={{ margin: "18px 22px 18px 22px" }}>
            <div>Settings - Gridlinks </div>
         </Container>
         <form onSubmit={handleUpdate}>

            <TextField name="github" key="githubUrl" label="GitHub URL" size="small" sx={line}
               onChange={(event) => setGithubUrl(event.target.value)} value={githubUrl} />

            <TextField name="linkedin" key="linkedinUrl" label="LinkedIn URL" size="small" sx={line}
               onChange={(event) => setLinkedinUrl(event.target.value)} value={linkedinUrl} />

            <TextField name="x.com" key="twitterUrl" label="X.com URL" size="small" sx={line}
               onChange={(event) => setTwitterUrl(event.target.value)} value={twitterUrl} />

            <TextField name="instagram" key="instaUrl" label="Instagram URL" size="small" sx={line}
               onChange={(event) => setInstaUrl(event.target.value)} value={instaUrl} />

            <TextField name="facebook" key="facebookUrl" label="Facebook URL" size="small" sx={line}
               onChange={(event) => setFacebookUrl(event.target.value)} value={facebookUrl} />

            <TextField name="icloud" key="icloudUrl" label="iCloud URL" size="small" sx={line}
               onChange={(event) => setIcloudUrl(event.target.value)} value={icloudUrl} />

            <TextField name="inbox" key="inboxUrl" label="inbox URL" size="small" sx={line}
               onChange={(event) => setInboxUrl(event.target.value)} value={inboxUrl} />

            <TextField name="calendar" key="calendarUrl" label="Calendar URL" size="small" sx={line}
               onChange={(event) => calendarUrl(event.target.value)} value={calendarUrl} />

            <TextField name="travel" key="travelUrl" label="Travel URL" size="small" sx={line}
               onChange={(event) => setTravelUrl(event.target.value)} value={travelUrl} />

            <TextField name="brokerage" key="brokerUrl" label="Broker URL" size="small" sx={lline}
               onChange={(event) => setBrokerUrl(event.target.value)} value={brokerUrl} />

         <Grid item sx={button1}>
            <Switch sx={{...button2, marginLeft:"22px"}}  checked={darkMode} onChange={toggleDarkMode} inputProps={{ 'aria-label': 'Dark mode toggle' }}/>
            dark mode
            <Button sx={{...button2, marginLeft:"22px"}} variant="contained" size="small" color="primary" onClick={handleReset}>Reset</Button>
            <Button sx={{...button2, marginLeft:"22px"}} variant="contained" size="small" color="primary" onClick={handleCancel}>Cancel</Button>
            <Button sx={{...button2, marginLeft:"22px"}} variant="contained" size="small" color="success" onClick={handleUpdate}>Update</Button>
         </Grid>

      </form>
   </Box>
       )
}

Settings.propTypes = {
   themeProps: PropTypes.shape({
      name: PropTypes.string.isRequired,
      ls: PropTypes.object.isRequired,
      darkMode: PropTypes.bool.isRequired,
      setDarkMode: PropTypes.func.isRequired,
   }).isRequired,
}
