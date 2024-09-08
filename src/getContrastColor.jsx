// Function to determine the contrasting color for readability
const getContrastColor = (hex) => {
  // Extract red, green, and blue components from the hex color code
  const r = parseInt(hex.slice(1, 3), 16); // Extract red component
  const g = parseInt(hex.slice(3, 5), 16); // Extract green component
  const b = parseInt(hex.slice(5, 7), 16); // Extract blue component

  // Calculate the brightness of the color using the luminance formula
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Determine the contrasting color based on brightness
  // If brightness is greater than 128, the color is light, so return black for contrast
  // If brightness is 128 or less, the color is dark, so return white for contrast
  return brightness > 128 ? "#000000" : "#FFFFFF"; // Return black or white for optimal text visibility
};

export default getContrastColor;
