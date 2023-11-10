import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
// Your Authentication component
import api from '../src/api';
import LoginScreen from '../src/screens/LoginScreen';

describe('Authentication', () => {
  it('should allow the user to log in', async () => {
    const loginMock = jest.spyOn(api, 'login');

    const component = render(<LoginScreen />);
    const usernameInput = component.root.findByProps({
      testID: 'username-input',
    });
    const passwordInput = component.root.findByProps({
      testID: 'password-input',
    });
    const loginButton = component.root.findByProps({testID: 'login-button'});

    // Mock the login function to resolve with a success response
    loginMock.mockResolvedValue({success: true});

    fireEvent.changeText(usernameInput, 'kminchelle');
    fireEvent.changeText(passwordInput, '0lelplR');
    fireEvent.press(loginButton);

    await waitFor(() => {
      expect(loginMock).toHaveBeenCalledWith('kminchelle', '0lelplR');
      const authenticatedMessage = component.root.findByProps({
        testID: 'authenticated-message',
      });
      expect(authenticatedMessage).toBeTruthy();
    });

    // Restore the original implementation of the login function
    loginMock.mockRestore();
  });
});
