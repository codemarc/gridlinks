# Pages

Gridlinks has two type of pages:

1. [Home](#home) - the page that holds the grid and  the links

2. [Settings](#settings) - Each grid section supports the implementation of a settings page to
   control the behaviour of that section. Additionally, the home page has settings that apply to global settings.

## Home

The home page of the application displays a Message of the Day and a grid layout of cards representing various data items.

### Features:

- Displays a Message of the Day (Motd) component
- Renders a responsive grid layout of GridCard components
- Uses Material-UI components for styling and layout
- Dynamically generates GridCards based on a data source

### Implementation:

The home page is implemented as a React functional component using Material-UI components and custom styled components.

#### Key aspects of the implementation:

- Uses Material-UI's Box and Grid for layout
- Incorporates a custom styled Paper component (Item) for consistent card styling
- Dynamically renders GridCard components based on data keys
- Integrates the Motd component for displaying a message

### Key Components:

1. Motd: Renders the Message of the Day
2. Box: Wrapper for the grid layout
3. Grid: Creates a responsive grid layout
4. Item: Custom styled Paper component for consistent card styling
5. GridCard: Individual card components rendered within the grid

### Data Handling:

The component uses a data object imported from "../data/Data". It extracts the keys from this object to dynamically render GridCard components:

```javascript
const keys = Object.keys(data)
```

### Styling:

The component uses a combination of Material-UI's built-in styling and a custom styled component:
```javascript
const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
   ...theme.typography.body2,
   padding: theme.spacing(0),
   color: theme.palette.text.secondary,
}))
```
This Item component provides theme-aware styling for each grid item.

### Layout:
The grid layout is created using Material-UI's Grid component:

```jsx
<Grid container spacing={0}>
   {keys.map((o, ndx) => (
      <Grid item xs={3} key={ndx}>
         <Item>
            <GridCard dto={data[o]} key={ndx} />
         </Item>
      </Grid>
   ))}
</Grid>
```

Each GridCard is wrapped in an Item component and placed within a Grid item that spans 3 columns
on extra-small screens.

### Usage:
To use the Home component in your application, simply import and include it in your router or main application component:

```jsx
import Home from './Home'

function App() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
    </Router>
  );
}
```

### Customization:
The Home component can be customized by:

1. Modifying the data object to change the content of the GridCards
2. Adjusting the grid layout by changing the xs prop of the Grid items
3. Modifying the Item styled component to change the appearance of the card containers
4. Adding additional components or sections to the Home page

This documentation provides a comprehensive overview of the home page component, its functionality, implementation details, and how it integrates with other components and data sources within the application.


## Settings

The Settings page component is a crucial part of the application that allows users to configure various URLs for external services and toggle the dark mode setting. It provides a form-based interface for users to update their preferences.

### Features:

* Form for updating URLs of various services (GitHub, LinkedIn, X.com, etc.)
* Dark mode toggle
* Reset functionality to clear all settings
* Cancel and Update buttons for form submission
* Responsive layout using Material-UI components

### Implementation:

The Settings component is implemented as a React functional component using Material-UI components and hooks from React and React Router.
Key aspects of the implementation:

1. Uses React's useState and useEffect hooks for state management
2. Utilizes React Router's useNavigate and useLocation hooks for navigation
3. Implements Material-UI components for form elements and layout
4. Manages local storage for persisting user preferences

### Props:

The component accepts a single prop themeProps, which is an object containing:

* name: String - The name of the application
* ls: Object - Language strings and other localization data_
* darkMode: Boolean - Current dark mode stat
* setDarkMode: Function - Function to update dark mode state

### State Management:
The component uses multiple useState hooks to manage the state of each URL input field. It also uses useEffect to update the state when the prop values change.
Key Functions:

1. handleNav(): Handles navigation between the settings page and home page
2. handleCancel(): Cancels the form submission and navigates back
3. handleReset(): Clears all settings from local storage and reloads the application
4. handleUpdate(): Updates all URL settings in local storage and navigates back
5. toggleDarkMode(): Toggles the dark mode setting and updates local storage

### Form Layout:
The form is laid out using Material-UI's Box, Container, and Grid components. It includes:

- Text fields for each URL setting
- A switch for toggling dark mode
- Buttons for Reset, Cancel, and Update actions

### Styling:
The component uses inline styles for various elements, defined as constants:

- box1: Styles for the main container
- button1: Styles for the button container
- button2: Styles for individual buttons
- line and lline: Styles for text field layout

### Usage:
To use the Settings component in your application, import it and include it in your router:

```jsx
import Settings from './Settings'

function App({ themeProps }) {
  return (
    <Router>
      <Route path="/settings" element={<Settings themeProps={themeProps} />} />
    </Router>
  )
}
```

### PropTypes:

The component uses PropTypes for type checking:

```jsx
Settings.propTypes = {
   themeProps: PropTypes.shape({
      name: PropTypes.string.isRequired,
      ls: PropTypes.object.isRequired,
      darkMode: PropTypes.bool.isRequired,
      setDarkMode: PropTypes.func.isRequired,
   }).isRequired,
}
```

### Customization:
The Settings component can be customized by:

1. Adding or removing URL fields as needed
2. Modifying the styling constants to change the appearance
3. Adding additional settings or preferences
4. Customizing the reset functionality or adding confirmation dialogs

This documentation provides a comprehensive overview of the Settings component, its functionality, implementation details, and how it integrates with the broader application for managing user preferences and application settings.



---

[Back «](components)  __Pages__  [» Next](publish)