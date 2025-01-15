import axios from 'axios';

export type GithubProject = {
    title: string;
    description: string | null;
    images?: string[];
    projectLink: string | null;
    githubLink: string;
    tags?: string[];
}

export type ListProjectsResp = {
    data?: GithubProject[];
    error?: string;
}

export async function listPortfolioReadyProjects():Promise<ListProjectsResp> {
  try {
    const resp = await axios.get<ListProjectsResp>(`${import.meta.env.VITE_BACKEND_URL}/projects/cache` as string);
    return resp.data;
  } catch (error:any) {
    return { error: error.message };
  }
}
