import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface PrimaryButtonProps {
  testID?: string | undefined;
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = props => {
  const {title, onPress, style, textStyle, disabled, ...otherProps} = props;

  const buttonBackgroundColor = disabled ? 'gray' : '#6558f5';
  const buttonTextColor = disabled ? 'white' : 'white';

  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: buttonBackgroundColor}, style]}
      onPress={onPress}
      disabled={disabled}
      {...otherProps}>
      <Text style={[styles.buttonText, {color: buttonTextColor}, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 5,
  },
  buttonText: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default PrimaryButton;
