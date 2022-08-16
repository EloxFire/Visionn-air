import { colors } from "../../scripts/consts";
import { RFPercentage } from "react-native-responsive-fontsize";

export const airQualityIndexStyles = {
  title: {
    marginTop: RFPercentage(3),
    fontSize: RFPercentage(4),
    color: colors.white,
    fontFamily: "GilroyBold",
    marginBottom: RFPercentage(1.5),
  },
  content: {
    maxHeight: RFPercentage(65),

    text: {
      marginTop: RFPercentage(1.5),
      fontSize: RFPercentage(2.5),
      color: colors.white,
      fontFamily: "Gilroy",
      textAlign: "justify",
      lineHeight: RFPercentage(3),
    },

    link: {
      fontSize: RFPercentage(2),
      color: colors.white,
      fontFamily: "Gilroy"
    }
  },

  footer: {
    marginTop: RFPercentage(2),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    button: {
      backgroundColor: colors.white,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      height: RFPercentage(5),
      width: '60%',
      borderRadius: RFPercentage(5),

      text: {
        fontSize: RFPercentage(2),
        color: colors.black,
        fontFamily: "GilroyBold",
      }
    }
  }
}