import { ApiResponse } from 'apisauce';
import { apiGateway } from './api-config';
import { User } from '../../models/user/user';

export type AddUserResponse = { success: boolean, user: User  }

export type AddUserPathParams = {
  id?:string
}

export type DashUser = AddUserRequestBody

export type AddUserRequestBody = {
    id?: string;
    email?:string
    designation: string
    name: string
    address: Address
  }

  export type Address = {
    localityLine: string
    city: string
    state: string
    pinCode: string
  }

  export type DashUserQueryParams = {}

  export const userApi = {
    async addDashUser({
      requestBody,
    }: {
      requestBody: AddUserRequestBody
    }): Promise<ApiResponse<AddUserResponse>> {
      return apiGateway.post(`/auth/adddashuser`, requestBody);
    },

    async updateAdminUser({
      pathParams,
      requestBody,
    }: {
      pathParams:AddUserPathParams,
      requestBody: User
    }): Promise<ApiResponse<AddUserResponse>> {
      const {id} = pathParams
      return apiGateway.patch(`/auth/updateadminuser/${id}`, requestBody);
    },

    async getDashUsers(): Promise<ApiResponse<DashUser[]>> {
      return apiGateway.get(`/auth/getdashboardusers`);
    }
  };