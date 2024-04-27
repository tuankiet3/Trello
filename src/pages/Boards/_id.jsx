// boards detail
import { Container } from "@mui/material";
import AppBar from "~/components/AppBar";
import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";
import { mockData } from "~/apis/mock-data";
function Board() {
  return (
    <Container sx={{ height: "100vh" }} disableGutters maxWidth="false">
      <AppBar />
      <BoardBar board={mockData?.board} />
      <BoardContent board={mockData?.board} />
    </Container>
  );
}
export default Board;
