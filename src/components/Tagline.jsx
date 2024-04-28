import Bracket from "../assets/svg/Brackets";
const Tagline = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {Bracket("left")}
      <div className="mx-3 text-n-3">
            {children}
      </div>
      {Bracket("right")}
    </div>
  );
};

export default Tagline;
