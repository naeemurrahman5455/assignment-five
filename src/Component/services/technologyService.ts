import type { Technology } from "../type/technology";

export const getTechnologies = async (): Promise<Technology[]> => {
  const response = await fetch("/technologydata.json");

  if (!response.ok) {
    throw new Error("Failed to fetch technology data");
  }

  const data: Technology[] = await response.json();

  return data;
};
