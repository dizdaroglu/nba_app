import React from 'react';

import {
    createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator,
    createAppContainer
} from 'react-navigation';

//screens
import SignIn from './components/auth';
import News from './components/news';
import Games from './components/games';


const AppStack = createBottomTabNavigator({
    News: News,
    Games: Games
});

const AuthStack = createStackNavigator({
    SignIn: SignIn
}, {
    headerMode: 'none'
})

export const RootNavigator = () => {
    return createAppContainer(createSwitchNavigator({
        App: AppStack,
        Auth: AuthStack
    }, {
        initialRouteName: 'Auth'
    }))
}