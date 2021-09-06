import { attributes, react as HomeContent } from '../content/pharmacy.md';

const Pharmacy = () => {
	let { btnTxt } = attributes;
	return (
		<div>
			<section className="my-20  lg:px-60 md:px-20 xs:px-4">
				<div className="relative flex items-center justify-center w-full h-96 bg-gray-50">
					<button className="px-20 py-2 text-white rounded bg-blue-600">
						{btnTxt}
					</button>
				</div>
			</section>

		</div>
	)
}

export default Pharmacy;