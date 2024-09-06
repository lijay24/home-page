import image1 from '../../assets/image-1.svg';
import image2 from '../../assets/image-2.png';
import image3 from '../../assets/image3.png';

const ProductRange = () => {
	return (
		<section className='p-5 text-center lg:pl-16 lg:pr-16 lg:pt-10'>
			<header className='mb-5'>
				<h3 className='text-3xl font-black'>Browse The Range</h3>
				<p className='text-lg'>
					Lorem ipsum dolor sit ament, consectetur adipsicing elit
				</p>
			</header>

			<div className='grid gap-5 place-content-center md:grid-cols-3'>
				<article>
					<img src={image1} alt='Dinnig image' />
					<p className='text-2xl mt-5 font-bold'>Dining</p>
				</article>
				<article>
					<img src={image2} alt='Living image' />
					<p className='text-2xl mt-5 font-bold'>Living</p>
				</article>
				<article>
					<img src={image3} alt='Bedroom image' />
					<p className='text-2xl mt-5 font-bold'>Bedroom</p>
				</article>
			</div>
		</section>
	);
};

export default ProductRange;
