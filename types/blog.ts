export type Post = {
    fileName: string;
    metadata: Metadata;
};

export type Metadata = {
    title: string;
    date: string;
    categories: string[];
    author: string;
    excerpt: string;
};

export type Author = {
    name: string;
    avatar: string;
};
