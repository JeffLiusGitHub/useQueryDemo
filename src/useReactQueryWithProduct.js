import { QueryClient, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { fetchProducts } from './Fetch';

export default function useReactQueryWithProduct() {
	console.log('Render');

	const { isError, isSuccess, isLoading, data, error } = useQuery(
		['products'],
		fetchProducts,
		{ staleTime: 3000 }
        //when user refocus the window, usequery will refresh
		// a configuration option that determines how long to wait before considering a cached query to be stale, or out of date, and therefore in need of refreshing. When a query is marked as stale, React Query will automatically refetch the data from the server and update the cache with the new data.
	);

	return { products: data, loadingProducts: isLoading, isError, error };
}
