import { apiSlice } from "../interceptor/apiSlice";

export const Users = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.mutation<any, any>({
            query: () => ({
                url: "https://dummyjson.com/users",
                method: "GET"
            }),
        }),
    }),
});

export const { useGetUsersMutation } = Users;


