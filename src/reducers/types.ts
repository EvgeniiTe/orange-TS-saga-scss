export interface AccData {
    id: number;
    login: string;
    url: string;
    avatarUrl: string;
}

export interface AccListState {
    data: AccData[];
    loading: boolean;
    error: string;
}

interface AccSelectedData {
    id: number;
    name: string;
    description: string;
    url: string;
    pushedAt: string;
}

export interface AccSelectedState {
    data: AccSelectedData[];
    loading: boolean;
    error: string;
}

interface RepoSelectedData {
    repoName: string;
    description: string;
    urlRepo: string;
    pushedAt: string;
}

export interface RepoSelectedState {
    data: RepoSelectedData[];
    loading: boolean;
    error: string;
}
