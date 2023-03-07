type Props = {
	children: React.ReactNode;
};

export const Section = ({ children }: Props) => (
	<section className="min-h-[100vh] w-full flex flex-row items-center justify-center">
		{children}
	</section>
);
