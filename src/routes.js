import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';

import SignIn from '~/pages/SignIn';
import CheckIns from '~/pages/CheckIns';

import ListQuestions from '~/pages/AskForHelp/ListQuestions';
import NewQuestion from '~/pages/AskForHelp/NewQuestion';
import Question from '~/pages/AskForHelp/Question';

export default (signedIn = false) =>
    createAppContainer(
        createSwitchNavigator(
            {
                Sign: createSwitchNavigator({
                    SignIn,
                }),
                App: createBottomTabNavigator(
                    {
                        CheckIns,
                        AskForHelp: {
                            screen: createStackNavigator(
                                {
                                    ListQuestions,
                                    NewQuestion,
                                    Question,
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
                            navigationOptions: {
                                tabBarLabel: 'Pedir Ajuda',
                                activeTintColor: '#EE4E62',
                                tabBarIcon: ({ tintColor }) => (
                                    <Icon
                                        name="live-help"
                                        size={20}
                                        color={tintColor}
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
            {
                initialRouteName: signedIn ? 'App' : 'Sign',
            }
        )
    );
