import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Profile, BlogDetail, Comments, CreateBlog, Favorite, MyBlogs } from '../../container';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { headerColor } from '../../constants';
import { Button } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AppStack() {
    const HomeStacks = () => {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerBackTitleStyle: {
                        color: "white"
                    }
                }}
                initialRouteName='Home'>
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
                        },
                        headerTintColor: "white"
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
                        },
                        headerTintColor: "white"
                    }}
                />
            </Stack.Navigator>
        )
    }

    const ProfileStacks = () => {
        return (
            <Stack.Navigator initialRouteName='Profile'>
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
                    name="MyBlog"
                    component={MyBlogs}
                    options={{
                        headerShown: true,
                        title: "My Blog",
                        headerStyle: {
                            backgroundColor: headerColor,
                        },
                        headerTitleStyle: {
                            color: "white"
                        },
                        headerTintColor: "white"
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
                    tabBarIcon: ({ focused }) => { return < AntDesign name="home" size={24} color={focused ? "white" : "black"} /> },
                    title: "Home"
                }}


            />

            <Tab.Screen name="CreateBlog" component={CreateBlog}
                options={{
                    tabBarIcon: ({ focused }) => { return <Ionicons name="create-outline" size={24} color={focused ? "white" : "black"} /> },
                    title: "Create Blog",
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: headerColor,
                    },
                    headerTitleStyle: {
                        color: "white"
                    }
                }}
            />

            <Tab.Screen name="Favorite" component={Favorite}
                options={{
                    tabBarIcon: ({ focused }) => { return <MaterialIcons name="favorite-border" size={24} color={focused ? "white" : "black"} /> },
                    title: "Favorite",
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: headerColor,
                    },
                    headerTitleStyle: {
                        color: "white"
                    },
                }}

            />
            <Tab.Screen name="profileStacks" component={ProfileStacks}
                options={{
                    tabBarIcon: ({ focused }) => { return < AntDesign name="profile" size={24} color={focused ? "white" : "black"} /> },
                    title: "Profile",
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    );
}

export default AppStack