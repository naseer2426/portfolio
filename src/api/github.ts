import { Octokit } from "@octokit/rest";
import * as emoji from 'node-emoji'

const USERNAME = 'naseer2426';
const PORTFOLIO_READY_TOPIC = 'portfolio-ready';
const octokit = new Octokit({
    auth: import.meta.env.VITE_GITHUB_TOKEN,
});

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
    const { data } = await octokit.rest.search.repos({
        q:`${PORTFOLIO_READY_TOPIC} in:topics user:${USERNAME}`,
        per_page: 100,
    });

    let projects:GithubProject[] = []
    for (const repo of data.items) {
        const { data: languages } = await octokit.rest.repos.listLanguages({
            owner: USERNAME,
            repo: repo.name,
        });
        const topics = repo.topics?.filter((topic) => topic !== PORTFOLIO_READY_TOPIC) || [];
        const tags = topics.concat(Object.keys(languages));

        const imageUrls = await getRepositoryReadmeImages(USERNAME, repo.name, repo.default_branch);

        projects.push({
            title: emoji.emojify(repo.name),
            description: emoji.emojify(repo.description? repo.description : ""),
            projectLink: repo.homepage,
            githubLink: repo.html_url,
            tags: tags,
            images: imageUrls,
        });
    }
    return {data: projects};
  } catch (error:any) {
    return {error: error.message};
  }
}


export async function getRepositoryReadmeImages(owner: string, repo: string, defaultBranch: string):Promise<string[]> {
    const { data } = await octokit.rest.repos.getReadme({
        owner,
        repo,
    });
    const readme = window.atob(data.content);
    const imageUrls = [];
    const imageRegex = /!\[.*?\]\((.*?)\)/g;
    let match;
    while ((match = imageRegex.exec(readme)) !== null) {
        const url = getFullImageUrl(owner, repo, match[1], defaultBranch);
        imageUrls.push(url);
    }
    return imageUrls;
}

function getFullImageUrl(owner: string, repo: string, path: string, defaultBranch: string):string {
    if (path.startsWith("http")) {
        return path;
    }
    return `https://github.com/${owner}/${repo}/blob/${defaultBranch}/${path}?raw=true`;
}
