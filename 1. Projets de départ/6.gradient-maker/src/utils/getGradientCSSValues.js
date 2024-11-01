const getGradientCSSValues = (gradient) => {
  const gradientCSSValues = gradient.colors.reduce((acc, color, index) =>
acc + `${color.value} ${color.position}%${index === gradient.colors.length - 1 ? "" : ", "}`, "")
  return `linear-gradient(${gradient.angle}deg, ${gradientCSSValues});`;
}

export default getGradientCSSValues;
