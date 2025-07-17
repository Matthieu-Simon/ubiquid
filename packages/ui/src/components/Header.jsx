import Button from "./Button";
import Title from "./Title";

const Header = ({ onAddJob }) => {
  return (
    <header className="flex justify-between items-center">
      <Title title="Les jobs" />
      <Button 
        onClick={onAddJob}
        className="text-white bg-[var(--color-primary)] hover:bg-[#8661EC] rounded-[10px] font-medium text-lg px-4 py-2 gap-2 cursor-pointer shadow-button"
        children="Ajouter une offre"
      />
    </header>
  )
}

export default Header;