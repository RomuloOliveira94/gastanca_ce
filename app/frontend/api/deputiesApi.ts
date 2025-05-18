import { Deputy, Deputies } from "./types";

export const fetchDeputies = async (): Promise<Deputies[]> => {
  const res = await fetch("/api/v1/deputies");
  if (!res.ok) throw new Error("Erro ao buscar deputados");
  const data = await res.json();
  return data;
};

export const fetchDeputyById = async (id: string): Promise<Deputy> => {
  const res = await fetch(`/api/v1/deputies/${id}`);
  if (!res.ok) throw new Error("Erro ao buscar deputado");
  const data = await res.json();
  return data;
};
