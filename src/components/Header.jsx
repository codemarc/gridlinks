import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import IconBar from "./IconBar";

const website = "https://codemarc.net";

export default function Header({ themeProps }) {
   const { name, version, darkMode, setDarkMode } = themeProps;
   const versionText = `v${version}`;

   const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      localStorage.setItem(
         name,
         JSON.stringify({
            version: versionText,
            dm: !darkMode,
         })
      );
   };

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
                        href=""
                        onClick={() => {
                           toggleDarkMode();
                        }}
                        title="Toggle Dark Mode"
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
                        href="#"
                        target="_new"
                        sx={{ textTransform: "none", textShadow: "none" }}
                     >
                        {versionText}
                     </Button>
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                     <IconBar />
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
      version: PropTypes.string.isRequired,
      darkMode: PropTypes.bool.isRequired,
      setDarkMode: PropTypes.func.isRequired,
   }).isRequired,
};
