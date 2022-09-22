import PropTypes from "prop-types";

function Header({ title, bgColor, textColor }) {
  return (
    <header style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="container">
        <h2>{title}</h2>
      </div>
    </header>
  );
}

// SETTING DEFAULT PROPS WHEN NO PROP IS PASSED
Header.defaultProps = {
  title: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4",
  textColor: "#ff6a95",
};

// SETTING PROP TYPES FOR TYPE CHECKING
Header.propTypes = {
  title: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
