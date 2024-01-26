import { baseApi } from "../base-api";

const decksApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecks: builder.query<DecksResponse, getDecksArgs>({
        query: args => {
          return { 
            url: `v1/decks`,
            method: "GET",
						params: args,
					}
        },
				providesTags: ['Decks']
      }),
      createDeck: builder.mutation<any, any>({
        query: ({name}) => {
          return { 
            url: `v1/decks`,
            method: "POST",
						body: {name},
					}
        },
				invalidatesTags: ['Decks']
      }),
    }
  },
})

export const { useGetDecksQuery, useLazyGetDecksQuery, useCreateDeckMutation} = decksApi

// TYPES============================================================================================

export type getDecksArgs = {
	maxCardsCount?: number
	minCardsCount?: number
	name?: string
	authorId?: string
	orderedBy?: string
	currentPage?: number
	itemsPerPage?: number
}

export interface Author {
	id: string;
	name: string;
}

export interface Deck {
	id: string;
	userId: string;
	name: string;
	isPrivate: boolean;
	cover?: any;
	created: string;
	updated: string;
	cardsCount: number;
	author: Author;
}

export interface Pagination {
	totalItems: number;
	currentPage: number;
	itemsPerPage: number;
	totalPages: number;
}

export interface DecksResponse {
	items: Deck[];
	pagination: Pagination;
	maxCardsCount: number;
}