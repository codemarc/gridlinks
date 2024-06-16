# Design

Creating a UI design for a Chrome extension involves understanding the primary functionality and ensuring a user-friendly experience. It startes with a vision.

<img src="img/gridlinks-design.png" width="50%" vspace="20">

## Purpose and Features

  Gridlinks is a system designed to enhance productivity at various levels - individual, team, department, or company-wide. It accomplishes this by providing a published, shared set of managed links. These links presumably lead to resources, tools, or services that aid in productivity. The system is designed to be easily updated using standard update mechanisms, ensuring that the links remain relevant and useful over time.

  Gridlinks is to accessible at your fingertips, it could be a chrome extension or it couuld be a menu application on macOSX or on Windows, a System Tray application. These applications run in the background and their icons reside in the system tray.

  For the chrome extension we expect that
  * Customization via settings is supported at every level
  * A mechanism for user defined content is available
  * Modern UI features like "Dark Mode" is supported

## Layout
* Main Toolbar Icon: This is the entry point for users to interact with your extension.
* Popup Interface: A small window that appears when the toolbar icon is clicked.
* A Header/Details sections to implement the grid.

## Design Elements
* Toolbar Icon: Simple, recognizable icon (16x16, 32x32, 48x48, 128x128).
* Popup Interface:
   * Header: Logo and Title and common key icons
   * Main Content: Key features and controls.
   * Settings Content: Links to settings and help.

### Wireframe Example
Here's an example wireframe for a Chrome extension popup:

<img src="img/gridlinks-frame1.png" width="50%" vspace="20">


---

[Back «](README)  __Design__  [» Next](implement)