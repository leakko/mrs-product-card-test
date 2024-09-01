import React from "react";
import renderer, { ReactTestRendererJSON } from "react-test-renderer";
import { ProductCard } from "../../src";
import { product1 } from "../data/products";
const { act } = renderer;

describe('ProductCard', () => {
  test('should show component', () => {
    const wrapper = renderer.create(
        <ProductCard product={product1}>
            {
                () => (
                   <h1>Product Card</h1> 
                )
            }
        </ProductCard>
    )
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should increment count', () => {
    const wrapper = renderer.create(
        <ProductCard product={product1}>
            {
                ({count, increaseBy}) => (
                    <>
                        <h1>Product Card</h1>
                        <span>{ count }</span>
                        <button onClick={() =>increaseBy(1)}></button>
                    </>
                )
            }
        </ProductCard>
    )

    let tree = wrapper.toJSON()

    expect(tree).toMatchSnapshot();

    act(() => {
        ((tree as ReactTestRendererJSON).children?.[2] as ReactTestRendererJSON).props.onClick();
    })
    tree = wrapper.toJSON();

    expect(((tree as ReactTestRendererJSON).children?.[1] as ReactTestRendererJSON).children?.[0]).toBe('1');
  });
  
})