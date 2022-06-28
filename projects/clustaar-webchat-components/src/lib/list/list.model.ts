export interface List {
    message: string;
    sections: Section[];
}

export interface Section {
    name: string;
    choices: Choice[];
}

interface Choice {
    urlImage: string;
    altImage: string;
    name: string;
}