interface ApiResponse<T> {
    status: number;
    message: string;
    result: T;
  }
export const ApiResponse = <T>(status: number, message: string, result: T): ApiResponse<T> => {
    return {
      status,
      message,
      result,
    };
  };