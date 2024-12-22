import { FiPlus } from "react-icons/fi";


interface CardProps {
    title: string;
    onClick: () => void;
}

export const AddStudentCard: React.FC<CardProps> = ({ title, onClick }) => (
    <div
        className={`p-2 rounded-lg cursor-pointer flex flex-col bg-yellow-200 hover:shadow-md hover:shadow-yellow-400 transition text-black"`}
        onClick={onClick}
    >
        <div className="bg-transparent flex gap-2 items-center ">
            <FiPlus className="bg-transparent" />
            <p className={`font-bold bg-yellow-200 hover:shadow-md hover:shadow-yellow-400 transition text-black"}`}>
                {title}</p>
        </div>

    </div>
);
