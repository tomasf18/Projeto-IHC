import Marcacao from "./Marcação";
import { Table } from "flowbite-react";

export default function Component() {
  return (
    <div className="overflow-x-auto ml-20">
      <Table>
        <Table.Head className="">
          <Table.HeadCell className="text-center border-2">Estabelecimento</Table.HeadCell>
          <Table.HeadCell className="text-center border-2">Serviço</Table.HeadCell>
          
          <Table.HeadCell className="text-center border-2">Data</Table.HeadCell>
          <Table.HeadCell className="text-center border-2">Hora</Table.HeadCell>
          
        </Table.Head>
        <Table.Body className="divide-y">
          <Marcacao/>
          <Marcacao/> 
          
          
        </Table.Body>
      </Table>
    </div>
  );
}