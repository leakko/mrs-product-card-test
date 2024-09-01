import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  // img: './coffee-mug.png'
};

const App = () => {
  return (
    <>
      <ProductCard 
        product={product}
        initialValues={{
            count: 6,
            maxCount: 20
        }}
      >
        {
          ({count, isMaxCountReached, increaseBy, reset}) => (
              <>
                  <ProductCard.Image />
                  <ProductCard.Title />
                  <ProductCard.Buttons />
              </>
          )
        }
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
