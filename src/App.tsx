import './App.scss';
import { ProductReviewForm } from './ProductReviewForm/ProductReviewForm';

function App() {
  return (
    <div className="App">
      <div className='modal'>
        <ProductReviewForm />
      </div>
    </div>
  );
}

export default App;
