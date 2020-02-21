import React from 'react';
import classnames from 'classnames';
import './index.scss';

export default function Banner({ title, description, series, theme }) {
  return (
    <div className={classnames('banner-container', {
      dark: theme === 'dark',
      pink: theme === 'pink'
    })}>
      <h1>{series}</h1>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
