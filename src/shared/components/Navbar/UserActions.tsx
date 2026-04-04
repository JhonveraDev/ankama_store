import { Cart, UserMenu, LanguageSwitcher } from "../"

export const UserActions = () => {
  return (
    <div className="user-actions">
      <Cart />
      <UserMenu />
      <LanguageSwitcher />
    </div>
  )
}
