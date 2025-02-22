export interface Note {
  _id: string;
  __v: number;
  title: string;
  content: string;
}

export interface CreateNote {
  title: string;
  content: string;
}

export interface ResponseError {
  error: string;
  message: string;
  status: number;
}