// src/components/__tests__/ProductCard.test.js
import { render, screen } from '@testing-library/react';
import ProductCard from '../ProductCard';

describe('ProductCard', () => {
  test('제목과 가격이 렌더링되는지 확인', () => {
    render(<ProductCard title="테스트 상품" price={10000} />);
    
    expect(screen.getByText('테스트 상품')).toBeInTheDocument();
    expect(screen.getByText(/10000원/)).toBeInTheDocument();
    expect(screen.getByTestId('product-card')).toBeInTheDocument();
  });
});
