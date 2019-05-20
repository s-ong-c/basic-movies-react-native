import React from 'react';
import { Platform} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import MovieScreen from '../screens/Movies';
import TVScreen from '../screens/TV';
import SearchScreen from '../screens/Search';
import { BG_COLOR} from '../constants/Color';
import TabBarIcon from '../components/TabBarIcon';
const TabNavigation = createBottomTabNavigator({
        Movie:{
            screen: MovieScreen, 
            navigationOptions: {
            tabBarIcon: ({focused}) => (
                <TabBarIcon 
                    focused={focused} 
                    name={Platform.OS ==='ios' ? 'ios-film' : 'md-film'}/>
                )
            }
        },
        TV:{
            screen: TVScreen, 
            navigationOptions: {
            tabBarIcon: ({focused}) => (
                <TabBarIcon 
                    focused={focused} 
                    name={Platform.OS ==='ios' ? 'ios-tv' : 'md-tv'}/>
                )
            }
        },
        Serach:{
            screen: SearchScreen, 
            navigationOptions: {
            tabBarIcon: ({focused}) => (
                <TabBarIcon 
                    focused={focused} 
                    name={Platform.OS ==='ios' ? 'ios-search' : 'md-search'}/>
                )
            }
        },
        // Movies: {
        //     screen: MovieScreen,
        //     navigationOptions: {
        //         title: 'somthing else'
        //     }
        // },
        // TV: TVScreen,
        // Search: SearchScreen
    }, {
        tabBarOptions: {
            showLabel: false,
            style: {
                backgroundColor: BG_COLOR,
            }
        }
    });

export default createAppContainer(TabNavigation);