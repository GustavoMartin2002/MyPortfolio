import { ProjectModel } from "@/models/projectModel";
import { apiFetch } from "../../../service/api";
import { useEffect, useState } from "react";

type ProjectData = Pick<ProjectModel, "_id" | "name" | "categorie" | "image" | "date" | "technologies" | "link">;
interface apiResponse {
  data: ProjectData[];
  currentPage: number;
  totalPages: number;
  totalProjects: number;
}

function useAllProjects() {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(()=> {
    async function fetchProjectFilter() {
      try {
        const response = await apiFetch<apiResponse>(`projects?offset=${currentPage}&limit=6`, {
          method: 'GET',
        });
        setProjects(response.data);
        setTotalPages(response.totalPages);
      } catch (err: unknown) {
        // err instanceof Error ? setError(err.message) : setError("Ocorreu um erro desconhecido.");
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Ocorreu um erro desconhecido.");
        }
      } finally {
        setLoading(false);
      }
    }
    fetchProjectFilter();
  }, [currentPage]);

  return { projects, loading, error, totalPages, currentPage, setCurrentPage };
}

export default useAllProjects;