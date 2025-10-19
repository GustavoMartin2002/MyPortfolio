import { ProjectModel } from "@/models/projectModel";
import useHighlights from "../components/hooks/useHighlights";
import { renderHook, waitFor } from "@testing-library/react";
import { apiFetch } from "../../service/api";

// Mock: module and function
jest.mock('../../service/api', () => ({
  apiFetch: jest.fn()
}));

// mock function for tests
const mockApiFetch = apiFetch as jest.Mock;

describe('useHighlights', () => {
  // Before each test, reset the mock to ensure test isolation
  beforeEach(() => {
    mockApiFetch.mockReset();
  });

  test('return initial values', async () => {
    // Act
    const { result } = renderHook(useHighlights);

    // Assert
    expect(result.current.latestProjects).toEqual([]);
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();
    await waitFor(() => expect(result.current.loading).toBe(false));
  });

  test('fetch and return the latest projects successfully', async () => {
    // Arrange
    const mockLatestProjects: Partial<ProjectModel>[] = [
      { _id: '1', name: 'Latest Project 1' },
      { _id: '2', name: 'Latest Project 2' },
      { _id: '3', name: 'Latest Project 3' },
      { _id: '4', name: 'Latest Project 4' },
      { _id: '5', name: 'Latest Project 5' },
      { _id: '6', name: 'Latest Project 6' },
    ];

    mockApiFetch.mockResolvedValue({
      data: mockLatestProjects,
      currentPage: 1,
      totalPages: 1,
      totalProjects: 6,
    });

    // Act
    const { result } = renderHook(useHighlights);
    
    // Assert
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.latestProjects).toEqual(mockLatestProjects);
    });
    expect(result.current.error).toBeNull();
  });

  test('handle the error correctly when the API fails', async () => {
    // Arrange
    const errorMessage = "Could not fetch highlights";
    mockApiFetch.mockRejectedValue(new Error(errorMessage));
    
    // Act
    const { result } = renderHook(useHighlights);
    
    // Assert
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(errorMessage);
    });
    expect(result.current.latestProjects).toEqual([]);
  });
});