// bottomTabNavigator.js
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CartScreen from '../features/cart/CartScreen';
import ProfileScreen from '../features/profile/ProfileScreen';
import ProductsStack from './product-stack-navigator';
import TabIcon from '../components/tab-icon';
import {BottomTabParamList} from './types';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator: React.FC<{}> = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Products"
        component={ProductsStack}
        options={{
          tabBarIcon: ({color}) => <TabIcon name="home" color={color} />,
          tabBarLabel: () => null,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => (
            <TabIcon name="shoppingcart" color={color} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => <TabIcon name="user" color={color} />,
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
