import { ProjectModel } from "@/models/projectModel";
import { apiFetch } from "../../../service/api";
import { useEffect, useState } from "react";

type ProjectData = Pick<ProjectModel, "_id" | "name" | "categorie" | "image" | "date" | "technologies" | "link">;

function useAllProjects() {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(()=> {
    async function fetchProjectFilter() {
      try {
        const data = apiFetch<ProjectData[]>('projects', {
          method: 'GET'
        });

        const sortProjects = [...(await data)].sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);

          return dateB.getTime() - dateA.getTime();
        });

        setProjects(sortProjects);
        setLoading(false);
      } catch (err: unknown) {
        setError(err as string);
        setLoading(false);
      }
    }
    fetchProjectFilter();
  }, []);

  return { projects, loading, error };
}

export default useAllProjects;