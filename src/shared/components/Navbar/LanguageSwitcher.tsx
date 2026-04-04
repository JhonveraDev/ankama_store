import flag from "../../../assets/images/global/en_flag.jpg";

export const LanguageSwitcher = () => {
  return (
    <div className="language-switcher">
      <button className="language-switcher__actions">
        <img src={flag} alt="" />
      </button>
    </div>
  )
}
