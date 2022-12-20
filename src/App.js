import './App.css';
import useReactQueryWithProduct from './useReactQueryWithProduct';

function App() {
	const { products, loadingProducts, isError, error } =
		useReactQueryWithProduct();
	if (loadingProducts) {
		console.log('Loading...');
		return <div>Loading...</div>;
	}

	if (isError) {
		console.log('Error: ', error.message);
		return <div>Error...</div>;
	}
	console.log(products);
	return (
		<ul>
			{products &&
				products.map((product) => (
					<div key={product.id}>
						<p> {product.title}</p>
						<img src={product.image} alt={product.title} />
						<p>{product.price}</p>
					</div>
				))}
		</ul>
	);
}

export default App;
