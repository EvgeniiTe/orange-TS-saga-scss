export interface AccData {
    id: number;
    login: string;
    url: string;
    avatarUrl: string;
}

export interface AccListState {
    data: AccData[];
    loading: boolean;
    error: string | null;
}

export interface AccSelectedRepo {
    id: number;
    name: string;
    description: string;
    url: string;
    pushedAt: string;
}

export interface AccSelectedState {
    data: AccSelectedRepo[];
    loading: boolean;
    error: string | null;
}

export interface RepoInfo {
    repoName: string;
    description: string;
    urlRepo: string;
    pushedAt: string;
}
export interface RepoSelectedData {
    repoInfo: RepoInfo;
    readme: string;
}

export interface RepoSelectedState {
    data: RepoSelectedData | null;
    loading: boolean;
    error: string | null;
}

export interface State {
    accList: AccListState,
    accSelected: AccSelectedState,
    repoSelected: RepoSelectedState,
}
