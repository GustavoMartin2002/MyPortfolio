import { renderHook, waitFor } from "@testing-library/react";
import { apiFetch } from "../../service/api";
import useProject from "../components/hooks/useProject";
import { ProjectModel } from "@/models/projectModel";

// Mock: module and function
jest.mock('../../service/api', () => ({
  apiFetch: jest.fn()
}));

// mock function for tests
const mockApiFetch = apiFetch as jest.Mock;

// mock project
const mockProject: ProjectModel = {
  _id: 'ABC',
  name: 'Portfolio',
  description: 'portfolio description',
  categorie: 'web',
  image: 'ABC.webp',
  date: '2025-05-15',
  technologies: ['Next.js', 'Fastify', 'mongoDB'],
  link: 'https://',
  github: 'https://',
};

describe('useProject', () => {
  // Before each test, reset the mock to ensure test isolation
  beforeEach(() => {
    mockApiFetch.mockReset();
  });

  test('return initial values', async () => {
    // Act
    const { result } = renderHook(() => useProject(mockProject._id));

    // Assert
    expect(result.current.loading).toBe(true);
    expect(result.current.project).toBeNull();
    expect(result.current.error).toBeNull();
    await waitFor(() => expect(result.current.loading).toBe(false));
  });

  test('return a project by id successfully', async () => {
    // Arrange
    mockApiFetch.mockResolvedValue(mockProject);
    
    // Act
    const { result } = renderHook(() => useProject(mockProject._id));
    
    // Assert
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.project).toEqual(mockProject);
    });
    expect(result.current.error).toBeNull();
  });

  test('handle the error correctly when the API fails', async () => {
    // Arrange
    const errorMessage = "Project not found";
    mockApiFetch.mockRejectedValue(new Error(errorMessage));
    
    // Act
    const { result } = renderHook(() => useProject(mockProject._id));
    
    // Assert
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(errorMessage);
    });
    expect(result.current.project).toBeNull();
  });
});