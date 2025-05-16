import { useEffect, useState } from "react";
import { Link } from "react-router";

type Deputado = {
  id: number;
  name: string;
  party: string;
  uf: string;
  image_url: string;
};

function DeputiesIndex() {
  const [deputados, setDeputados] = useState<Deputado[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/v1/deputies")
      .then((res) => res.json())
      .then((data) => {
        setDeputados(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Carregando...</div>;

  return (
    <div>
      <h1>Deputados</h1>
      <ul>
        {deputados.map((dep) => (
          <Link to={`/deputies/${dep.id}`} key={dep.id}>
            <li>
              <img src={dep.image_url} alt={dep.name} />
              {dep.name} - {dep.party}/{dep.uf}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default DeputiesIndex;
