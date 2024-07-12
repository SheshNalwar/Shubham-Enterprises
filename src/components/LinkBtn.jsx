import { NavLink } from "react-router-dom";

const LinkBtn = ({ navTo, name, className, target }) => {
  return (
    <NavLink to={navTo} className={className} target={target}>
      {name}
    </NavLink>
  );
};

export default LinkBtn;
