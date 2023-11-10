import React from 'react';
import {View, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

interface TabIconProps {
  name: string;
  color: string;
}

const TabIcon: React.FC<TabIconProps> = ({name, color}) => (
  <View
    // eslint-disable-next-line react-native/no-inline-styles
    style={{
      top: Platform.OS === 'ios' ? 10 : 0,
    }}>
    <Icon name={name} size={30} color={color} />
  </View>
);

export default TabIcon;
