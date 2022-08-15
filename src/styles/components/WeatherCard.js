import { RFPercentage } from "react-native-responsive-fontsize";
import { colors } from "../../scripts/consts";

export const weatherCardStyles = {
  card: {
    marginTop: RFPercentage(2),
    backgroundColor: colors.white,
    height: RFPercentage(22),
    borderRadius: RFPercentage(2),
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "space-between",

    title: {
      fontFamily: "Gilroy",
      fontSize: RFPercentage(2),
    },

    icon: {
      marginTop: RFPercentage(2.5),
      width: RFPercentage(5.5),
      height: RFPercentage(5.5),
    },

    number: {
      fontSize: RFPercentage(5),
      fontFamily: "GilroyBold",
    },

    quality: {
      fontSize: RFPercentage(3.5),
      fontFamily: "GilroyBold",
    },

    leftSide: {
      width: '40%',
      height: '100%',
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },

    rightSide: {
      width: '60%',
      height: '100%',
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",

      column: {
        width: '50%',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        height: '100%',
        // backgroundColor: 'blue'
      },

      info: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        value: {
          fontSize: RFPercentage(2.5),
          fontFamily: "GilroyBold",
        }
      }
    }
  }
}