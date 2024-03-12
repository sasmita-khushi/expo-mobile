import "../global.css";
import { Slot } from "expo-router";
import { useFonts } from "expo-font";

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    Medimi: require("../font/MadimiOne-Regular.ttf"),
    Truculenta: require("../font/Truculenta-VariableFont_opsz,wdth,wght.ttf"),
    Opensans: require("../font/OpenSans_SemiCondensed-Regular copy.ttf"),
  });
  return <Slot />;
}
