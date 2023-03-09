type Props = {
	children: React.ReactNode;
};

export const Section = ({ children }: Props) => (
	<section className="h-full w-full  mx-auto">{children}</section>
);
