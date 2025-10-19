import { renderHook, waitFor } from '@testing-library/react';
import useAllProjects from '../components/hooks/useAllProjects';
import { apiFetch } from '../../service/api';
import { ProjectModel } from '@/models/projectModel';

// Mock: module and function
jest.mock('../../service/api', () => ({
  apiFetch: jest.fn(),
}));

// mock function for tests
const mockApiFetch = apiFetch as jest.Mock;

describe('useAllProjects', () => {
  // Before each test, reset the mock to ensure test isolation
  beforeEach(() => {
    mockApiFetch.mockReset();
  });

  test('return the correct initial state', async () => {
    // Act
    const { result } = renderHook(() => useAllProjects());

    // Assert
    expect(result.current.projects).toEqual([]);
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();
    expect(result.current.totalPages).toBe(1);
    expect(result.current.currentPage).toBe(1);
    await waitFor(() => expect(result.current.loading).toBe(false));
  });

  test('fetch and return projects successfully', async () => {
    // Arrange
    const mockProjects: Partial<ProjectModel>[] = [
      { _id: '1', name: 'Project 1' },
      { _id: '2', name: 'Project 2' },
      { _id: '3', name: 'Project 3' },
    ];

    mockApiFetch.mockResolvedValue({
      data: mockProjects,
      currentPage: 1,
      totalPages: 1,
      totalProjects: 3,
    });

    // Act
    const { result } = renderHook(() => useAllProjects());
    
    // Assert
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.projects).toEqual(mockProjects);
    });
    expect(result.current.error).toBeNull();
  });

  test('handle API errors correctly', async () => {
    // Arrange
    const errorMessage = 'API Failure';
    mockApiFetch.mockRejectedValue(new Error(errorMessage));

    // Act
    const { result } = renderHook(() => useAllProjects());

    // Assert
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(errorMessage);
    });
    expect(result.current.projects).toEqual([]);
  });
});