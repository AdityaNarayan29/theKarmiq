import { renderHook, act } from '@testing-library/react-native';
import { useAppStore } from '../../src/store/useAppStore';

describe('useAppStore', () => {
  beforeEach(() => {
    // Reset store before each test
    const { result } = renderHook(() => useAppStore());
    act(() => {
      result.current.reset();
    });
  });

  it('has correct initial state', () => {
    const { result } = renderHook(() => useAppStore());

    expect(result.current.isLoading).toBe(false);
    expect(result.current.user).toBeNull();
  });

  it('setLoading updates loading state', () => {
    const { result } = renderHook(() => useAppStore());

    act(() => {
      result.current.setLoading(true);
    });

    expect(result.current.isLoading).toBe(true);

    act(() => {
      result.current.setLoading(false);
    });

    expect(result.current.isLoading).toBe(false);
  });

  it('setUser updates user state', () => {
    const { result } = renderHook(() => useAppStore());
    const mockUser = {
      id: '1',
      email: 'test@example.com',
      name: 'Test User',
    };

    act(() => {
      result.current.setUser(mockUser);
    });

    expect(result.current.user).toEqual(mockUser);
  });

  it('reset clears all state', () => {
    const { result } = renderHook(() => useAppStore());
    const mockUser = {
      id: '1',
      email: 'test@example.com',
      name: 'Test User',
    };

    act(() => {
      result.current.setLoading(true);
      result.current.setUser(mockUser);
    });

    expect(result.current.isLoading).toBe(true);
    expect(result.current.user).toEqual(mockUser);

    act(() => {
      result.current.reset();
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.user).toBeNull();
  });
});
