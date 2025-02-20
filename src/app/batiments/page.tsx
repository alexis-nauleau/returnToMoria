"use client";

import Image from "next/image";

import batiments from "@/src/app/data/batiments.json"; 

export default function BatimentsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Liste des Ressources</h1>
      <div className="grid grid-cols-3 gap-4">
        {batiments.map((ressource, index) => (
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
  );
}
