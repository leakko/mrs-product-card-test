import React from "react";
import renderer from "react-test-renderer";
import { ProductCard } from "../../src";
import { product2 } from "../data/products";

describe('ProductImage', () => {
  test('should show component with customized image', () => {
    const wrapper = renderer.create(
        <ProductCard.Image img="./custom-imgage.png"  className="custom-class" />
    )
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should show component with product name', () => {
    const wrapper = renderer.create(
        <ProductCard product={product2}>
            {
                () => (
                    <ProductCard.Image />
                )
            }
        </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  
})

