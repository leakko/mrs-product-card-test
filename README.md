# mrs-product-card-test

This is just an useless package just to learn about npm packages and deployments.

## Ejemplo
```jsx
import { ProductCard } from 'mrs-product-card';
```

```jsx
<ProductCard 
    key={product.id}
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
```
