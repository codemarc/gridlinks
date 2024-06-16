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

export default function IconBar() {
  const u_github = "https://github.com"
  const u_linkedIn = "https://www.linkedin.com"
  const u_twitter = "https://twitter.com"
  const u_instagram = "https://instagram.com"
  const u_facebook = "https://www.facebook.com"
  const u_apple = "https://www.icloud.com/"
  const u_inbox = "https://outlook.office.com/mail/"
  const u_event = "https://outlook.office.com/calendar/view/month"
  const u_plane = "https://www.google.com/travel/flights"
  const u_stock = "https://client.schwab.com/app/accounts/positions/#/"
  const u_search = "/search"
  const u_settings = "/settings"

  const navigate = useNavigate()
  const location = useLocation()

  return (
    <span>
      <Stack direction="row" spacing={0}>
        <IconButton
          title={u_github}
          aria-label="github"
          onClick={() => window.open(u_github)}
        >
          <GitHubIcon />
        </IconButton>

        <IconButton
          title={u_linkedIn}
          aria-label="linkedin"
          onClick={() => window.open(u_linkedIn)}
        >
          <LinkedInIcon />
        </IconButton>

        <IconButton
          title={u_twitter}
          aria-label="twitter"
          onClick={() => window.open(u_twitter)}
        >
          <XIcon />
        </IconButton>

        <IconButton
          title={u_instagram}
          aria-label="instagram"
          onClick={() => window.open(u_instagram)}
        >
          <InstagramIcon />
        </IconButton>

        <IconButton
          title={u_facebook}
          aria-label="facebook"
          onClick={() => window.open(u_facebook)}
        >
          <FacebookIcon />
        </IconButton>

        <IconButton
          title={u_apple}
          aria-label="apple"
          onClick={() => window.open(u_apple)}
        >
          <AppleIcon />
        </IconButton>

        <IconButton
          title={u_inbox}
          aria-label="inbox"
          onClick={() => window.open(u_inbox)}
        >
          <InboxIcon />
        </IconButton>

        <IconButton
          title={u_event}
          aria-label="event"
          onClick={() => window.open(u_event)}
        >
          <EventIcon />
        </IconButton>

        <IconButton
          title={u_plane}
          aria-label="plane"
          onClick={() => window.open(u_plane)}
        >
          <AirplaneTicketIcon />
        </IconButton>

        <IconButton
          title={u_stock}
          aria-label="stock"
          onClick={() => window.open(u_stock)}
        >
          <AccountBalanceIcon />
        </IconButton>

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
