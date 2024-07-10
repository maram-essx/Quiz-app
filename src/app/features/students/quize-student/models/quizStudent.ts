export interface IQuizStudent {
    title:string,
    code:string,
    description:string,
    group:string[],
    schadule:string,
    _id: string,
    duration: number,
    status: string,
    instructor: string,
   
    questions_number: number,
    questions:IQuistions [],

    
}
export interface IQuistions {
    title:string,
   options:Options,
    _id: string,

}
export interface Options {
   A:string,
   B:string,
   C:string,
   D:string,
    _id: string

}
export interface Ianswer {
    question:string,
    answer:string
}

export interface IcompletedQuiz {
    _id: string;
    code: string;
    title: string;
    description: string;
    status: string;
    instructor: string;
    group: string;
    questions_number: number;
    questions: string[];
    schadule: Date;
    participants: number;
    score_per_question: number;
    type: string;
    difficulty: string;
    closed_at: Date;
    createdAt: Date;
}