import { useState, useEffect } from "react";
import { apiFetch } from "../../../service/api";
import { ProjectModel } from "@/models/projectModel";

type ProjectData = Pick<ProjectModel, "_id" | "name" | "categorie" | "image" | "date">;

function useHighlights() {
  const [latestProjects, setLatestProject] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchHighlights() {
      try {
        const data = apiFetch<ProjectData[]>('projects', {
          method: 'GET'
        });
        const sortProjects = [...(await data)].sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);

          return dateB.getTime() - dateA.getTime();
        });
        setLatestProject(sortProjects.slice(0, 6));
        setLoading(false);
      } catch (err: unknown) {
        setError(err as string);
        setLoading(false);
      }
    }

    fetchHighlights();
  },[]);
  
  return { latestProjects, loading, error };
}

export default useHighlights;