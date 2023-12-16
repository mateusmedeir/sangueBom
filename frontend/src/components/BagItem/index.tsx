'use client';

interface BagItemProps {
	email: string;
    id: string;
}

const BagItem: React.FC<BagItemProps> = ({
	email,
    id
}) => {
	return (
        <div className="flex bg-white w-full">
            <div className="flex flex-col w-full">
                <p>{email}</p>
                <p className="text-sm text-">{id}</p>
            </div>
            <input type="checkbox" />
        </div>
	);
};

export default BagItem;