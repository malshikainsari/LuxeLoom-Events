import { CgProfile } from "react-icons/cg";

const Header = ({ activePage }) => {
  return (
    <nav className="flex justify-between items-center pb-6 relative w-full">
      <h1 className="text-black text-2xl font-bold absolute top-[7%] left-[2%]">LOGO</h1>
      <div className="space-x-8 text-lg">
        <a 
          href="/themegenerator" 
          className={`hover:text-[#C78141] font-bold absolute left-[20%] ${
            activePage === "themegenerator" ? "text-[#C78141]" : "text-gray-800"
          }`}
        >
          EVENT THEME GENERATOR
        </a>
        <a 
          href="/vendor" 
          className={`hover:text-[#C78141] font-bold absolute left-[45%] ${
            activePage === "vendor" ? "text-[#C78141]" : "text-gray-800"
          }`}
        >
          VENDOR MARKETPLACE
        </a>
        <a 
          href="/budgettracker" 
          className={`hover:text-black font-bold absolute left-[69%] ${
            activePage === "budgettracker" ? "text-[#C78141]" : "text-gray-800"
          }`}
        >
          BUDGET TRACKER
        </a>
      </div>
      <CgProfile className="absolute right-[2%] top-[7%] text-3xl text-black hover:text-[#B43B26] cursor-pointer" />
    </nav>
  );
};

export default Header;