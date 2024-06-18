import PropTypes from "prop-types"
import { useNavigate, useLocation } from "react-router-dom"
import {Stack, IconButton} from "@mui/material"

import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import XIcon from "@mui/icons-material/X"
import InstagramIcon from "@mui/icons-material/Instagram"
import FacebookIcon from "@mui/icons-material/Facebook"
import AppleIcon from "@mui/icons-material/Apple"
import InboxIcon from "@mui/icons-material/Inbox"
import EventIcon from "@mui/icons-material/Event"
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket"
import AccountBalanceIcon from "@mui/icons-material/AccountBalance"
import SearchIcon from "@mui/icons-material/Search"
import SettingsIcon from "@mui/icons-material/Settings"

export default function IconBar({ themeProps }) {
  const { ls } = themeProps
  const u_search = "/search"
  const u_settings = "/settings"
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <span>
      <Stack direction="row" spacing={0}>
         <IconButton title={ls.header.gh} aria-label="github" onClick={() => window.open(ls.header.gh)}><GitHubIcon /></IconButton>
         <IconButton title={ls.header.li} aria-label="linkedin" onClick={() => window.open(ls.header.li)}><LinkedInIcon /></IconButton>
         <IconButton title={ls.header.tw} aria-label="twitter" onClick={() => window.open(ls.header.tw)}><XIcon /></IconButton>
         <IconButton title={ls.header.ig} aria-label="instagram" onClick={() => window.open(ls.header.ig)}><InstagramIcon /></IconButton>
         <IconButton title={ls.header.fb} aria-label="facebook" onClick={() => window.open(ls.header.fb)}><FacebookIcon /></IconButton>
         <IconButton title={ls.header.ic} aria-label="apple" onClick={() => window.open(ls.header.ic)}><AppleIcon /></IconButton>
         <IconButton title={ls.header.ib} aria-label="inbox" onClick={() => window.open(ls.header.ib)}><InboxIcon /></IconButton>
         <IconButton title={ls.header.ca} aria-label="event" onClick={() => window.open(ls.header.ca)}><EventIcon /></IconButton>
         <IconButton title={ls.header.go} aria-label="plane" onClick={() => window.open(ls.header.go)}><AirplaneTicketIcon /></IconButton>
         <IconButton title={ls.header.sm} aria-label="stock" onClick={() => window.open(ls.header.sm)}><AccountBalanceIcon /></IconButton>

        <IconButton
          title={u_search}
          aria-label="search"
          onClick={() => {
            navigate(u_search)
          }}
        >
          <SearchIcon />
        </IconButton>

        <IconButton
          title={u_settings}
          aria-label="settings"
          onClick={() => {
            navigate(location.pathname === u_settings ? "/" : u_settings)
          }}
        >
          <SettingsIcon />
        </IconButton>
      </Stack>
    </span>
  )
}

IconBar.propTypes = {
   themeProps: PropTypes.shape({
      name: PropTypes.string.isRequired,
      ls: PropTypes.object.isRequired,
      darkMode: PropTypes.bool.isRequired,
      setDarkMode: PropTypes.func.isRequired,
   }).isRequired,
}