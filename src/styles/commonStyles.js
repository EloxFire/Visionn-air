import { StatusBar } from "react-native";
import { colors } from "../scripts/consts";

export const commonStyles = {
  view: {
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 30,
    backgroundColor: colors.dark_green,
    height: '100%'
  }
}