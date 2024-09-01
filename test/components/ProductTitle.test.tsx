import React from "react";
import renderer from "react-test-renderer";
import { ProductCard } from "../../src";
import { product1 } from "../data/products";

describe('ProductTitle', () => {
  test('should show component with customized title', () => {
    const wrapper = renderer.create(
        <ProductCard.Title title='Custom Product' className="custom-class" />
    )
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should show component with product name', () => {
    const wrapper = renderer.create(
        <ProductCard product={product1}>
            {
                () => (
                    <ProductCard.Title />
                )
            }
        </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
})

