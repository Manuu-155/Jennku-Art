
import NavBar from "./navBar"
export const Header = () => {
  return (
    <header className="flex justify-between">
      <a href="/">
        <img className="w-50" src="/images/logo_texto.png" alt="logo_texto"/>
      </a>
      <NavBar />
    </header>
  )
}


