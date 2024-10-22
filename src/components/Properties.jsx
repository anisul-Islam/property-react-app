import React from 'react';
import Property from './Property';

const Properties = (props) => {
  const { properties } = props;
  if (properties.length === 0) {
    return <h3>No properties available at this moment</h3>;
  }
  return (
    <section className="properties">
      {properties.map((property) => (
        <Property property={property} key={property.id} />
      ))}
    </section>
  );
};

export default Properties;