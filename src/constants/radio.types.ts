export type Response = {
  motive: string;
  message: string;
  statusCode: number;
  extra?: Extra;
};

export type Extra = {
  data?: any;
  err?: string;
};
