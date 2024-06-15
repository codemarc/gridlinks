import PropTypes from "prop-types"

export default function Header({ themeProps }) {
   const { version, darkMode, setDarkMode } = themeProps
   const versionText = `v${version}`

}

Header.propTypes = {
   themeProps: PropTypes.shape({
     darkMode: PropTypes.bool.isRequired,
     setDarkMode: PropTypes.func.isRequired,
   }).isRequired,
 }
