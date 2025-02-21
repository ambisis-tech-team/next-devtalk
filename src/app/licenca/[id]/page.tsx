import { Condicionante } from "./condicionante";
import { Licenca } from "./licenca";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const licenca = { id, nome: "licença paraná " };

  return (
    <Licenca licenca={licenca}>
      <Condicionante />
    </Licenca>
  );
}
