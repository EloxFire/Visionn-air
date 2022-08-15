import { colors } from "../../scripts/consts";
import { RFPercentage } from "react-native-responsive-fontsize";

export const homeStyles = {
  content: {
    paddingTop: RFPercentage(3),

    title: {
      fontSize: RFPercentage(3),
      color: colors.white,
      fontFamily: "GilroyBold"
    },

    subtitle: {
      fontSize: RFPercentage(2),
      color: colors.white,
      fontFamily: "Gilroy"
    }
  }
}