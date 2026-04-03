import { Cart, UserMenu, LanguageSwitcher } from "../"

export const UserActions = () => {
  return (
    <div className="navbar__right">
      <Cart />
      <UserMenu />
      <LanguageSwitcher />
    </div>
  )
}
