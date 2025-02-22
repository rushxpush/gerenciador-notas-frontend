import type { ResponseError } from "../types/api";

export const unknownError = (route: string): ResponseError => { 
  return {
    error: "Something went wrong", 
    message: "Cannot POST" + route, 
    status: 500 
  }
};

