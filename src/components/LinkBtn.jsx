import { NavLink } from "react-router-dom";

const LinkBtn = ({ navTo, name, className }) => {
  return (
    <NavLink to={navTo} className={className}>
      {name}
    </NavLink>
  );
};

export default LinkBtn;
