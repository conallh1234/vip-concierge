import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials } from "./authSlice";

export interface UserRole {
    role: string;
}


export const api = createApi({
    baseQuery: fetchBaseQuery({ 
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
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
        // getDashboardMetrics: build.query<DashboardMetrics, void>({
        //     query: () => "/dashboard", //appends /dashboard to above URL process.env
        //     providesTags: ["DashboardMetrics"],
        // }),
        // // getAdminMetrics: build.query<AdminMetrics: void>({
            
        // // }),
        // getStudents: build.query<Student[], void>({
        //     query: () => '/students',
        //     providesTags: ["Students"]
        // }),
        // getTrainers: build.query<Trainer[], void>({
        //     query: () => '/trainers',
        // }),
        // getUserRole: build.query<UserRole, void>({
        //     query: () => '/users/role'
        // }),
        // getCourses: build.query<Course[], void>({
        //     query: () => '/courses'
        // })
    }),
});

console.log('Base URL: ', process.env.NEXT_PUBLIC_API_BASE_URL)
console.log('Full URL: ', `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/login`)


export const { 
    useLoginMutation
} = api; 

