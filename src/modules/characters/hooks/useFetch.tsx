import { useState, useEffect } from "react";

export function useFetch<T>(url: string, page: number, query: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<number | null>(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            setError(null);
            const fetchUrl = query
                ? `${url}?page=${page}&name=${query}`
                : `${url}?page=${page}`;
            const response = await fetch(fetchUrl)
            if (!response.ok) {
                setError(response.status)
            }
            const data = await response.json()
            setData(data);
        } catch (error: any) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData()
    }, [url, page, query]);

    return { data, loading, error };
}
