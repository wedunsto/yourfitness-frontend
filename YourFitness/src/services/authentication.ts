const API_URL = process.env.EXPO_PUBLIC_API_URL;

/**
 * Reusable function to build the URL request once
 * Path: The request endpoint
 * Init: Request headers such as method, headers, and body
 **/

const request = async <T>(path: string, init?: RequestInit): Promise<T> => {
    const response = await fetch(`${API_URL}${path}`, init);
    if (!response.ok) throw new Error(`Request failed: ${response.status}`);
    return response.json();
}

export const userExists = (username: string) => {
    return request<boolean>(`/userExists/${username}`)
}