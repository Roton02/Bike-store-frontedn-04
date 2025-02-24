import { baseApi } from '@/Redux/api/baseApi'
import IBike from '@/types/bike.interface'

const bikesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: (searchTerm?: string) => ({
        url: searchTerm
          ? `/bike?searchTerm=${encodeURIComponent(searchTerm)}`
          : '/bike',
        method: 'GET',
      }),
      // providesTags: [{ type: 'bikes' as const, id: 'LIST' }],
    }),

    getBike: builder.query({
      query: (id: string) => ({
        url: `/bike/${id}`,
        method: 'GET',
      }),
      // providesTags: (result, error, id) => [{ type: 'bikes' as const, id }],
    }),

    createBike: builder.mutation<IBike, Partial<IBike>>({
      query: (data) => ({
        url: '/bike',
        method: 'POST',
        body: data,
      }),
      // invalidatesTags: [{ type: 'bikes' as const, id: 'LIST' }],
    }),

    updateBike: builder.mutation<IBike, { id: string; data: Partial<IBike> }>({
      query: ({ id, data }) => ({
        url: `/bike/${id}`,
        method: 'PATCH',
        body: data,
      }),
      // invalidatesTags: (result, error, { id }) => [
      //   { type: 'bikes' as const, id },
      // ],
    }),

    deleteBike: builder.mutation<void, string>({
      query: (id) => ({
        url: `/bike/${id}`,
        method: 'DELETE',
      }),
      // invalidatesTags: (result, error, id) => [{ type: 'bikes' as const, id }],
    }),
  }),
})

export const {
  useGetAllBikesQuery,
  useGetBikeQuery,
  useCreateBikeMutation,
  useUpdateBikeMutation,
  useDeleteBikeMutation,
} = bikesApi

export default bikesApi
