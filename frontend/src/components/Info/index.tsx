'use client';

interface InfoProps {
	title: string;
    text: string;
}

const Info: React.FC<InfoProps> = ({
    title,
    text
}) => {
	return (
        <div>
            <h2 className="text-xl font-semibold text-primary">
                {title}
            </h2>
            <p>
                {text}
            </p>
      </div>
    );
};

export default Info;