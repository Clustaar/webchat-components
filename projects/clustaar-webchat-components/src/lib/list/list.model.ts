export interface List {
    type: 'send_choices_list_action';
    message: string;
    sections: Section[];
}

export interface Section {
    type: 'section';
    title: string;
    choices: Choice[];
}

interface Choice {
    type: 'choice';
    title: string;
    imageUrl?: string;
}
