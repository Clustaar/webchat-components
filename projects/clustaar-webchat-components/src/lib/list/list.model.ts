export interface List {
    type: 'send_choices_list_action';
    message: string;
    sections: Section[];
    action: Target;
}

export interface Section {
    type: 'section';
    title: string;
    choices: Choice[];
}

export interface Choice {
    type: 'choice';
    title: string;
    imageUrl?: string;
    sessionValues?: {
        key: string;
        value: string
    };
}

export interface Target {
    type: 'go_to_action';
    target: {
        type: string;
        name: string;
        id: string;
    };
}
