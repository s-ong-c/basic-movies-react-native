import { createStackNavigator } from 'react-navigation';
import { BG_COLOR, TINT_COLOR} from '../constants/Color';

export const headerStyles = {
    headerStyle: {
        backgroundColor: BG_COLOR,
        borderBottomwidth: 0
    },
    headerTitleStyle: {
        color: TINT_COLOR
    },
    headerTinitColor: TINT_COLOR
}

export const createStack = (screen, title) => 
createStackNavigator({
    Screen: {
        screen,
        navigationOptions: {
            title,
            ...headerStyles
        }
    }
});
