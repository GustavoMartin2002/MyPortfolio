import { ProjectModel } from "@/models/projectModel";
import useHighlights from "../components/hooks/useHighlights";
import { renderHook, waitFor } from "@testing-library/react";
import { apiFetch } from "../../service/api";

// Mock: module and function
jest.mock('../../service/api', () => ({
  apiFetch: jest.fn()
}))

// mock function for tests
const mockApiFetch = apiFetch as jest.Mock

// tests in hook (PASS)
describe('useHighlights (TRY)', () => {
  // reset mock for next describe
  beforeEach(() => {
    mockApiFetch.mockReset()
  })

  test('return initial values', async () => {
    const { result } = renderHook(() => useHighlights()) // render function

    // verify expected the function
    expect(result.current.latestProjects).toEqual([])
    expect(result.current.loading).toBe(true)
    expect(result.current.error).toBeNull()

    // console.log(result.current.projects)
    // console.log(result.current.loading)
    // console.log(result.current.error)

    // await loading for false
    await waitFor(() => expect(result.current.loading).toBe(false))
  })

  test('return last 6 projects recents for by date', async () => {
    // simulate projects
    const mockLastestProjects: ProjectModel[] = [
      {
        _id: '6',
        name: 'project 6',
        description:'description project 6',
        categorie: 'web',
        image: '6.jpg',
        date: '2025-05-06',
        technologies: [],
        link: 'https://',
        github: 'https://',
      },
      {
        _id: '5',
        name: 'project 5',
        description:'description project 5',
        categorie: 'web',
        image: '5.jpg',
        date: '2025-05-07',
        technologies: [],
        link: 'https://',
        github: 'https://',
      },
      {
        _id: '4',
        name: 'project 4',
        description:'description project 4',
        categorie: 'web',
        image: '5.jpg',
        date: '2025-05-08',
        technologies: [],
        link: 'https://',
        github: 'https://',
      },
      {
        _id: '3',
        name: 'project 3',
        description:'description project 3',
        categorie: 'web',
        image: '3.jpg',
        date: '2025-05-09',
        technologies: [],
        link: 'https://',
        github: 'https://',
      },
      {
        _id: '2',
        name: 'project 2',
        description:'description project 2',
        categorie: 'web',
        image: '2.jpg',
        date: '2025-05-10',
        technologies: [],
        link: 'https://',
        github: 'https://',
      },
      {
        _id: '1',
        name: 'project 1',
        description:'description project 1',
        categorie: 'web',
        image: '1.jpg',
        date: '2025-05-11',
        technologies: [],
        link: 'https://',
        github: 'https://',
      },
    ]

    // simulate requisition fetch
    mockApiFetch.mockResolvedValue(mockLastestProjects)
    const { result } = renderHook(() => useHighlights()) // render function

    // sorted projects by date
    const sortByDateProjects = mockLastestProjects.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )

    // pull latest 6 projects
    const latestProjects = sortByDateProjects.slice(0, 6)

    // await loading for false
    await waitFor(() => expect(result.current.loading).toBe(false))

    // verify expected the function
    expect(result.current.latestProjects).toEqual(latestProjects)
    expect(result.current.loading).toBe(false)
    expect(result.current.error).toBeNull()
    
    // console.log(result.current.projects)
    // console.log(result.current.loading)
    // console.log(result.current.error)
  })
})

// tests in hook (FAIL)
describe('useHighlights (CATCH)', () => {
  beforeEach(() => {
    mockApiFetch.mockReset()
  })

  test('return latest projects empty, loading is false and error is not null.', async () => {
    // simulate requisition projects
    const mockLastestProjects: ProjectModel[] = [
      {
        _id: 'ABC',
        name: 'project ABC',
        description:'description project ABC',
        categorie: 'web',
        image: 'ABC.jpg',
        date: '2025-05-11',
        technologies: [],
        link: 'https://',
        github: 'https://',
      },
    ]

    // simulate requisition reject
    mockApiFetch.mockRejectedValue(mockLastestProjects)
    const { result } = renderHook(() => useHighlights()) // render function

    // await loading change for false
    await waitFor(() => expect(result.current.loading).toBe(false))

    // verify expected the function
    expect(result.current.latestProjects).toEqual([])
    expect(result.current.loading).toBe(false)
    expect(result.current.error).not.toBeNull()

    // console.log(result.current.latestProjects)
    // console.log(result.current.loading)
    // console.log(result.current.error)
  })
})