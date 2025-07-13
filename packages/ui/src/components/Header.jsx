import Button from "./Button";
import Title from "./Title";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <Title title="Les jobs" />
      <Button 
        onClick={""}
        className="text-white bg-[#7650E0] rounded-[10px] font-medium text-lg px-4 py-2 gap-2"
        content="Ajouter une offre"
      />
    </header>
  )
}

export default Header;