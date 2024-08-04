import PropTypes from "prop-types"
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useLocation } from "react-router-dom"
import { Box, Container, Grid, Link, NativeSelect } from "@mui/material"
import { TextField, Button, Switch, Tabs, Tab } from "@mui/material"
import { styled } from "@mui/material/styles"

/**
 * The `Settings` component is responsible for rendering the settings page of the application.
 * It allows the user to update various settings, such as their social media URLs and dark mode preferences.
 * The component uses the `themeProps` object to access the current theme settings, including the dark mode state and a function to toggle it.
 * The component also provides functionality to reset the settings to their default values and to navigate back to the home page.
 */
export default function Settings({ themeProps }) {
   const { name, ls } = themeProps
   const { darkMode, setDarkMode } = themeProps
   const { gridSet, setGridSet } = themeProps
   const { gridData, setGridData } = themeProps
   const { topicsSet, setTopics } = themeProps
   const { topicData, setTopicData } = themeProps
   let topiclist = ["general"]

   const lcolor = darkMode ? "lightblue" : "#1b2051"

   const sharedStyles = {textTransform: "none",color: lcolor,fontSize: "10pt",marginTop: "6px",}
   const Div = styled("div")(({ theme }) => ({...theme.typography.button,...sharedStyles,marginTop: "-1px",}))
   const Table = styled("table")(({ theme }) => ({...theme.typography.button,width: "640px",...sharedStyles}))
   // eslint-disable-next-line no-unused-vars
   const Tr = styled("tr")(({ theme }) => (sharedStyles))
   // eslint-disable-next-line no-unused-vars
   const Td = styled("td")(({ theme }) => (sharedStyles))
   const box1 = {fontFamily: "Verdana, Geneva, Tahoma, sans-serif",margin: "12px 0px 0px 2px",}
   const button1 = {height: 18,textTransform: "none",marginLeft: "300px",textAlign: "center",marginTop: "6px",}
   const button2 = {textTransform: "none",paddingRight: 2,fontSize: "10pt",fontWeight: 600,textAlign: "center",}
   const line = { margin: "8px 0px 8px 18px", width: "240px" }

   const { gh, li, tw, ig, fb, ic, ib, ca, go, sm, ai, qo } = ls.header
   const [githubUrl, setGithubUrl] = useState(gh ?? "")
   const [linkedinUrl, setLinkedinUrl] = useState(li ?? "")
   const [twitterUrl, setTwitterUrl] = useState(tw ?? "")
   const [instaUrl, setInstaUrl] = useState(ig ?? "")
   const [facebookUrl, setFacebookUrl] = useState(fb ?? "")
   const [icloudUrl, setIcloudUrl] = useState(ic ?? "")
   const [inboxUrl, setInboxUrl] = useState(ib ?? "")
   const [calendarUrl, setCalendarUrl] = useState(ca ?? "")
   const [travelUrl, setTravelUrl] = useState(go ?? "")
   const [brokerUrl, setBrokerUrl] = useState(sm ?? "")
   const [chataiUrl, setChataiUrl] = useState(ai ?? "")
   const [motdUrl, setMotdUrl] = useState(qo ?? "")

   // Add state for active tab
   const [value, setValue] = useState(0)
   const [topicList, setTopicList] = useState([]);

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
      setChataiUrl(ai)
      setMotdUrl(qo)
   }, [gh, li, tw, ig, fb, ic, ib, ca, go, sm, ai, qo])

   const pagelink = "/settings"
   const navigate = useNavigate()
   const location = useLocation()
   const handleNav = () => {
      navigate(location.pathname === pagelink ? "/" : pagelink)
   }
   const handleCancel = () => {
      handleNav()
   }
   /**
    * Handles resetting the application state by removing the stored data from localStorage and reloading the page.
    * This function is called when the user wants to reset their settings or preferences.
    */
   const handleReset = () => {
      localStorage.removeItem(name)
      // eslint-disable-next-line no-undef
      if (typeof chrome !== "undefined" && chrome.runtime) {
         // eslint-disable-next-line no-undef
         chrome.runtime.reload()
      } else {
         window.location.reload()
      }
   }
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
      ls.header.ai = chataiUrl
      ls.header.qo = motdUrl
      localStorage.setItem(name, JSON.stringify(ls))
      handleNav()
   }
   const toggleDarkMode = () => {
      ls.dm = !darkMode
      setDarkMode(ls.dm)
      localStorage.setItem(name, JSON.stringify(ls))
   }
   const toggleGridSet = () => {
      ls.gs = !gridSet
      setGridSet(ls.gs)
      if (ls.gs) {
         setGridData(ls.gd ?? "builtin")
      }
      localStorage.setItem(name, JSON.stringify(ls))
   }
   const handleChangeGridData = (e) => {
      setGridData(e.target.value);
      ls.gd = e.target.value
      localStorage.setItem(name, JSON.stringify(ls));
   }

   const handleChange = (event, newValue) => {
      setValue(newValue)
   }

   const fetchTopics = async () => {
      try {
         const response = await axios.get(qo+'/topics/')
         const topicNames = response.data.map(item => item.topic)
         setTopicList(topicNames);

         if(!topicNames.includes(topicData)){
            setTopicData(topicNames[0])
         }
      } catch (error) {
         console.error('Error fetching topics:', error)
      }
   }
   useEffect(() => {fetchTopics()},[])

   const toggleTopicsSet = () => {
      ls.ts = !topicsSet
      setTopics(ls.ts)
      if (ls.ts) {
         setGridData(ls.td ?? "builtin")
      }
      localStorage.setItem(name, JSON.stringify(ls))
   }

   const handleChangeTopicData = (e) => {
      setTopicData(e.target.value)
      ls.td = e.target.value
      localStorage.setItem(name, JSON.stringify(ls))
   }



   const tabStyle = {
      fontSize: "10pt",
      textTransform: "none",
   }

   return (
      <Box sx={box1}>
         <Container sx={{ margin: "8px 8px 0px 0px" }}>
            <Div>
               Settings -{" "}
               <Link
                  sx={{
                     textShadow: "none",
                     textDecoration: "none",
                     color: lcolor,
                     "&:hover": { color: lcolor },
                  }}
                  href="https://chrome.google.com/webstore/developer/dashboard"
               >
                  Gridlinks
               </Link>
            </Div>
         </Container>

         {/* Tab control */}
         <Tabs
            value={value}
            onChange={handleChange}
            aria-label="settings tabs"
            sx={{
               marginLeft: "18px",
               marginRight: "18px",
            }}
         >
            <Tab label="General" sx={tabStyle} />
            <Tab label="Links" sx={tabStyle} />
         </Tabs>

         {/* Conditional rendering based on the active tab */}
         {value === 0 && (
            <Box
               sx={{
                  marginLeft: "22px",
                  height: "224px",
                  fontSize: "10pt",
                  padding: "8px",
               }}
            >
               <Table>
                  <tbody>
                  <Tr>
                     <Td sx={{ width: "112px" }}>Appearance:</Td>
                     <Td sx={{ width: "150px" }}>
                        <Switch
                           checked={darkMode}
                           onChange={toggleDarkMode}
                           inputProps={{ "aria-label": "Dark mode toggle" }}
                        />
                        dark mode
                     </Td>
                     <Td></Td>
                  </Tr>
                  <Tr>
                     <Td>Quotes:</Td>
                     <Td>
                        <Switch
                           checked={topicsSet}
                           onChange={toggleTopicsSet}
                           inputProps={{ "aria-label": "Alternate set toggle" }}
                        />
                        topics
                     </Td>
                     <Td>
                        <NativeSelect
                           disabled={!topicsSet}
                           onChange={handleChangeTopicData}
                           sx={{
                              height: "28px",
                              width: "220px",
                              fontSize: "10pt",
                              color: lcolor,
                           }}
                           defaultValue={topicData}
                           inputProps={{
                              name: "grid",
                              id: "uncontrolled-native",
                           }}
                        >
                              {topicList.map((topic, index) => (
                                 <option key={index} value={topic}>
                                    {topic}
                                 </option>
                              ))}
                        </NativeSelect>
                     </Td>
                  </Tr>
                  <Tr>
                     <Td>Gridset:</Td>
                     <Td>
                        <Switch
                           checked={gridSet}
                           onChange={toggleGridSet}
                           inputProps={{ "aria-label": "Alternate set toggle" }}
                        />
                        alternate
                     </Td>
                     <Td>
                        <NativeSelect
                           disabled={!gridSet}
                           onChange={handleChangeGridData}
                           sx={{
                              height: "28px",
                              width: "220px",
                              fontSize: "10pt",
                              color: lcolor,
                           }}
                           defaultValue={gridData}
                           inputProps={{
                              name: "grid",
                              id: "uncontrolled-native",
                           }}
                        >
                           <option value="builtin">builtin</option>
                           <option value="personal">personal</option>
                        </NativeSelect>
                     </Td>
                  </Tr>
                  </tbody>
               </Table>
            </Box>
         )}
         {value === 1 && (
            <form onSubmit={handleUpdate}>
               <TextField
                  name="github"
                  key="githubUrl"
                  label="GitHub URL"
                  size="small"
                  sx={line}
                  onChange={(event) => setGithubUrl(event.target.value)}
                  value={githubUrl}
               />

               <TextField
                  name="linkedin"
                  key="linkedinUrl"
                  label="LinkedIn URL"
                  size="small"
                  sx={line}
                  onChange={(event) => setLinkedinUrl(event.target.value)}
                  value={linkedinUrl}
               />

               <TextField
                  name="x.com"
                  key="twitterUrl"
                  label="X.com URL"
                  size="small"
                  sx={line}
                  onChange={(event) => setTwitterUrl(event.target.value)}
                  value={twitterUrl}
               />

               <TextField
                  name="instagram"
                  key="instaUrl"
                  label="Instagram URL"
                  size="small"
                  sx={line}
                  onChange={(event) => setInstaUrl(event.target.value)}
                  value={instaUrl}
               />

               <TextField
                  name="facebook"
                  key="facebookUrl"
                  label="Facebook URL"
                  size="small"
                  sx={line}
                  onChange={(event) => setFacebookUrl(event.target.value)}
                  value={facebookUrl}
               />

               <TextField
                  name="icloud"
                  key="icloudUrl"
                  label="iCloud URL"
                  size="small"
                  sx={line}
                  onChange={(event) => setIcloudUrl(event.target.value)}
                  value={icloudUrl}
               />

               <TextField
                  name="inbox"
                  key="inboxUrl"
                  label="inbox URL"
                  size="small"
                  sx={line}
                  onChange={(event) => setInboxUrl(event.target.value)}
                  value={inboxUrl}
               />

               <TextField
                  name="calendar"
                  key="calendarUrl"
                  label="Calendar URL"
                  size="small"
                  sx={line}
                  onChange={(event) => calendarUrl(event.target.value)}
                  value={calendarUrl}
               />

               <TextField
                  name="travel"
                  key="travelUrl"
                  label="Travel URL"
                  size="small"
                  sx={line}
                  onChange={(event) => setTravelUrl(event.target.value)}
                  value={travelUrl}
               />

               <TextField
                  name="brokerage"
                  key="brokerUrl"
                  label="Broker URL"
                  size="small"
                  sx={line}
                  onChange={(event) => setBrokerUrl(event.target.value)}
                  value={brokerUrl}
               />

               <TextField
                  name="genai"
                  key="chataiUrl"
                  label="AI URL"
                  size="small"
                  sx={line}
                  onChange={(event) => setChataiUrl(event.target.value)}
                  value={chataiUrl}
               />

               <TextField
                  name="motd"
                  key="motdUrl"
                  label="Message of the Day URL"
                  size="small"
                  sx={line}
                  onChange={(event) => setChataiUrl(event.target.value)}
                  value={motdUrl}
               />

            </form>
         )}
         <Grid item sx={button1}>
            <Button
               sx={{ ...button2, marginLeft: "22px" }}
               variant="contained"
               size="small"
               color="primary"
               onClick={handleReset}
            >
               Reset
            </Button>
            <Button
               sx={{ ...button2, marginLeft: "22px" }}
               variant="contained"
               size="small"
               color="primary"
               onClick={handleCancel}
            >
               Cancel
            </Button>
            <Button
               sx={{ ...button2, marginLeft: "22px" }}
               variant="contained"
               size="small"
               color="success"
               onClick={handleUpdate}
            >
               Update
            </Button>
         </Grid>
      </Box>
   );
}

Settings.propTypes = {
   themeProps: PropTypes.shape({
      name: PropTypes.string.isRequired,
      ls: PropTypes.object.isRequired,
      darkMode: PropTypes.bool.isRequired,
      setDarkMode: PropTypes.func.isRequired,
      gridSet: PropTypes.bool.isRequired,
      setGridSet: PropTypes.func.isRequired,
      grid: PropTypes.string,
      setGrid: PropTypes.func,
      gridData: PropTypes.string,
      setGridData: PropTypes.func,
      topicsSet: PropTypes.bool.isRequired,
      setTopics: PropTypes.func.isRequired,
      topicData: PropTypes.string,
      setTopicData: PropTypes.func,

   }).isRequired,
}
