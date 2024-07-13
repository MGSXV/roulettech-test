const PrimaryTitle = ({text}: {text?: string}) => (
	<h1 className={`text-6xl font-title font-bold text-red-800`}>
		{text ? text : "ut pharetra sit amet aliquam id diam maecenas ultricies"}
	</h1>
)

export default PrimaryTitle;