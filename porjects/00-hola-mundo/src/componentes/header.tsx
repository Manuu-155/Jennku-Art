import {NavBar} from "./navBar"
export const Header = () => {
  return (
    <header className="flex justify-between">
      <a href="/">
        <img className="w-50" src="https://i.ibb.co/gM7KQdyn/logo-texto.png" alt="logo_texto"/>
      </a>
      <NavBar />
    </header>
  )
}


