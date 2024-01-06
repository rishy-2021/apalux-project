import { ApiResponse } from 'apisauce';
import { apiGateway } from './api-config';
import { User } from '../../models/user/user';

export type AddUserResponse = { success: boolean, user: User  }

export type AddUserPathParams = {
  id?:string
}

export type DashUser = {
  _id: string;
  email?:string
  designation: string
  name: string
  address: Address
}

export type AddUserRequestBody = {
    _id?: string;
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
      return apiGateway.post(`/adddashuser`, requestBody);
    },

    async updateAdminUser({
      pathParams,
      requestBody,
    }: {
      pathParams:AddUserPathParams,
      requestBody: User
    }): Promise<ApiResponse<AddUserResponse>> {
      const {id} = pathParams
      return apiGateway.patch(`/updateadminuser/${id}`, requestBody);
    },

    async deleteDashUser({
      pathParams,
    }: {
      pathParams:AddUserPathParams,
    }): Promise<ApiResponse<AddUserResponse>> {
      const {id} = pathParams
      return apiGateway.delete(`/deleteuser/${id}`);
    },

    async getDashUsers(): Promise<ApiResponse<DashUser[]>> {
      return apiGateway.get(`/getdashboardusers`);
    }
  };