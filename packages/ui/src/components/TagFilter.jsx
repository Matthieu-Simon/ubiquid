import Close from "../../public/crossIcon.svg";

const TagFilter = ({ content, onRemove }) => {
  return (
    <div className="flex justify-between items-center h-[38px] text-[#0E0E2C] font-medium border border-[#7650E0] px-4 py-2 bg-white gap-6 rounded-[38px]">
      {content}
      <div className="w-5 h-5 flex items-center justify-center bg-[#7650E0] rounded-full">
        <button className="cursor-pointer">
          <img src={Close} alt="close" onClick={onRemove} />
        </button>
      </div>
    </div>
  )
}

export default TagFilter;