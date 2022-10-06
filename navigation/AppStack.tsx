import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Pressable } from 'react-native';
import Colors from '../constants/Colors';

import { HomeScreen } from '../screens';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const AppStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Root"
				component={BottomTabNavigator}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="NotFound"
				component={NotFoundScreen}
				options={{ title: 'Oops!' }}
			/>
			<Stack.Group screenOptions={{ presentation: 'modal' }}>
				<Stack.Screen name="Modal" component={ModalScreen} />
			</Stack.Group>
		</Stack.Navigator>
	);
};

function BottomTabNavigator() {
	return (
		<BottomTab.Navigator
			initialRouteName="TabOne"
			screenOptions={{
				tabBarActiveTintColor: Colors.light.tint,
			}}
		>
			<BottomTab.Screen
				name="TabOne"
				component={HomeScreen}
				options={({ navigation }) => ({
					title: 'Tab One',
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="code" color={color} />
					),
					headerRight: () => (
						<Pressable
							onPress={() => navigation.navigate('Modal')}
							style={({ pressed }) => ({
								opacity: pressed ? 0.5 : 1,
							})}
						>
							<FontAwesome
								name="info-circle"
								size={25}
								color={Colors.light.text}
								style={{ marginRight: 15 }}
							/>
						</Pressable>
					),
				})}
			/>
			<BottomTab.Screen
				name="TabTwo"
				component={HomeScreen}
				options={{
					title: 'Tab Two',
					tabBarIcon: ({ color }) => (
						<TabBarIcon name="code" color={color} />
					),
				}}
			/>
		</BottomTab.Navigator>
	);
}
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>['name'];
	color: string;
}) {
	return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
