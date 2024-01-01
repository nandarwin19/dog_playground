const TextLight = ({ name, color, boldBoolean }) => {
  const lightTextStyle = {
    textShadow: `
      0 0 calc(1px * 10) ${color},
      0 0 calc(2px * 10) ${color},
      0 0 calc(4px * 10) ${color},
      0 0 calc(8px * 10) ${color},
      0 0 calc(16px * 10) ${color},
      0 0 calc(32px * 10) rgb(255, 0, 0),
      0 0 calc(40px * 10) ${color},
      0 0 calc(50px * 10) ${color}`,
  };

  return (
    <p
      style={lightTextStyle}
      className={`${boldBoolean ? "font-extrabold" : ""} tracking-wide`}
    >
      {name}
    </p>
  );
};

export default TextLight;
