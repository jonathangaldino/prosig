export type SuccessReply<T> = {
  data: T;
};

export type ErrorReply = {
  error: {
    code: string;
    message: string;
  };
};
