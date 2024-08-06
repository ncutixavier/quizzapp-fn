export interface Question {
    id: string;
    title: string;
    body: string;
}

export interface GetQuestions {
    getQuestions: Question[];
}
