import Cross from "../../public/crossIcon.png";

const TagFilter = ({ content }) => {
  return (
    <div className="flex items-center w-[191px] h-[38px] font-[Work Sans] text-[#0E0E2C] font-medium text-lg border border-[#7650E0] px-4 py-2 bg-white gap-6 rounded-[38px]">
      {content}
      <div className="w-5 h-5 flex items-center justify-center bg-[#7650E0] rounded-full">
        <img src={Cross} alt="close" className="w-2 h-2" />
      </div>
    </div>
  )
}

export default TagFilter;