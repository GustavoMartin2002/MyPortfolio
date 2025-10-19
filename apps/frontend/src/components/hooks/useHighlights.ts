import { useState, useEffect } from "react";
import { apiFetch } from "../../../service/api";
import { ProjectModel } from "@/models/projectModel";

type ProjectData = Pick<ProjectModel, "_id" | "name" | "categorie" | "image">;
interface apiResponse {
  data: ProjectData[];
  currentPage: number;
  totalPages: number;
  totalProjects: number;
}

function useHighlights() {
  const [latestProjects, setLatestProject] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchHighlights() {
      try {
        const response = await apiFetch<apiResponse>('projects?offset=1&limit=6', {
          method: 'GET',
        });
        setLatestProject(response.data);
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
    fetchHighlights();
  },[]);
  
  return { latestProjects, loading, error };
}

export default useHighlights;