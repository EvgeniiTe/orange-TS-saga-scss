/* eslint-disable camelcase */
export interface AccData {
    id: number;
    login: string;
    html_url: string;
    avatar_url: string;
}

export interface AccListState {
    data: AccData[] | [];
    loading: boolean;
    error: string | null;
}

export interface Owner {
    login?: string;
    html_url?: string;
    avatar_url?: string;
}
export interface AccSelectedRepo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    pushed_at: string;
    owner: Owner;
}

export interface AccSelectedState {
    data: AccSelectedRepo[];
    loading: boolean;
    error: string | null;
}

export interface RepoInfo {
    name?: string;
    description?: string;
    html_url?: string;
    pushed_at?: string;
    owner: Owner;
}

export interface Readme {
    download_url: string;
}
export interface RepoSelectedData {
    repoInfo: RepoInfo;
    readme: Readme;
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
