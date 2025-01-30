import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { PaginatedResponse } from "../models/character";
import Pagination from "../components/Pagination";
import CharacterCard from "../ui/CharacterCard";
import { handleErrors } from "../utils/handleErrors";
import { GET_CHARACTERS } from "../services/characters.services";

export default function CharactersPage() {

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const { data, loading, error } = useFetch<PaginatedResponse>(
    GET_CHARACTERS,
    page,
    query
  );

  const characters = data?.results || [];
  const hasMore = data?.info?.next !== null;

  const handleNextPage = () => {
    if (hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setPage(1);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Personajes de Rick and Morty</h1>

      <div className="mb-4 flex justify-center">
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          placeholder="Buscar personaje..."
          className="p-2 border border-gray-300 rounded-lg w-1/2"
        />
      </div>

      {loading && <p className="text-center">Cargando...</p>}
      {error && <p className="text-center text-red-500">{handleErrors(error)}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {characters.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </div>
      {characters.length > 0 &&
        <Pagination
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          page={page}
          hasMore={hasMore}
        />}
    </div>
  );
}
