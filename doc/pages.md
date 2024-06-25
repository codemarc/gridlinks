# Pages

Gridlinks has two type of pages:

1. [Home](#home) - the page that holds the grid and  the links

2. [Setup](#setup) - Each grid section supports the implementation of a setup page to
   control the functionality of that section. Additionally, the main grid has a setup section used for global settings.

## Home
![](https://img.shields.io/badge/page-home-gold)
![GitHub Tag](https://img.shields.io/badge/tag-STEP6-blue)

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


## Setup
![](https://img.shields.io/badge/page-setup-gold)
![GitHub Tag](https://img.shields.io/badge/tag-STEP5-blue)




---

[Back «](components)  __Pages__  [» Next](publish)