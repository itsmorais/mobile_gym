
import { useMemo, useState } from "react";
import { FiTrash2, FiEdit, FiSearch } from "react-icons/fi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { useTable, usePagination } from "react-table";
import Status from "../components/status";
import { TableWrapper } from "../styles/table";
import DesktopHeader from "../components/headerDesktop";
import Router from "next/router";
import { AddStudentCard } from "../components/addStudent";
import { toast } from "react-toastify";
import AddStudentModal from "../components/addStudentModal";
import EditStudentModal from "../components/editStudentModal";

interface student {
    id: number;
    name: string;
    meta: string;
    status: string;
    peso: number;
    altura: number;
    idade: number;
}


export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState<student>()

    const [data, setData] = useState([
        { id: 1, name: "Pedro Paulo", meta: "Hipertrofia", status: "Ativo", peso: 80, altura: 180, idade: 40 },
        { id: 2, name: "Andreia Maria", meta: "Definição", status: "Inativo", peso: 68, altura: 163, idade: 45 },
        { id: 3, name: "José Carlos", meta: "Hipertrofia", status: "Ativo", peso: 80, altura: 190, idade: 25 },
        { id: 4, name: "Jonas Souza B.", meta: "Hipertrofia", status: "Ativo", peso: 70, altura: 172, idade: 40 },
        { id: 5, name: "Leticia Rodrigues", meta: "Perda de peso", status: "Ativo", peso: 80, altura: 170, idade: 33 },
        { id: 6, name: "Fernanda Lima", meta: "Definição", status: "Ativo", peso: 60, altura: 165, idade: 28 },
        { id: 7, name: "Lucas Almeida", meta: "Hipertrofia", status: "Inativo", peso: 90, altura: 185, idade: 35 },
        { id: 8, name: "Mariana Santos", meta: "Definição", status: "Ativo", peso: 62, altura: 168, idade: 30 },
        { id: 9, name: "Ricardo Oliveira", meta: "Hipertrofia", status: "Ativo", peso: 85, altura: 182, idade: 38 },
        { id: 10, name: "Camila Costa", meta: "Perda de peso", status: "Ativo", peso: 75, altura: 160, idade: 29 },
        { id: 11, name: "Thiago Ramos", meta: "Definição", status: "Inativo", peso: 77, altura: 174, idade: 42 },
        { id: 12, name: "Juliana Azevedo", meta: "Hipertrofia", status: "Ativo", peso: 65, altura: 169, idade: 31 },
        { id: 13, name: "Paulo Henrique", meta: "Definição", status: "Ativo", peso: 72, altura: 178, idade: 26 },
        { id: 14, name: "Ana Beatriz", meta: "Perda de peso", status: "Inativo", peso: 68, altura: 162, idade: 34 },
        { id: 15, name: "Gustavo Silva", meta: "Hipertrofia", status: "Ativo", peso: 88, altura: 186, idade: 32 },
        { id: 16, name: "Carla Mendes", meta: "Definição", status: "Ativo", peso: 63, altura: 167, idade: 27 },
        { id: 17, name: "Rafael Souza", meta: "Hipertrofia", status: "Inativo", peso: 92, altura: 190, idade: 36 },
        { id: 18, name: "Larissa Gomes", meta: "Perda de peso", status: "Ativo", peso: 70, altura: 164, idade: 25 },
        { id: 19, name: "Marcelo Ferreira", meta: "Definição", status: "Ativo", peso: 74, altura: 175, idade: 39 },
        { id: 20, name: "Vanessa Martins", meta: "Hipertrofia", status: "Ativo", peso: 78, altura: 171, idade: 33 },
        { id: 21, name: "Leonardo Lima", meta: "Definição", status: "Inativo", peso: 85, altura: 180, idade: 37 },
        { id: 22, name: "Patricia Nunes", meta: "Perda de peso", status: "Ativo", peso: 66, altura: 158, idade: 29 },
        { id: 23, name: "Felipe Rocha", meta: "Hipertrofia", status: "Ativo", peso: 87, altura: 188, idade: 30 },
        { id: 24, name: "Beatriz Lopes", meta: "Definição", status: "Ativo", peso: 61, altura: 160, idade: 28 },
        { id: 25, name: "Cesar Martins", meta: "Hipertrofia", status: "Inativo", peso: 95, altura: 195, idade: 40 },
        { id: 26, name: "Isabela Ferreira", meta: "Definição", status: "Ativo", peso: 59, altura: 163, idade: 24 },
        { id: 27, name: "Roberto Lima", meta: "Perda de peso", status: "Ativo", peso: 79, altura: 176, idade: 35 },
        { id: 28, name: "Amanda Vieira", meta: "Hipertrofia", status: "Ativo", peso: 73, altura: 172, idade: 31 },
        { id: 29, name: "Eduardo Costa", meta: "Definição", status: "Inativo", peso: 83, altura: 179, idade: 34 },
        { id: 30, name: "Sofia Barbosa", meta: "Perda de peso", status: "Ativo", peso: 64, altura: 161, idade: 26 },
    ]

    );

    const handleDelete = (rowId) => {
        const loadingToastId = toast.loading("Deletando...");

        let confirmDelete = confirm(`Tem certeza que deseja excluir?`)
        if (confirmDelete) {
            toast.update(loadingToastId, {
                render: "Usuário deletado com sucesso",
                type: "success",
                isLoading: false,
                autoClose: 3000,

            });
            setData(data.filter((row) => row.id !== rowId));

        } else {
            toast.update(loadingToastId, {
                render: "Ação cancelada com sucesso!",
                type: "error",
                isLoading: false,
                autoClose: 3000,
                bodyClassName: "bg-white"

            });

        }

    };

    const filteredData = useMemo(() => {
        return data.filter((row) =>
            row.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [data, searchQuery]);


    const columns = useMemo(
        () => [
            { Header: "#", accessor: "id" },
            { Header: "NOME", accessor: "name" },
            { Header: "META", accessor: "meta" },
            { Header: "PESO", accessor: "peso" },
            { Header: "ALTURA", accessor: "altura" },
            { Header: "IDADE", accessor: "idade" },
            { Header: "STATUS", accessor: "status", Cell: ({ value }) => <Status status={value} /> },
            {
                Header: "AÇÕES",
                Cell: ({ row }) => (
                    <div className="flex gap-5">
                        <button className="hover:pb-1" title={`Editar Treinos de ${row.original.name}`} onClick={() => handleNavigation(row.original)}>
                            <GiWeightLiftingUp />
                        </button>
                        <button className="hover:pb-1" title={`Editar ${row.original.name}`} onClick={() => handleEditStudent(row.original)}>
                            <FiEdit />
                        </button>
                        <button className="hover:pb-1" title={`Excluir ${row.original.name}`} onClick={() => handleDelete(row.original.id)}>
                            <FiTrash2 fill="red" />
                        </button>


                    </div>
                ),
            },
        ],
        [data]
    );

    const handleNavigation = (student: student) => {

        Router.push({
            pathname: "/student",
            query: { data: JSON.stringify(student) }
        });

    }

    const handleEditStudent = (student:student) => {
        setSelectedStudent(student)
        setIsEditModalOpen(true);
    }


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state: { pageIndex },
        setPageSize,
    } = useTable({ columns, data: filteredData, initialState: { pageSize: 10 } }, usePagination);
    return (
        <>
            <DesktopHeader index={1} />

            {/* Table */}

            <TableWrapper>

                <div className="flex items-center mt-4 mx-12 ">
                    <div className="flex items-center 	 border border-gray-300 px-4 py-2 rounded-lg">
                        <input
                            type="text"
                            placeholder={`Pesquisar por nome`}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="border-0 outline-0 focus:outline-none"
                        />
                        <FiSearch />
                    </div>
                    <div className="px-4 py-2">

                        <AddStudentCard title="Novo aluno(a)" onClick={() => setIsModalOpen(true)} />
                    </div>
                </div>

                <AddStudentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}
                    onSubmit={(newStudent) => setData([...data, { ...newStudent, id: data.length + 1 }])} />

                    <EditStudentModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} student={selectedStudent}
                    onSubmit={(newStudent) => setData([...data, { ...newStudent, id: data.length + 1 }])} />


                <table {...getTableProps()} className="w-11/12 m-12 border-collapse mt-3 border border-gray-300">
                    <thead className="bg-gray-100">
                        {headerGroups.map((headerGroup) => {
                            // Extract key and remaining props
                            const { key, ...restHeaderGroupProps } = headerGroup.getHeaderGroupProps();

                            return (
                                <tr key={key} {...restHeaderGroupProps}>
                                    {headerGroup.headers.map((column) => {
                                        // Extract key and remaining props
                                        const { key: columnKey, ...restColumnProps } = column.getHeaderProps();

                                        return (
                                            <th
                                                key={columnKey}
                                                {...restColumnProps} // Spread remaining props
                                                className="border border-gray-300 px-4 py-2 text-left"
                                            >
                                                {column.render("Header")}
                                            </th>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row) => {
                            prepareRow(row);

                            const { key, ...restRowProps } = row.getRowProps();

                            return (
                                <tr
                                    key={key}
                                    {...restRowProps}
                                    style={{ backgroundColor: "yellow" }}

                                    className="LinhaTabela cursor-pointer"
                                >
                                    {row.cells.map((cell) => {
                                        const { key: cellKey, ...restCellProps } = cell.getCellProps();

                                        return (
                                            <td
                                                key={cellKey}
                                                {...restCellProps}
                                                className="border border-gray-300 px-4 py-2"
                                            >
                                                {cell.render("Cell")}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </TableWrapper>
            {/* Pagination Controls */}
            <div className="flex justify-center items-center mb-6 gap-4">
                <button
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                    className={`px-3 py-1 rounded ${canPreviousPage ? "bg-yellow-600 hover:bg-yellow-700 text-white" : "bg-gray-300 text-gray-500"
                        }`}
                >
                    Anterior
                </button>
                <span>
                    Página{" "}
                    <strong>
                        {pageIndex + 1} de {pageOptions.length}
                    </strong>
                </span>
                <button
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                    className={`px-3 py-1 rounded ${canNextPage ? "bg-yellow-600 hover:bg-yellow-700 text-white" : "bg-gray-300 text-gray-500"
                        }`}
                >
                    Próximo
                </button>
                {/* Dropdown for page size */}
                <select
                    value={pageOptions[pageIndex]}
                    onChange={(e) => setPageSize(Number(e.target.value))}
                    className="ml-4 px-2 py-2 border border-gray-400 rounded-lg"
                >
                    {[10, 20, 30].map((size) => (
                        <option key={size} value={size}>
                            Mostrar {size}
                        </option>
                    ))}
                </select>
            </div>

        </>
    );
}
