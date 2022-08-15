import { RFPercentage } from "react-native-responsive-fontsize";

export const airQualityCardStyle = {
  card: {
    marginTop: RFPercentage(2),
    // backgroundColor: "#fff",
    height: RFPercentage(12),
    borderRadius: RFPercentage(2),
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    title: {
      fontFamily: "Gilroy",
      fontSize: RFPercentage(2),
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
      width: '30%',
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
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start"
    }
  }
}