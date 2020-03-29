import React, { useContext } from 'react';

import { Context } from '../Context';

export default function NotFound() {
  const { content } = useContext(Context);

  return (
    <div className="wrap">
      <h1>{content.notFound.heading}</h1>
    </div>
  );
}
