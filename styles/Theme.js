import { configureFonts, DefaultTheme } from "react-native-paper";
import customFonts from './Fonts';

const theme = {
    ...DefaultTheme,
    fonts: configureFonts(customFonts),
    roundness: 4,
    colors: {
        ...DefaultTheme.colors,
        primary: '#0000ff',
        accent: '#00ff00',
        primaryVariant: '#7700B3'
    }
}

export default theme; 