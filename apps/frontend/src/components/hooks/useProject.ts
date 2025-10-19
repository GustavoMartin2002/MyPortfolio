import { useEffect, useState } from "react";
import { ProjectModel } from "@/models/projectModel";
import { apiFetch } from "../../../service/api";

function useProject(id: string) {
  const [project, setProject] = useState<ProjectModel | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProject() {
      try {
        const response = await apiFetch<ProjectModel>(`project/${id}`, {
          method: 'GET',
        });
        setProject(response);
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
    fetchProject();
  }, [id]);
  return { project, loading, error };
}

export default useProject;