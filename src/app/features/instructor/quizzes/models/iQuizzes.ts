export interface IQuizzes {
  _id: string
  code: string
  title: string
  description: string
  status: string
  instructor: string
  group: string
  questions_number: number
  questions: IQuizQuestion[]
  schadule: string
  duration: number
  score_per_question: number
  type: string
  difficulty: string
  updatedAt: string
  createdAt: string
  __v: number
  closed_at?: string
  participants: number
}


export interface IQuizQuestion {
  answer : string,
  question: string
}

export interface IQuizResponse {
  data: IQuizResponseData
  message: string
}

export interface IQuizResponseData {
  code: string
  title: string
  description: string
  status: string
  instructor: string
  group: string
  questions_number: number
  questions: string[]
  schadule: string
  duration: number
  score_per_question: number
  type: string
  difficulty: string
  _id: string
  updatedAt: string
  createdAt: string
  __v: number
}
