export default function capitalizeFirstLetter(data) {
  if (!data) return "";
  return `${data.charAt(0).toUpperCase()}${data.slice(1)}`;
}

export const generatePlaceholder = (column) => {
  console.log("abc");
  return {
    _id: `${column._id}-placeholder-card`,
    boardId: column.boardId,
    columnId: column._id,
    FE_Placeholder: true,
  };
};
