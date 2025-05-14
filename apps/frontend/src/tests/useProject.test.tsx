import { renderHook, waitFor } from "@testing-library/react"
import { apiFetch } from "../../service/api"
import useProject from "../components/hooks/useProject"
import { ProjectModel } from "@/models/projectModel"

// Mock: module and function
jest.mock('../../service/api', () => ({
  apiFetch: jest.fn()
}))

// mock function for tests
const mockApiFetch = apiFetch as jest.Mock

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
}

// tests in hook (PASS)
describe('useProject (TRY)', () => {
  beforeEach(() => {
    mockApiFetch.mockReset()
  })

  test('return initial values', async () => {
    const { result } = renderHook(() => useProject(mockProject._id)) //render function

    // verify expected the function
    expect(result.current.project).toBeNull()
    expect(result.current.loading).toBe(true)
    expect(result.current.error).toBeNull()

    // console.log(result.current.project)
    // console.log(result.current.loading)
    // console.log(result.current.error)

    // await loading for false
    await waitFor(() => expect(result.current.loading).toBe(false))
    // console.log(result.current.loading)
  })

  test('return project by id', async () => {
    // simulate requisition fetch
    mockApiFetch.mockResolvedValue(mockProject)
    const { result } = renderHook(() => useProject(mockProject._id)) // render function

    // await loading for false
    await waitFor(() => expect(result.current.loading).toBe(false))

    // verify expected the function
    expect(result.current.project).toEqual(mockProject)
    expect(result.current.loading).toBe(false)
    expect(result.current.error).toBeNull()

    // console.log(result.current.project)
    // console.log(result.current.loading)
    // console.log(result.current.error)
  })
})

// tests in hook (FAIL)
describe('useProject (CATCH)', () => {
  beforeEach(() => {
    mockApiFetch.mockReset()
  })
  
  test('return project null, loading is false and error is not null', async () => {
    // simulate requisition fetch
    mockApiFetch.mockRejectedValue(mockProject)
    const { result } = renderHook(() => useProject(mockProject._id)) // render function

    // await loading change for false
    await waitFor(() => expect(result.current.loading).toBe(false))

    // verify expected the function
    expect(result.current.project).toBeNull()
    expect(result.current.loading).toBe(false)
    expect(result.current.error).not.toBeNull()

    // console.log(result.current.project)
    // console.log(result.current.loading)
    // console.log(result.current.error)
  })
})