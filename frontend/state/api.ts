import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials } from "./authSlice";

export interface UserRole {
    role: string;
}


export const api = createApi({
    baseQuery: fetchBaseQuery({ 
        baseUrl: process.env.NEXT_PUBLIC_API_URL,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as any).auth.token;  // Assuming token is stored in auth slice
      
            if (token) {
              headers.set('Authorization', `Bearer ${token}`);
              
            }
      
            return headers;
          },
    }),
    reducerPath: "api",
    tagTypes: ["UserRole"],
    endpoints: (build) => ({
        login: build.mutation<{token: string, user: { email: string; role: string } }, { email: string; password: string}>({
            query: (credentials) => ({
                url: "/api/login",
                method: 'POST',
                body: credentials
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    
                    const { data } = await queryFulfilled;
                    dispatch(setCredentials(data));
                    
                    
                } catch (error) {
                    console.error('Login error', error)
                }
            }
        }),
        register: build.mutation<{ message: string }, {firstName: string; lastName: string; email: string; phone: string; company: string; password: string;}>({
            query: (newUser) => ({
                url: "/api/register",
                method: "POST",
                body: newUser,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                const { data } = await queryFulfilled;
                console.log("✅ Registration success:", data);
                // Optional: auto-login or set credentials
                // dispatch(setCredentials(data));
                } catch (error) {
                console.error("❌ Registration failed:", error);
                }
            },
            }),
    }),
});

console.log('Base URL: ', process.env.NEXT_PUBLIC_API_URL)
console.log('Full URL: ', `${process.env.NEXT_PUBLIC_API_URL}api/login`)


export const { 
    useLoginMutation,
    useRegisterMutation
} = api; 

