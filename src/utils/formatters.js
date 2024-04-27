export default function capitalizeFirstLetter(data) {
  if (!data) return "";
  return `${data.charAt(0).toUpperCase()}${data.slice(1)}`;
}
