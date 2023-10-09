import { Card } from "@mui/material";

export default function Slide({ src }) {
  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
        height: "475px",
        borderRadius: 3,
      }}
    >
      <img src={src} />
    </Card>
  );
}
