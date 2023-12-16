'use client';

import { useEffect, useState } from "react";

interface BagItemProps {
	email: string;
    id: string;
}

const BagItem: React.FC<BagItemProps> = ({
	email,
    id
}) => {
    const [bag, setBag] = useState(false);

    useEffect(() => {

    }, [bag]);
    
	return (
        <div className="flex bg-white w-full p-3 rounded">
            <div className="flex flex-col w-full">
                <p>{email}</p>
                <p className="text-xs text-black/50">{id}</p>
            </div>
            <input type="checkbox" onClick={(e) => setBag(!bag)}/>
        </div>
	);
};

export default BagItem;