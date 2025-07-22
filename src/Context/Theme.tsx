import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
import "/src/App.css"

const Theme = () => {
    const {theme ,setTheme} = useContext(ThemeContext) 
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark")
    }
    

  return (
    <button className="theme-toggle" onClick={toggleTheme}>{theme == "dark" ? "🌑" : "☀️"}</button>
  )
}

export default Theme