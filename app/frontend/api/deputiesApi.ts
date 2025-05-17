type Deputado = {
  id: number;
  name: string;
  party: string;
  state: string;
  image_url: string;
};

export const fetchDeputies = async (): Promise<Deputado[]> => {
  const res = await fetch("/api/v1/deputies");
  if (!res.ok) throw new Error("Erro ao buscar deputados");
  const data = await res.json();
  return data;
};

export const fetchDeputyById = async (id: string): Promise<Deputado> => {
  const res = await fetch(`/api/v1/deputies/${id}`);
  if (!res.ok) throw new Error("Erro ao buscar deputado");
  const data = await res.json();
  return data;
};
