import { ProjectModel } from '@/models/projectModel';
import useAllProjects from '../components/hooks/useAllProjects';
import { renderHook, waitFor } from '@testing-library/react';
import { apiFetch } from '../../service/api';

// Mock: module and function
jest.mock('../../service/api', () => ({
  apiFetch: jest.fn()
}))

// mock function for tests
const mockApiFetch = apiFetch as jest.Mock

// tests in hook (PASS)
describe('useAllProjects (TRY)', () => {
  // reset mock for next describe
  beforeEach(() => {
    mockApiFetch.mockReset()
  })

  test('return initial values', async () => {
    const { result } = renderHook(() => useAllProjects()) // render function

    // verify expected the function
    expect(result.current.projects).toEqual([])
    expect(result.current.loading).toBe(true)
    expect(result.current.error).toBeNull()

    // console.log(result.current.projects)
    // console.log(result.current.loading)
    // console.log(result.current.error)

    // await loading for false
    await waitFor(() => expect(result.current.loading).toBe(false))
  })

  test('return all projects order by date', async () => {
    // simulate projects
    const mockProjects: ProjectModel[] = [
      {
        _id: '3',
        name: 'Projeto 3',
        description:'description projeto 3',
        categorie: 'web',
        image: '3.jpg',
        date: '2025-05-10',
        technologies: [],
        link: 'https://',
        github: 'https://',
      },
      {
        _id: '2',
        name: 'Projeto 2',
        description:'description projeto 2',
        categorie: 'mobile',
        image: '2.jpg',
        date: '2025-05-11',
        technologies: [],
        link: 'https://',
        github: 'https://',
      },
      {
        _id: '1',
        name: 'Projeto 1',
        description:'description projeto 1',
        categorie: 'software',
        image: '1.jpg',
        date: '2025-05-12',
        technologies: [],
        link: 'https://',
        github: 'https://',
      },
    ]

    // simulate requisition fetch
    mockApiFetch.mockResolvedValue(mockProjects)
    const { result } = renderHook(()=> useAllProjects()) // render function

    // sorted projects by date
    const sortByDateProjects = mockProjects.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    )

    // await loading for false
    await waitFor(() => expect(result.current.loading).toBe(false))

    // verify expected the function
    expect(result.current.projects).toEqual(sortByDateProjects)
    expect(result.current.loading).toBe(false)
    expect(result.current.error).toBeNull()
    
    // console.log(result.current.projects)
    // console.log(result.current.loading)
    // console.log(result.current.error)
  })
})

// tests in hook (FAIL)
describe('useAllProjects (CATCH)', () => {
  beforeEach(() => {
    mockApiFetch.mockReset()
  })

  test('return all projects empty, loading is false and error is not null', async () => {
    // simulate requisition projects
    const mockProjects: ProjectModel[] = [
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

    // simulate requisition fetch
    mockApiFetch.mockRejectedValue(mockProjects)
    const { result } = renderHook(() => useAllProjects()) //render function

    // await loading change for false
    await waitFor(() => expect(result.current.loading).toBe(false))

    // verify expected the function
    expect(result.current.projects).toEqual([])
    expect(result.current.loading).toBe(false)
    expect(result.current.error).not.toBeNull()
    
    // console.log(result.current.projects)
    // console.log(result.current.loading)
    // console.log(result.current.error)
  })
})