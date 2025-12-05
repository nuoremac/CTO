// src/components/ShopCarousel.jsx
import React, { useMemo, useState } from 'react';
import { useProfile } from '../context/ProfileContext.jsx';

export default function ShopCarousel() {
  const { selectedMovement } = useProfile();
  const [index, setIndex] = useState(0);

  const products = useMemo(
    () => selectedMovement?.products || [],
    [selectedMovement],
  );

  if (!selectedMovement || products.length === 0) {
    return (
      <div>
        <h3 className="subheading">🛒 Decathlon gear</h3>
        <p className="panel-intro small">
          Choose a movement to see suggested equipment (mat, bands, blocks…)
          that support your posture.
        </p>
      </div>
    );
  }

  const current = products[index];

  const next = () => setIndex((i) => (i + 1) % products.length);
  const prev = () => setIndex((i) => (i - 1 + products.length) % products.length);

  return (
    <div>
      <h3 className="subheading">🛒 Gear for this movement</h3>
      <div className="shop-card-inner 3d-tilt">
        <p className="shop-movement-label">{selectedMovement.name}</p>
        <p className="shop-product-type">{current.type}</p>
        <p className="shop-product-name">{current.name}</p>

        <a
          href={current.decathlonUrl}
          target="_blank"
          rel="noreferrer"
          className="shop-link"
        >
          See on Decathlon →
        </a>

        <div className="shop-nav">
          <button onClick={prev}>&larr;</button>
          <span>
            {index + 1}/{products.length}
          </span>
          <button onClick={next}>&rarr;</button>
        </div>
      </div>
    </div>
  );
}
