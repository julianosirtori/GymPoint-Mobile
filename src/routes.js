import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';

import SignIn from '~/pages/SignIn';
import CheckIns from '~/pages/CheckIns';

import Questions from '~/pages/AskForHelp/Questions';
import NewQuestion from '~/pages/AskForHelp/NewQuestion';
import Answer from '~/pages/AskForHelp/Answer';

export default (signedIn = false) =>
    createAppContainer(
        createSwitchNavigator(
            {
                Sign: createSwitchNavigator({
                    SignIn,
                }),
                App: createStackNavigator(
                    {
                        MyTab: {
                            screen: createBottomTabNavigator(
                                {
                                    CheckIns,
                                    AskForHelp: {
                                        screen: createStackNavigator(
                                            {
                                                Questions,
                                                NewQuestion,
                                                Answer,
                                            },
                                            {
                                                defaultNavigationOptions: {
                                                    headerTransparent: true,
                                                    headerTintColor: '#FFF',
                                                    headerLeftContainerStyle: {
                                                        marginLeft: 20,
                                                    },
                                                },
                                                cardStyle: {
                                                    backgroundColor: '#F5F5F5',
                                                },
                                            }
                                        ),
                                        navigationOptions: {
                                            tabBarLabel: 'Pedir Ajuda',
                                            activeTintColor: '#EE4E62',
                                            tabBarIcon: (
                                                <Icon
                                                    name="live-help"
                                                    size={20}
                                                    color="#999999"
                                                />
                                            ),
                                        },
                                    },
                                },
                                {
                                    tabBarOptions: {
                                        keyboardHidesTabBar: true,
                                        activeTintColor: '#EE4E62',
                                        inactiveTintColor: '#999999',
                                        style: {
                                            borderColor: '#DDDDDD',
                                            borderStyle: 'solid',
                                            backgroundColor: '#FFFFFF',
                                            padding: 15,
                                            height: 70,
                                        },
                                    },
                                }
                            ),
                        },
                    },
                    {
                        defaultNavigationOptions: navigation => ({
                            header: <Header {...navigation} />,
                        }),
                        cardStyle: {
                            backgroundColor: '#F5F5F5',
                        },
                    }
                ),
            },
            {
                initialRouteName: signedIn ? 'App' : 'Sign',
            }
        )
    );
