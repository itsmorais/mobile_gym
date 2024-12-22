import React, { useEffect, useState } from "react";
import { Card } from "../components/card";
import DesktopHeader from "../components/headerDesktop";
import Status from "../components/status";
import { useRouter } from "next/router";
import { toast } from "react-toastify";


interface Workout {
    id: number;
    name: string;
    subtitle: string;
    isSelected: boolean;
}

interface Exercises {
    id: number;
    name: string;
    subtitle: string;
    carga: number;
    isSelected: boolean;
}

interface student {
    id: number;
    name: string;
    meta: string;
    status: string;
    peso: number;
    altura: number;
    idade: number;
}

export default function EditWorkoutPage() {
    const router = useRouter();
    const [student, setRowData] = useState<student>(null);

    useEffect(() => {
        if (router.query.data) {
            const parsedData = JSON.parse(decodeURIComponent(router.query.data as string));
            setRowData(parsedData);
        }
    }, [router.query]);

    const [workouts, setWorkouts] = useState<Workout[]>([
        { id: 1, name: "Treino A - Quadriceps", subtitle: "3 exercícios", isSelected: false },
        { id: 2, name: "Treino B - Costas", subtitle: "3 exercícios", isSelected: false },
        { id: 3, name: "Treino C - Posterior e glúteo", subtitle: "5 exercícios", isSelected: false },
    ]);

    const [exercicios, setExercicios] = useState<Exercises[]>([
        { id: 1, name: 'Leg Press', subtitle: 'Séries: 4 de 12 | Tipo: Progressão de carga | Carga: 100kg', carga: 100, isSelected: false },
        { id: 2, name: 'Agachamento Hack', subtitle: 'Séries: 3 de 10 | Tipo: Mesma carga | Carga: 100kg', carga: 100, isSelected: false },
        { id: 3, name: 'Cadeira Abdutora', subtitle: 'Séries: 3 de 10 | Tipo: Mesma carga | Carga: 15kg', carga: 15, isSelected: false },

    ])

    const [selectedWorkoutId, setSelectedWorkoutId] = useState<number | null>(null);
    const [selectedExerciseId, setSelectedExerciseId] = useState<number | null>(null);
    const [carga, setCarga] = useState(0);


    const handleWorkoutSelect = (id: number) => {
        setWorkouts((prev) =>
            prev.map((workout) => ({ ...workout, isSelected: workout.id === id }))
        );
        setSelectedWorkoutId(id);
    };

    const handleExerciseSelect = (id: number) => {
        setExercicios((prev) =>
            prev.map((workout) => ({ ...workout, isSelected: workout.id === id }))
        );
        setSelectedExerciseId(id);
        let selectedExercicio = exercicios.find((ex) => ex.id === id);
        setCarga(selectedExercicio.carga);


    };

    const handleDelete = (rowId, data, setData) => {
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

    return (
        <>
            <DesktopHeader index={1} />


            <div className="p-8 grid grid-cols-12 gap-6 justify-items-center items-center">
                {/* GERENCIAR TREINOS */}
                {student && (

                    <div className="col-span-4">
                        <h1 className="text-2xl">Gerenciar treinos de <span className=" text-yellow-600 font-bold">{student.name}</span> </h1>
                        <div className="flex gap-2">Status:<Status status={student.status} /></div>
                        <p>Meta:<strong> {student.meta}</strong></p>
                        <p>Peso: <strong>{student.peso}Kg</strong> Altura: <strong>{student.altura}cm</strong> Idade: <strong>{student.idade}</strong></p>

                        <div className="mt-4">
                            {workouts.map((workout) => (
                                <Card
                                    key={workout.id}
                                    title={workout.name}
                                    subtitle={workout.subtitle}
                                    isSelected={workout.isSelected}
                                    onClick={() => handleWorkoutSelect(workout.id)}
                                    handleDelete={() => handleDelete(workout.id, workouts, setWorkouts)}

                                />
                            ))}
                            <button className="w-full mt-3 py-2 border border-gray-400 rounded-lg flex items-center justify-center gap-2">
                                + Adicionar Novo treino
                            </button>
                        </div>
                    </div>


                )}


                {/* GERENCIAR EXERCÍCIOS DESSE TREINO */}
                <div className="col-span-4">

                    {selectedWorkoutId && (
                        <div className="space-y-3">
                            <h1 className="text-2xl font-bold">{workouts[selectedWorkoutId - 1].name} </h1>
                            <input
                                className="w-full p-2 border border-gray-400 rounded-lg mb-4 mt-4"
                                placeholder="Treino A - Quadriceps"
                            />
                            {exercicios.map((workout) => (
                                <Card
                                    key={workout.id}
                                    title={workout.name}
                                    subtitle={workout.subtitle}
                                    isSelected={workout.isSelected}
                                    onClick={() => handleExerciseSelect(workout.id)}
                                    handleDelete={() => handleDelete(workout.id, exercicios, setExercicios)}
                                />
                            ))}
                            <button className="w-full mt-3 py-2  border border-gray-400  rounded-lg flex items-center justify-center gap-2">
                                + Adicionar Novo Exercício
                            </button>
                        </div>
                    )}
                </div>


                {/* EDITAR EXERCICIO*/}
                {selectedExerciseId && (
                    <div className=" w-4/5 col-span-4 flex flex-col gap-6">
                        <h1 className="text-2xl font-bold">Editar: {exercicios[selectedExerciseId - 1].name} </h1>
                        <select className="w-full p-2 border border-gray-400 rounded-lg">
                            <option selected>{exercicios[selectedExerciseId - 1].name}</option>
                            <option>Afundo</option>
                            <option>Leg Press</option>
                            <option>Agachamento livre</option>
                            <option>Agachamento Hack</option>
                            <option>Cadeira Abdutora</option>
                            <option>Gêmeos sentado</option>
                            <option>Leg Press 150°</option>

                        </select>

                        <input type="text" title="Séries" className="w-full p-2 border border-gray-400 rounded-lg"
                            placeholder={exercicios[selectedExerciseId - 1].subtitle.split("|")[0]} />
                        <select className="w-full p-2 border border-gray-400 rounded-lg">
                            <option>Drop</option>
                            <option>Mesma carga</option>
                            <option selected>Progressão de carga</option>


                        </select>
                        <input type="number" title="Carga" className="w-full p-2 border border-gray-400 rounded-lg"
                            placeholder={exercicios[selectedExerciseId - 1].subtitle.split("|")[2]} />


                        <div className="flex gap-5 justify-start">
                            <button className="px-3 py-2 text-white font-bold border border-red-600 rounded-full bg-red-500 hover:bg-red-700">
                                Cancelar
                            </button>
                            <button className="px-3 py-2 text-white font-bold border border-green-600 rounded-full bg-green-500 hover:bg-green-700">
                                Salvar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );

}
