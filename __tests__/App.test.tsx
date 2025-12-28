/**
 * @format
 */

import React from 'react';
import { render } from '@testing-library/react-native';
import { HomeScreen } from '../src/screens/HomeScreen';

describe('HomeScreen', () => {
  it('renders HomeScreen correctly', () => {
    const { getByText, getByTestId } = render(<HomeScreen />);

    expect(getByTestId('home-screen')).toBeTruthy();
    expect(getByText('The Karmiq')).toBeTruthy();
    expect(getByText('Hi Arjuna,')).toBeTruthy();
  });

  it('renders greeting and subtitle', () => {
    const { getByText } = render(<HomeScreen />);

    expect(getByText('Your cosmic journey begins here.')).toBeTruthy();
  });

  it('renders daily insight card with best time', () => {
    const { getByText } = render(<HomeScreen />);

    expect(getByText('Your Day')).toBeTruthy();
    expect(getByText('Your Week')).toBeTruthy();
    expect(getByText('Today, presence is greater than impulse.')).toBeTruthy();
  });

  it('renders action buttons', () => {
    const { getByTestId } = render(<HomeScreen />);

    expect(getByTestId('resume-lesson-button')).toBeTruthy();
    expect(getByTestId('continue-blog-button')).toBeTruthy();
  });

  it('renders with custom user name', () => {
    const { getByText } = render(<HomeScreen userName="Krishna" />);

    expect(getByText('Hi Krishna,')).toBeTruthy();
  });
});
