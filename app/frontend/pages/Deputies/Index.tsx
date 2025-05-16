import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { fetchDeputies } from "api/deputiesApi";
function DeputiesIndex() {
  const { data: deputados = [], isLoading } = useQuery({
    queryFn: fetchDeputies,
    queryKey: ["deputies"],
  });

  return (
    <div>
      <h1>Deputados</h1>
      {!isLoading && deputados.length === 0 && (
        <p>Nenhum deputado encontrado</p>
      )}
      {!isLoading && deputados.length > 0 && (
        <p>Encontrados {deputados.length} deputados</p>
      )}
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
