'use client'

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
        const data = apiFetch<ProjectModel>(`project/${id}`, {
          method: 'GET',
        });

        setProject(await data);
        setLoading(false)
      } catch (err: unknown) {
        setError(err as string);
        setLoading(false);
      }
    }

    fetchProject();
  }, [id])
  return { project, loading, error }
}

export default useProject;