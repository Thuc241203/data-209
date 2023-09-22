import { IEmail, ILogin, IRegister, IReset, IUser } from "@/interface/auth";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
  reducerPath: "auth",
  tagTypes: ["Auth"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api",
  }),
  endpoints(builder) {
    return {
      fetchUser: builder.query<IUser[], void>({
        query: () => {
          return {
            url: "/user",
            method: "GET",
          };
        },
      }),
      registerUser: builder.mutation<IRegister, Partial<IRegister>>({
        query: (user) => {
          return {
            url: "/register",
            method: "POST",
            body: user,
          };
        },
      }),
      loginUser: builder.mutation<ILogin, Partial<ILogin>>({
        query: (user) => {
          return {
            url: "/login",
            method: "POST",
            body: user,
          };
        },
      }),
      emailPasswordUser: builder.mutation<IEmail, Partial<IEmail>>({
        query: (user) => {
          return {
            url: "/password/email",
            method: "POST",
            body: user,
          };
        },
      }),
      resetPasswordUser: builder.mutation<IReset, Partial<IReset>>({
        query: (user) => {
          return {
            url: "/password/reset",
            method: "POST",
            body: user,
          };
        },
      }),
    };
  },
});

export const {
  useFetchUserQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useEmailPasswordUserMutation,
  useResetPasswordUserMutation,
} = authApi;
export const authReducer = authApi.reducer;
export default authApi;
