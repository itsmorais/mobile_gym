import { FiTrash2, FiEdit } from "react-icons/fi";
import { TfiPencilAlt2 } from "react-icons/tfi";




interface CardProps {
    title: string;
    subtitle?: string;
    isSelected?: boolean;
    onClick: () => void;
    handleDelete: () => void;
}

export const Card: React.FC<CardProps> = ({ title, subtitle, isSelected, onClick,handleDelete }) => (
    <div
        className={`p-4 rounded-lg cursor-pointer mb-3 gap-1 flex flex-col column ${isSelected ? "bg-yellow-300" : "bg-gray-300 text-black hover:shadow-lg hover:shadow-black-300 transition"
            }`}
        onClick={onClick}
    >
        <div className="bg-transparent flex gap-2 items-center">
            {isSelected ? <TfiPencilAlt2 className="bg-transparent" /> : <FiEdit fill="yellow" className="bg-transparent hover:animate-bounce " />
}
            <FiTrash2 className="bg-transparent hover:animate-bounce "  fill="red" onClick={() => handleDelete()} />
            <h3 className={`font-semibold ${isSelected ? "bg-yellow-300" : "bg-gray-300 text-black"
                }`}>{title}</h3>
        </div>

        {subtitle && <p className={`text-sm ${isSelected ? "bg-yellow-300" : "bg-gray-300 text-black"
            }`}>{subtitle}</p>}
    </div>
);
