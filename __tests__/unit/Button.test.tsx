import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '../../src/components/common/Button';

describe('Button Component', () => {
  const mockOnPress = jest.fn();

  beforeEach(() => {
    mockOnPress.mockClear();
  });

  it('renders correctly with title', () => {
    const { getByText } = render(<Button title="Test Button" onPress={mockOnPress} />);

    expect(getByText('Test Button')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const { getByText } = render(<Button title="Press Me" onPress={mockOnPress} />);

    fireEvent.press(getByText('Press Me'));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('does not call onPress when disabled', () => {
    const { getByText } = render(<Button title="Disabled" onPress={mockOnPress} disabled />);

    fireEvent.press(getByText('Disabled'));

    expect(mockOnPress).not.toHaveBeenCalled();
  });

  it('shows loading indicator when loading', () => {
    const { queryByText } = render(
      <Button title="Loading" onPress={mockOnPress} loading testID="loading-button" />,
    );

    expect(queryByText('Loading')).toBeNull();
  });

  it('renders with different variants', () => {
    const { rerender, getByText } = render(
      <Button title="Primary" onPress={mockOnPress} variant="primary" />,
    );
    expect(getByText('Primary')).toBeTruthy();

    rerender(<Button title="Secondary" onPress={mockOnPress} variant="secondary" />);
    expect(getByText('Secondary')).toBeTruthy();

    rerender(<Button title="Outline" onPress={mockOnPress} variant="outline" />);
    expect(getByText('Outline')).toBeTruthy();
  });

  it('renders with different sizes', () => {
    const { rerender, getByText } = render(
      <Button title="Small" onPress={mockOnPress} size="small" />,
    );
    expect(getByText('Small')).toBeTruthy();

    rerender(<Button title="Medium" onPress={mockOnPress} size="medium" />);
    expect(getByText('Medium')).toBeTruthy();

    rerender(<Button title="Large" onPress={mockOnPress} size="large" />);
    expect(getByText('Large')).toBeTruthy();
  });
});
