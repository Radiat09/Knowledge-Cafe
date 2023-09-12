import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 mx-4 border-b-2">
      <h1 className="text-5xl text-center font-bold text-slate-400">
        Knowledge Cafe
      </h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
