"use client";

export function Licenca({
  licenca,
  children,
}: {
  licenca: { id: string; nome: string };
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>{licenca.nome}</h1>
      {children}
      <button onClick={() => console.log(licenca.nome)}>ver nome</button>
      <button onClick={() => console.log(licenca.id)}>ver id</button>
    </>
  );
}
