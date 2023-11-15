import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";
import "bootstrap/dist/css/bootstrap.min.css";

function PillExample() {
  return (
    <Stack direction="horizontal" gap={2}>
      <Badge pill bg="success">
        Success
      </Badge>
    </Stack>
  );
}

export default PillExample;
