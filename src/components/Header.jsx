/**
 * Imports the `PropTypes` module from the 'prop-types' package.
 * `PropTypes` provides a way to validate the props passed to a React component.
 * This import is likely used to define the expected prop types for the component
 * in which this code is used.
 */
import PropTypes from "prop-types"

/**
 * Imports the `Link` component from the 'react-router-dom' package.
 * The `Link` component is used to create links between different routes in a React Router-based application.
 * This import is likely used to provide a way to navigate to different pages or sections of the application.
 */
import { Link } from "react-router-dom"

/**
 * Imports the `AppBar`, `Toolbar`, `Box`, and `Button` components from the `@mui/material` package.
 * These components are likely used to create the header or navigation bar of the application.
 * The `AppBar` component provides a material-design app bar, the `Toolbar` component is used to
 * define the content and layout of the app bar, the `Box` component is a flexible layout
 * container, and the `Button` component is used to create clickable buttons.
 */
import { AppBar, Toolbar, Box, Button } from "@mui/material"

/**
 * Imports the `IconBar` component from the same directory.
 * The `IconBar` component is used to render a bar of icons
 * in the header.
 */
import IconBar from "./IconBar";

const website = "https://codemarc.net"


/**
 * Renders the header component for the application.
 * The header includes a logo, the application name, a link to the website, and version information.
 * It also includes an `IconBar` component that renders a bar of icons.
 * The header's appearance is controlled by the `themeProps` object, which includes properties
 * for the application name, localStorage object, dark mode state, and a function to set the dark mode state.
 *
 * @param {Object} themeProps - An object containing properties related to the application's theme.
 * @param {string} themeProps.name - The name of the application.
 * @param {Object} themeProps.ls - An object containing localStorage data.
 * @param {boolean} themeProps.darkMode - A flag indicating whether dark mode is enabled.
 * @param {function} themeProps.setDarkMode - A function to set the dark mode state.
 */
export default function Header({ themeProps }) {
   // const { name, ls, darkMode, setDarkMode } = themeProps
   const { name, ls, darkMode } = themeProps;
   const versionText = `v${ls.version}`;

   // const toggleDarkMode = () => {
   //    ls.dm = !darkMode
   //    setDarkMode(ls.dm)
   //    localStorage.setItem(name,JSON.stringify(ls))
   // }

   return (
      <>
         <Box sx={{ flexGrow: 1 }}>
            <AppBar
               position="static"
               sx={{
                  backgroundColor: darkMode ? "transparent" : "#008f00",
                  boxShadow: "none",
                  color: "white",
                  "& .imglogo": { width: "42px", height: "42px" },
               }}
            >
               <Toolbar>
                  <Box sx={{ flexGrow: 1 }}>
                     <Button
                        color="inherit"
                        href="#"
                        target="_blank"
                        // onClick={() => {
                        //    toggleDarkMode()
                        // }}
                        // title="Toggle Dark Mode"
                        sx={{ "&:focus": { outline: "none" } }}
                     >
                        <img src="/logo.png" className="imglogo"></img>
                     </Button>
                     <Link to="/">
                        <Button
                           color="inherit"
                           className="nav-link"
                           title="home"
                           sx={{ color: "white" }}
                        >
                           {name}
                        </Button>
                     </Link>
                     <Button
                        onClick={() => window.open(website, "codemarc")}
                        target="codemarc"
                        color="inherit"
                        className="nav-link"
                        title={website}
                        sx={{ textTransform: "none", textShadow: "none" }}
                     >
                        by codemarc
                     </Button>
                  </Box>
                  <Box sx={{ flexGrow: 7 }}></Box>
                  <Box sx={{ flexGrow: 1 }}></Box>
                  <Box>
                     <Button
                        color="inherit"
                        href="https://chromewebstore.google.com/detail/gridlinks/ofpobifnipafncfehmgeknfkgojkbgke"
                        target="_new"
                        sx={{ textTransform: "none", textShadow: "none" }}
                     >
                        {versionText}
                     </Button>
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                     <IconBar themeProps={themeProps} />
                  </Box>
               </Toolbar>
            </AppBar>
         </Box>
      </>
   );
}

Header.propTypes = {
   themeProps: PropTypes.shape({
      name: PropTypes.string.isRequired,
      ls: PropTypes.object.isRequired,
      darkMode: PropTypes.bool.isRequired,
      setDarkMode: PropTypes.func.isRequired,
   }).isRequired,
}
