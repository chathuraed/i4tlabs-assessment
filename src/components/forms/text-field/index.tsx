import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

interface TextFieldProps extends TextInputProps {
  onChangeText: (text: string) => void;
  style?: object;
  placeholder?: string;
}

const TextField: React.FC<TextFieldProps> = props => {
  const {onChangeText, style, placeholder, ...otherProps} = props;

  return (
    <TextInput
      style={{
        padding: 16,
        borderWidth: 2,
        marginBottom: 24,
        borderRadius: 5,
        borderColor: '#cbd3da',
        fontSize: 16,
        ...style,
      }}
      placeholder={placeholder}
      onChangeText={onChangeText}
      {...otherProps}
    />
  );
};

export default TextField;
