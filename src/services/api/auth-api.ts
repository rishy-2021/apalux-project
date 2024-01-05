import { ApiResponse } from 'apisauce';
import { User } from '../../models/user/user';
import { apiGateway } from './api-config';

export type SendOtpResponse = { success: boolean, data?: { otp: string } }

export type SendOtpRequestBody = { mobile: string }

export type SignInRequestBody = {email: string; password: string
}

export type SignInResponse = { accessToken: string; user: User }

export type SignUpResponse = {sucess: boolean, message : string}

export type EmailVerificationResponse = SignInResponse

export type EmailVerificationPathParams = {
  id: string
  accessToken: string
}
export type EmailVerificationQueryParams = {}

export type SignUpRequestBody = {
  email: string
  password: string
  confirmPassword?: string
}

export const authenticationApi = {
  async signIn({
    requestBody,
  }: {
    requestBody: SignInRequestBody
  }): Promise<ApiResponse<SignInResponse>> {
    return apiGateway.post(`/auth/signin`, requestBody);
  },

  async signUp({
    requestBody,
  }: {
    requestBody: SignUpRequestBody
  }): Promise<ApiResponse<SignUpResponse>> {
    return apiGateway.post(`/auth/signup`, requestBody);
  },

  async verifyEmail({
    pathParams,
    queryParams
  } : {
    pathParams: EmailVerificationPathParams,
    queryParams: EmailVerificationQueryParams
  }) : Promise<ApiResponse<EmailVerificationResponse>>{
    const { id, accessToken } = pathParams;
    return apiGateway.get(`/auth/verify-email/${id}/${accessToken}`, queryParams)
  }
};
