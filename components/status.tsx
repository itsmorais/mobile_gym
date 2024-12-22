import React from 'react';

type StatusProps = {
    status: 'Ativo' | 'Inativo' | 'Pendente' | 'Outro'; // Add more statuses as needed
};

const Status: React.FC<StatusProps> = ({ status }) => {
    // Define status-based configurations
    const statusConfig = {
        Ativo: {
            text: 'Ativo',
            color: 'text-green-700',
            circleColor: 'bg-green-500',
        },
        Inativo: {
            text: 'Inativo',
            color: 'text-red-700',
            circleColor: 'bg-red-500',
        },
        Pendente: {
            text: 'Pendente',
            color: 'text-yellow-700',
            circleColor: 'bg-yellow-500',
        },
        Outro: {
            text: 'Outro',
            color: 'text-gray-700',
            circleColor: 'bg-gray-500',
        },
    };

    // Get current status configuration
    const { text, color, circleColor } = statusConfig[status] || statusConfig['Outro'];

    return (
        <div className="flex items-center gap-2 ">
            {/* Pulsing Circle */}
            <div className="relative flex items-center justify-center overflow-y-hidden">
                <div
                    className={`h-2 w-2 rounded-full ${circleColor} animate-ping absolute`}
                ></div>
                <div className={`h-2 w-2 rounded-full ${circleColor}`}></div>
            </div>
            {/* Status Text */}
            <span className={`text-sm font-semibold ${color}`}>{text}</span>
        </div>
    );
};

export default Status;
