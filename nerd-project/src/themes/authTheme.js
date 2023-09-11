import { createTheme } from "@mui/material";

export const authTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#4b0082',
            light: '#fff',
            dark: '#333666'
        }, 

        secondary: {
            main: '#fff',
            light: '#fff',
            dark: '#fff'
        }
    }
})