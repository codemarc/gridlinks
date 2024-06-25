/**
 * Imports the PropTypes library, which provides type-checking capabilities for React components.
 * This allows developers to define the expected types of the props that a component receives,
 * and React will warn if the component is used with props of the wrong type.
 */
import PropTypes from "prop-types"

/**
 * Imports the `useNavigate` and `useLocation` hooks from the `react-router-dom` library.
 * These hooks provide access to the current navigation state and location within a React Router-based application.
 * `useNavigate` allows programmatic navigation, while `useLocation` provides information about the current URL.
 */
import { useNavigate, useLocation } from "react-router-dom";

/**
 * Imports the `Stack`, `IconButton`, and `SvgIcon` components from the `@mui/material` library.
 * These components are used to create the layout and styling of the IconBar component.
 * - `Stack` is used to create a horizontal layout of the icon buttons.
 * - `IconButton` is used to create clickable icon buttons.
 * - `SvgIcon` is used to render custom SVG icons.
 */
import { Stack, IconButton, SvgIcon } from "@mui/material";


/**
 * Imports various Material-UI icons that are used in the IconBar component.
 * These icons are used to represent different social media and application links.
 */
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import InboxIcon from "@mui/icons-material/Inbox";
import EventIcon from "@mui/icons-material/Event";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";


/**
 * The `IconBar` component renders a horizontal stack of icon buttons that provide links to various social media and application pages.
 * The icons and links are configured through the `themeProps` object, which is passed as a prop to the component.
 * The component also includes two additional icon buttons for navigating to the search and settings pages.
 * The `useNavigate` and `useLocation` hooks from `react-router-dom` are used to handle the navigation functionality.
 */
export default function IconBar({ themeProps }) {
   const { ls } = themeProps;
   const u_search = "/search";
   const u_settings = "/settings";
   const navigate = useNavigate();
   const location = useLocation();

   return (
      <span>
         <Stack direction="row" spacing={0}>

            <IconButton title={ls.header.gh} aria-label="github" onClick={() => window.open(ls.header.gh)} >
               <GitHubIcon />
            </IconButton>

            <IconButton title={ls.header.li} aria-label="linkedin" onClick={() => window.open(ls.header.li)} >
               <LinkedInIcon />
            </IconButton>

            <IconButton
               title={ls.header.tw}
               aria-label="twitter"
               onClick={() => window.open(ls.header.tw)}
            >
               <XIcon />
            </IconButton>
            <IconButton
               title={ls.header.ig}
               aria-label="instagram"
               onClick={() => window.open(ls.header.ig)}
            >
               <InstagramIcon />
            </IconButton>
            <IconButton
               title={ls.header.fb}
               aria-label="facebook"
               onClick={() => window.open(ls.header.fb)}
            >
               <FacebookIcon />
            </IconButton>
            <IconButton
               title={ls.header.ic}
               aria-label="apple"
               onClick={() => window.open(ls.header.ic)}
            >
               <AppleIcon />
            </IconButton>
            <IconButton
               title={ls.header.ib}
               aria-label="inbox"
               onClick={() => window.open(ls.header.ib)}
            >
               <InboxIcon />
            </IconButton>
            <IconButton
               title={ls.header.ca}
               aria-label="event"
               onClick={() => window.open(ls.header.ca)}
            >
               <EventIcon />
            </IconButton>
            <IconButton
               title={ls.header.go}
               aria-label="plane"
               onClick={() => window.open(ls.header.go)}
            >
               <AirplaneTicketIcon />
            </IconButton>

            <IconButton title={ls.header.sm} aria-label="stock" onClick={() => window.open(ls.header.sm)} >
               <AccountBalanceIcon />
            </IconButton>

            <IconButton title={ls.header.ai} aria-label="genai" onClick={() => { window.open(ls.header.ai)}} >
               <SvgIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" >
                     <path
                        fill="white"
                        d="M 11.134766 1.0175781 C 10.87173 1.0049844 10.606766 1.0088281 10.337891 1.0332031 C 8.1135321 1.2338971 6.3362243 2.7940749 5.609375 4.8203125 C 3.8970488 5.1768547 2.4372723 6.3040092 1.671875 7.9570312 C 0.73398779 9.9832932 1.1972842 12.300966 2.5878906 13.943359 C 2.0402798 15.605243 2.2847784 17.435582 3.3320312 18.923828 C 4.6182099 20.749715 6.8585216 21.506646 8.9765625 21.123047 C 10.141577 22.428211 11.848518 23.131209 13.662109 22.966797 C 15.886468 22.766103 17.663776 21.205925 18.390625 19.179688 C 20.102951 18.823145 21.562728 17.695991 22.328125 16.042969 C 23.266012 14.016707 22.802716 11.699034 21.412109 10.056641 C 21.95972 8.394757 21.715222 6.5644177 20.667969 5.0761719 C 19.38179 3.2502847 17.141478 2.4933536 15.023438 2.8769531 C 14.031143 1.7652868 12.645932 1.0899306 11.134766 1.0175781 z M 11.025391 2.5136719 C 11.920973 2.5488153 12.753413 2.8736921 13.429688 3.4199219 C 13.316626 3.4759644 13.19815 3.514457 13.087891 3.578125 L 8.5820312 6.1796875 L 8.5175781 12.238281 L 6.75 11.189453 L 6.75 6.7851562 C 6.75 4.6491563 8.3075938 2.74225 10.433594 2.53125 C 10.632969 2.5115 10.83048 2.5060234 11.025391 2.5136719 z M 16.125 4.2558594 C 17.398584 4.263418 18.639844 4.8251563 19.417969 5.9101562 C 20.070858 6.819587 20.310242 7.9019929 20.146484 8.9472656 C 20.04127 8.8772414 19.948325 8.7942374 19.837891 8.7304688 L 15.332031 6.1289062 L 10.052734 9.1035156 L 10.076172 7.0488281 L 13.890625 4.8476562 C 14.584375 4.4471562 15.36085 4.2513242 16.125 4.2558594 z M 5.2832031 6.4726562 C 5.2752078 6.5985272 5.25 6.7203978 5.25 6.8476562 L 5.25 12.050781 L 10.464844 15.136719 L 8.6738281 16.142578 L 4.859375 13.939453 C 3.009375 12.871453 2.1375781 10.567094 3.0175781 8.6210938 C 3.4795583 7.6006836 4.2963697 6.8535791 5.2832031 6.4726562 z M 15.326172 7.8574219 L 19.140625 10.060547 C 20.990625 11.128547 21.864375 13.432906 20.984375 15.378906 C 20.522287 16.399554 19.703941 17.146507 18.716797 17.527344 C 18.724792 17.401473 18.75 17.279602 18.75 17.152344 L 18.75 11.949219 L 13.535156 8.8632812 L 15.326172 7.8574219 z M 12.025391 9.7109375 L 13.994141 10.878906 L 13.966797 13.167969 L 11.974609 14.287109 L 10.005859 13.121094 L 10.03125 10.832031 L 12.025391 9.7109375 z M 15.482422 11.761719 L 17.25 12.810547 L 17.25 17.214844 C 17.25 19.350844 15.692406 21.25775 13.566406 21.46875 C 12.450934 21.579248 11.393768 21.245187 10.570312 20.580078 C 10.683374 20.524036 10.80185 20.485543 10.912109 20.421875 L 15.417969 17.820312 L 15.482422 11.761719 z M 13.947266 14.896484 L 13.923828 16.951172 L 10.109375 19.152344 C 8.259375 20.220344 5.8270313 19.825844 4.5820312 18.089844 C 3.9291425 17.180413 3.6897576 16.098007 3.8535156 15.052734 C 3.9587303 15.122759 4.0516754 15.205763 4.1621094 15.269531 L 8.6679688 17.871094 L 13.947266 14.896484 z"
                     />
                  </svg>
               </SvgIcon>
            </IconButton>

            <IconButton title={u_search} aria-label="search" onClick={() => { navigate(u_search) }} >
               <SearchIcon />
            </IconButton>

            <IconButton title={u_settings} aria-label="settings" onClick={() => {
                  navigate(location.pathname === u_settings ? "/" : u_settings) }} >
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