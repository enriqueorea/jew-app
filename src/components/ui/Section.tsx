type Props = {
	children: React.ReactNode;
};

export const Section = ({ children }: Props) => (
	<section className="h-full w-full max-w-[1000px] mx-auto">{children}</section>
);
