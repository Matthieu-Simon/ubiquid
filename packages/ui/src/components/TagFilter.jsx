import Cross from "../../public/crossIcon.png";

const TagFilter = ({ content, onRemove }) => {
  return (
    <div className="flex justify-between items-center h-[38px] text-[#0E0E2C] font-medium border border-[#7650E0] px-4 py-2 bg-white gap-6 rounded-[38px]">
      {content}
      <div className="w-5 h-5 flex items-center justify-center bg-[#7650E0] rounded-full">
        <button className="cursor-pointer">
          <img src={Cross} alt="close" onClick={onRemove} className="w-2 h-2" />
        </button>
      </div>
    </div>
  )
}

export default TagFilter;