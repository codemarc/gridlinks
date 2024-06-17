import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import { useTheme } from "@mui/material/styles"
import Motd from "../components/Motd"

export default function Home() {
   const navigate = useNavigate()
   const theme = useTheme()

  // =============================================================================
  // The main function
  // =============================================================================
  return (
   <>
   <Motd />
   </>
 )

}