import React, { useState } from "react";
import { toast } from "react-toastify";

const AddStudentModal = ({ isOpen, onClose, onSubmit }) => {
    if (!isOpen) return null;

    const [newStudent, setNewStudent] = useState({
        id: "",
        name: "",
        meta: "",
        status: "Ativo",
        peso: 0,
        altura: 0,
        idade: 0,
    });

    const handleChange = (e) => {
        console.log("CHANGED", e.target)
        const { name, value } = e.target;
        setNewStudent({ ...newStudent, [name]: value });
    };

    const handleSubmit = () => {
        const loadingToastId = toast.loading("Adicionando...");

        if (newStudent.name === '' || newStudent.altura === 0 || newStudent.idade === 0 || newStudent.meta === '' || newStudent.peso === 0) {
            toast.update(loadingToastId, {
                render: "Necessário preencher todos os campos",
                type: "error",
                isLoading: false,
                autoClose: 3000,

            });
            return;
        }


        onSubmit(newStudent);

        let confirmAdd = confirm(`Tem certeza que deseja adicionar?`)
        if (confirmAdd) {
            toast.update(loadingToastId, {
                render: "Usuário cadastrado com sucesso",
                type: "success",
                isLoading: false,
                autoClose: 3000,

            });

            onClose();

        } else {
            toast.update(loadingToastId, {
                render: "Usuário não cadastrado",
                type: "error",
                isLoading: false,
                autoClose: 3000,

            });

        }
    }

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
                <h2 className="text-xl font-bold mb-4 bg-transparent">Adicionar Novo Aluno</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Nome"
                    onChange={handleChange}
                    className="border border-gray-300 px-4 py-2 w-full mb-4 rounded-lg "
                />


                <input
                    type="number"
                    name="peso"
                    placeholder="Peso"
                    onChange={handleChange}
                    className="border border-gray-300 px-4 py-2 w-full mb-4 rounded-lg "
                />
                <input
                    type="number"
                    name="altura"
                    placeholder="Altura"
                    onChange={handleChange}
                    className="border border-gray-300 px-4 py-2 w-full mb-4 rounded-lg "
                />
                <input
                    type="number"
                    name="idade"
                    placeholder="Idade"
                    onChange={handleChange}
                    className="border border-gray-300 px-4 py-2 w-full mb-4 rounded-lg "
                />


                <div className="flex flex-col m-1 bg-transparent ">
                    <h3 className="m-1 bg-transparent">Meta</h3>
                    <div className="bg-transparent">
                        <input onClick={handleChange}
                            className="m-2" type="radio" id="Hipertrofia" name="meta" value="Hipertrofia" />
                        <label className="bg-transparent"  >Hipertrofia</label>
                    </div>

                    <div className="bg-transparent">
                        <input onClick={handleChange}
                            className="m-2 " type="radio" id="Definicao" name="meta" value="Definição" />
                        <label className="bg-transparent">Definição</label>
                    </div>

                    <div className="bg-transparent">
                        <input onClick={handleChange}
                            className="m-2 " type="radio" id="Perda" name="meta" value="Perda de peso" />
                        <label className="bg-transparent">Perda de peso</label>
                    </div>
                </div>


                <div className="flex justify-center gap-4 bg-transparent mt-5 ">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
                    >
                        Cancelar
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-yellow-300 text-black rounded-lg"
                    >
                        Adicionar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddStudentModal;
