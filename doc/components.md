# Components

Components are the building blocks of any React application. They are JavaScript functions or classes that optionally accept inputs, called "props", and return a React element that describes how a section of the UI should appear.

## Header

<img src="img/gridlinks-frame2.png"/>

The goal of step three is to turn the Header portion of the design into a Header component. We do this using standard MUI components and create a few of own. The Header component is a crucial part of the application's user interface, providing navigation, branding, and access to key features. It's implemented using Material-UI components and integrates with React Router for navigation.

### Features:
- Responsive app bar with customizable styling
- Logo with dark mode toggle functionality
- Application name with link to home page
- "by codemarc" link to external website
- Version display
- Integration of the IconBar component
- Dark mode support with persistent state

### Implementation:

The Header is implemented as a React functional component using Material-UI's `AppBar`, `Toolbar`, `Box`, and `Button` components. It also incorporates the custom `IconBar` component.

Key aspects of the implementation:
1. Uses `PropTypes` for type checking of props
2. Implements dark mode toggle functionality
3. Utilizes React Router's `Link` component for internal navigation
4. Incorporates external links
5. Customizes Material-UI components with inline styles

### Usage:

To use the Header in your application, import it and include it in your main layout component:

```jsx
import Header from './Header';

const Layout = ({ themeProps }) => {
  return (
    <>
      <Header themeProps={themeProps} />
      {/* Other layout components */}
    </>
  );
};
```

### Props:

The Header component accepts a single prop `themeProps`, which is an object containing:

- `name`: String - The name of the application
- `ls`: Object - Language strings and other localization data
- `darkMode`: Boolean - Current dark mode state
- `setDarkMode`: Function - Function to update dark mode state

### Key Functions:

1. `toggleDarkMode()`: Toggles the dark mode state and persists it to localStorage

### Styling:

The component uses inline styles via Material-UI's `sx` prop for most of its styling. Key style features include:

- Transparent background in dark mode, green (#008f00) in light mode
- Custom logo sizing
- Text shadow removal for certain elements
- Custom button styling

### Customization:

The Header can be customized by:
1. Modifying the `themeProps` object to change application name, version, or language strings
2. Adjusting the inline styles to change colors, spacing, or other visual properties
3. Adding or removing buttons or links in the Toolbar
4. Modifying the dark mode toggle behavior

### Integration with IconBar:

The Header component integrates the IconBar component, passing down the `themeProps`:

```jsx
<IconBar themeProps={themeProps} />
```

This allows for a consistent theme and localization across both components.

### PropTypes:

The component uses PropTypes for type checking:

```jsx
Header.propTypes = {
   themeProps: PropTypes.shape({
      name: PropTypes.string.isRequired,
      ls: PropTypes.object.isRequired,
      darkMode: PropTypes.bool.isRequired,
      setDarkMode: PropTypes.func.isRequired,
   }).isRequired,
}
```

## IconBar

The IconBar component is a sophisticated part of the Header, displaying a comprehensive set of clickable icons for various functions, external links, and navigation purposes. It's designed to be flexible and feature-rich, integrating both external services and internal app navigation.

### Features:

* Displays a horizontal row of icons using Material-UI's Stack and IconButton components
* Includes icons for social media platforms, productivity tools, and internal app functions
* Uses a mix of standard Material-UI icons and custom SVG icons
* Implements different behaviors for external links and internal navigation
* Utilizes React Router for internal navigation

### Implementation:
The IconBar is implemented as a React functional component. It uses MUI's Stack for layout and IconButton for each icon. The component makes use of React Router's useNavigate and useLocation hooks for internal navigation.
Key aspects of the implementation:

1. External links (like social media) open in a new tab/window
2. Internal navigation (search and settings) use React Router
3. A custom SVG icon is used for the AI-related function
4. The component receives themeProps as a prop, which includes language strings and theme-related functions

### Usage:
To use the IconBar in your application, import it into your Header component and include it in the JSX, passing the necessary themeProps:

```jsx
import IconBar from './IconBar';

const Header = ({ themeProps }) => {
  return (
    <header>
      {/* Other header content */}
      <IconBar themeProps={themeProps} />
    </header>
  );
};

```

### Customization:
The IconBar can be customized by:

1. Modifying the themeProps object to change language strings or theme behavior
2. Adding, removing, or changing icons in the component
3. Adjusting the routing logic for internal navigation
4. Modifying the external link URLs

### PropTypes:

The component uses PropTypes for type checking:

```jsx
jsxCopyIconBar.propTypes = {
   themeProps: PropTypes.shape({
      name: PropTypes.string.isRequired,
      ls: PropTypes.object.isRequired,
      darkMode: PropTypes.bool.isRequired,
      setDarkMode: PropTypes.func.isRequired,
   }).isRequired,
}
```

This ensures that the necessary props are passed to the component with the correct types.

---

At this point we can sanitize our two css files so we end up with

***App.css***
```css
#root {  width: 840px;  min-height: 376px;  line-height: 1;}

header {   height: 50px;   margin-top: -12px; }

#root > div > header > div > div > span > div svg {
   color: rgb(255 255 255);
   font-size: 20px;
   width: 18px;
   margin-left: 0px;
 }
```

and
***index.css***

```css
   ⋮
   a {
     font-weight: 500;
     color:white;
     text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
     text-decoration: inherit;
   }
   a:hover {
     color:white;
     text-decoration: inherit;
   }

   body {
     margin: 0;
     display: flex;
     min-width: 320px;
     min-height: 100vh;
   }
  ⋮
```

Where we  replaced the link color with white and remove the place-items:center style from the body



---

[Back «](design)  __Components__  [» Next](pages)



