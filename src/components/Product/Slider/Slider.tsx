import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';

import './Slider.scss';

import { Product } from '../../../types/Product';
import { ProductTitles } from '../../../types/ProductTitles';
import { ProductCard } from '../Card';

type Props = {
  title: ProductTitles,
  products: Product[]
};

export const ProductSlider: React.FC<Props> = ({
  title,
  products,
}) => {
  const visibleProducts = products.slice(0, 21);

  const navigationMode = true;

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={16}
      navigation={navigationMode}
      modules={[Navigation]}
      className="product-slider container"
    >

      <div className="product-slider__header">
        <h1 className="container--title">
          {title}
        </h1>
      </div>

      {visibleProducts.map(currentProduct => (
        <SwiperSlide
          className="product-slider-item"
          key={currentProduct.id}
        >
          <ProductCard
            title={title}
            product={currentProduct}
          />
        </SwiperSlide>
      ))}

    </Swiper>
  );
};