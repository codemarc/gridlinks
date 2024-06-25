/**
 * Imports the `styled` function from the `@mui/material/styles` module.
 * This function is used to create a new React component that applies the specified styles.
 */
import { styled } from "@mui/material/styles"
/**
 * Imports the `Box`, `Paper`, and `Grid` components from the Material-UI library.
 * These components are commonly used for layout and styling in Material-UI-based React applications.
 * - `Box`: A versatile wrapper component for applying styles and layout properties.
 * - `Paper`: A container component that provides a material-design-inspired paper-like surface.
 * - `Grid`: A layout component that implements the Material-UI grid system, allowing for responsive and flexible layouts.
 */
import { Box, Paper, Grid } from "@mui/material"

/**
 * Imports the `Motd` component from the "../components/Motd" module.
 * The `Motd` component is likely responsible for rendering a "Message of the Day" or some other type of informational message.
 */
import Motd from "../components/Motd"

/**
 * Imports the `GridCard` component from the "../components/GridCard" module.
 * The `GridCard` component is likely responsible for rendering a card-like UI element within a grid layout.
 */
import GridCard from "../components/GridCard"

/**
 * Imports the default export from the "../data/Data" module, which likely contains some data or configuration that is used throughout the application.
 */
import { default as data } from "../data/Data"

/**
 * Retrieves the keys of the `data` object, which is likely a data source or configuration object used throughout the application.
 * This allows the component to iterate over the keys and render corresponding `GridCard` components.
 */
const keys = Object.keys(data)

/**
 * A custom Material-UI `Paper` component that applies specific styles based on the current theme.
 * This component is used to provide a consistent paper-like surface for the `GridCard` components within the Home page.
 * The styles include:
 * - Setting the background color to either a dark or light theme color based on the current theme mode.
 * - Applying the theme's `body2` typography styles.
 * - Setting the padding to 0.
 * - Setting the text color to the secondary text color of the current theme.
 */
const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
   ...theme.typography.body2,
   padding: theme.spacing(0),
   color: theme.palette.text.secondary,
}))

/**
 * The `Home` component is the main page component for the application's home page.
 * It renders the `Motd` (Message of the Day) component, and a grid layout of `GridCard` components.
 * The grid layout is created using the `Box` and `Grid` components from the Material-UI library.
 * The `GridCard` components are rendered based on the keys of the `data` object, which is likely a data source or configuration object used throughout the application.
 * The `Item` component is a custom Material-UI `Paper` component that applies specific styles based on the current theme, providing a consistent paper-like surface for the `GridCard` components.
 */
export default function Home() {
   return (
      <>
         <Motd />
         <Box sx={{ flexGrow: 1, p: 1, marginTop: "-2px", maxWidth: "900px" }}>
            <Grid container spacing={0}>
               {keys.map((o, ndx) => (
                  <Grid item xs={3} key={ndx}>
                     <Item>
                        <GridCard dto={data[o]} key={ndx} />
                     </Item>
                  </Grid>
               ))}
            </Grid>
         </Box>
      </>
   )
}
