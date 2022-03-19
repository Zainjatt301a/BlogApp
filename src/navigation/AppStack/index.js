import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Profile, BlogDetail, Comments, CreateBlog, Favorite } from '../../container';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { headerColor } from '../../constants';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AppStack() {
    const HomeStacks = () => {
        return (
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: true,
                        title: "Home",
                        headerStyle: {
                            backgroundColor: headerColor,
                        },
                        headerTitleStyle: {
                            color: "white"
                        }
                    }}
                />

                <Stack.Screen
                    name="BlogDetail"
                    component={BlogDetail}
                    options={{
                        headerShown: true,
                        title: "Blog Detail",
                        headerStyle: {
                            backgroundColor: headerColor,
                        },
                        headerTitleStyle: {
                            color: "white"
                        }
                    }}
                />
                <Stack.Screen
                    name="Comments"
                    component={Comments}
                    options={{
                        headerShown: true,
                        title: "Comments",
                        headerStyle: {
                            backgroundColor: headerColor,
                        },
                        headerTitleStyle: {
                            color: "white"
                        }
                    }}
                />
                <Stack.Screen

                    name="CreateBlog"
                    component={CreateBlog}
                    options={{
                        headerShown: true,
                        title: "Create Blog",
                        headerStyle: {
                            backgroundColor: headerColor,
                        },
                        headerTitleStyle: {
                            color: "white"
                        }
                    }}

                />

            </Stack.Navigator>
        )
    }

    const ProfileStacks = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        headerShown: true,
                        title: "Profile",
                        headerStyle: {
                            backgroundColor: headerColor,
                        },
                        headerTitleStyle: {
                            color: "white"
                        }
                    }}
                />
                <Stack.Screen
                    name="Favorite"
                    component={Favorite}
                    options={{
                        headerShown: true,
                        title: "Favorite",
                        headerStyle: {
                            backgroundColor: headerColor,
                        },
                        headerTitleStyle: {
                            color: "white"
                        }
                    }}
                />
            </Stack.Navigator>
        )
    }
    return (

        <Tab.Navigator
            initialRouteName='homeStacks'
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarActiveBackgroundColor: headerColor,
                tabBarActiveTintColor: "white"
            }}

        >
            <Tab.Screen name="homeStacks" component={HomeStacks}
                options={{
                    headerShown: false,
                    tabBarIcon: () => { return < AntDesign name="home" size={24} color="black" /> },
                    title: "Home"
                }}
            />
            <Tab.Screen name="profileStacks" component={ProfileStacks}
                options={{
                    tabBarIcon: () => { return < AntDesign name="profile" size={24} color="black" /> },
                    title: "Profile",
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    );
}

export default AppStack