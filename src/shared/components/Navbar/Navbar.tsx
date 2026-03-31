import { SearchBar, Logo, UserActions } from "../Navbar"

export const Navbar = () => {
  return (
    <div className="navbar">
      <Logo />
      <SearchBar />
      <UserActions />
    </div>
  )
}
