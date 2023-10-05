import { Box } from "@mui/material";

export default function Slide({ src }) {
    return (
        <Box sx={{
            display: 'flex',
            width: '750px',
            height: '475px',
        }}>
            <img src={src} />
        </Box>
    )
}
