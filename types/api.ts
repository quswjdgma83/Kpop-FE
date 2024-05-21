import Header from '../components/common/Header/index';
export interface BaseResponse<T> {
  statusCode: number;
  code: string;
  data: T;
  message: string;
  headers: string;
}
