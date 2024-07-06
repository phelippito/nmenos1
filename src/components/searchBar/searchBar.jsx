import { twMerge } from "tailwind-merge";
import { useState } from "react";

export const SearchBar = ({
  onChange = () => { },
}) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (value) => {
    setSearchTerm(value)
    onChange(value)
  }
  /* Campo de pesquisa - tamanho */
  return (
    <div className="w-full sm:w-2/3 sm:max-w-[600px] h-[42px] relative">
      <input
        className="w-full h-full pl-5 pr-14 rounded-md border-2 border-[#000000A]"
        name="search"
        type="text"
        value={searchTerm}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Buscar por produtos"
      />

      <button
        className={twMerge(
          'px-2 py-1 bg-[#000000] rounded-md absolute right-1 top-0 bottom-0 my-auto', /* Cor background da lupa */
          'h-fit'
        )}
        onClick={() => { }}
      >
        <img src="/magnifyingGlass.svg" alt="Lupa de busca"  /* SVG da logo da lupa*/ />
      </button>
    </div>
  );
}
