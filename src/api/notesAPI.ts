import type { AxiosResponse } from "axios";
import { api } from ".";
import { unknownError } from "./errors";
import type { CreateNote, Note, ResponseError } from "../types/api";

const route: string = '/notes';

export const createNote = async (data: CreateNote): Promise<Note | ResponseError> => {
  try {
    const response: AxiosResponse<Note> = await api.post(route, data);
    return response.data;
  } catch(error: any) {
    const responseErrorData: ResponseError = error.response?.data;

    return responseErrorData || unknownError(route);
  }
}

export const getAllNotes = async (): Promise<Note | ResponseError> => {
  try {
    const response: AxiosResponse<Note> = await api.get(route);

    return response.data;
  } catch(error: any) {
    const responseErrorData: ResponseError = error.response.data;

    return responseErrorData || unknownError(route);
  }
}