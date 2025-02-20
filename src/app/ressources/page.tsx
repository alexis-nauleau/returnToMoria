"use client";

import { useState } from "react";
import Image from "next/image";
import ressources from "@/src/app/data/ressources.json";
import SearchBar from "@/src/app/components/SearchBar";

export default function RessourcesPage() {
  const [filterType, setFilterType] = useState<string>("");

  // Filtrer 
  const filteredRessources = filterType
    ? ressources.filter((ressource) => ressource.type === filterType)
    : ressources;

  // Récupérer tous les types uniques
  const types = Array.from(new Set(ressources.map((ressource) => ressource.type)));

  // Fonction pour mettre à jour le type sélectionné
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterType(e.target.value);
  };

  return ( <>
  <SearchBar types={types} selectedType={filterType} onChange={handleFilterChange}  />
    <div className="p-6">
       
      <h1 className="text-2xl font-bold mb-4">Liste des Ressources</h1>
      
      <div className="grid grid-cols-6 gap-4">
        {filteredRessources.map((ressource, index) => (
          <div key={index} className="border p-4 rounded-md shadow-md">
            <Image
              src={ressource.picture}
              alt={ressource.name}
              width={100}
              height={100}
              className="mx-auto"
            />
            <h2 className="text-lg font-semibold text-center">{ressource.name}</h2>
            <h3 className="mt-2 font-medium">Nécessaire pour craft :</h3>
            <ul className="list-disc pl-5">
              {ressource.craft.map((item, i) => (
                <li key={i}>
                  {item.quantity}x {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
