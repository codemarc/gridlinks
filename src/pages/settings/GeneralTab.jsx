import PropTypes from 'prop-types'
import { useState, useEffect } from "react"
import axios from "axios"
import { Box } from "@mui/material"
import { Table, Tr, Td } from "./StyledComponents"
import { Switch, NativeSelect } from "@mui/material"

const tabFrame = { marginLeft: "22px", height: "224px", fontSize: "10pt", padding: "8px"}
const nativeSelect = (lcolor) => { return {height: "28px", width: "220px", fontSize: "10pt", color: lcolor}}

export function GeneralTab({ lcolor, themeProps }) {
   const { name, ls, darkMode, setDarkMode } = themeProps
   const { topicsSet, setTopics } = themeProps
   const { topicData, setTopicData } = themeProps
   const { gridSet, setGridSet } = themeProps
   const { gridData, setGridData } = themeProps

   const [topicList, setTopicList] = useState([])

   useEffect(() => {
      axios.get(ls.header.qo + '/topics/')
      .then(response => {setTopicList(response.data.map(item => item.topic))})
      .catch(error => { console.error('Error fetching topics:', error)})
      .finally(() => { setTopicData(ls.td ?? "general") })
   }, [ls.header.qo, ls.td])//, setTopicData])

   const toggleDarkMode = () => {
      ls.dm = !darkMode
      setDarkMode(ls.dm)
      localStorage.setItem(name, JSON.stringify(ls))
   }
   const toggleTopicsSet = () => {
      ls.ts = !topicsSet
      setTopics(ls.ts)
      if (ls.ts) {
         setTopicData(ls.td ?? "general")
      }
      localStorage.setItem(name, JSON.stringify(ls))
   }
   const handleChangeTopicData = (e) => {
      setTopicData(e.target.value)
      ls.td = e.target.value
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
      setGridData(e.target.value)
      ls.gd = e.target.value
      localStorage.setItem(name, JSON.stringify(ls))
   }

   return (
      <Box sx={tabFrame}>
         <Table lcolor={lcolor}>
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
                        sx={nativeSelect(lcolor)}
                        value={topicData}
                        inputProps={{ name: "grid", id: "uncontrolled-native" }}
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
                        sx={nativeSelect(lcolor)}
                        defaultValue={gridData}
                        inputProps={{name: "grid",id: "uncontrolled-native"}}
                     >
                        <option value="builtin">builtin</option>
                        <option value="personal">personal</option>
                        <option value="test">test</option>
                     </NativeSelect>
                  </Td>
               </Tr>
            </tbody>
         </Table>
      </Box >
   )
}

GeneralTab.propTypes = {
   lcolor: PropTypes.string,
   themeProps: PropTypes.shape({
      name: PropTypes.string.isRequired,
      ls: PropTypes.object.isRequired,
      darkMode: PropTypes.bool.isRequired,
      setDarkMode: PropTypes.func.isRequired,
      gridSet: PropTypes.bool.isRequired,
      setGridSet: PropTypes.func.isRequired,
      gridData: PropTypes.string,
      setGridData: PropTypes.func,
      topicsSet: PropTypes.bool.isRequired,
      setTopics: PropTypes.func.isRequired,
      topicData: PropTypes.string,
      setTopicData: PropTypes.func,
   }).isRequired
}