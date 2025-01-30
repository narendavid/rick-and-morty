import { useEffect, useState } from "react";

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export function useFetch<T>(url: string) {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setState((prev) => ({ ...prev, loading: true }));
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const result = await response.json();
                setState({ data: result, loading: false, error: null });
            } catch (error: any) {
                setState({ data: null, loading: false, error: error.message });
            }
        };

        fetchData();
    }, [url]);

    return state;
}
