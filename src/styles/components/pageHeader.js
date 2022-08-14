import { RFPercentage } from "react-native-responsive-fontsize";
import { colors } from "../../scripts/consts";

export const pageHeaderStyles = {
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: RFPercentage(8),

    title: {
      fontSize: RFPercentage(4),
      color: colors.white,
      fontFamily: 'GilroyBold'
    },

    subtitle: {
      fontSize: RFPercentage(1.5),
      color: colors.white,
      fontFamily: 'Gilroy'
    },

    icon: {
      height: RFPercentage(5),
      width: RFPercentage(5),
      marginRight: RFPercentage(1.5),
    }
  }
}