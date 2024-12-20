import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// utils/customFetch.js

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

export const customFetch = async (
  endpoint: string,
  options: FetchOptions = {}
) => {
  const baseURL = process.env.API_BASE_URL;

  // Tambahkan header default
  const defaultHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    ...(options.headers || {}),
  };

  // Gabungkan opsi default dengan opsi yang diberikan
  const fetchOptions = {
    ...options,
    headers: defaultHeaders,
  };

  const url = `${baseURL}${endpoint}`; // Gabungkan baseURL dengan endpoint

  try {
    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    // Parsing response (misal JSON)
    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Fetch error:", error.message);
    } else {
      console.error("Fetch error:", error);
    }
    throw error;
  }
};
