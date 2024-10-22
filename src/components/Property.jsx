import React from 'react';
import PropertyTitle from './PropertyTitle';
import PropertyLocation from './PropertyLocation';
import PropertyPrice from './PropertyPrice';
import PropertyImage from './PropertyImage';

const Property = (props) => {
  const { property, onHandleDeletePropertyById } = props;

  const handleDeleteProperty = (id) => {
    onHandleDeletePropertyById(id);
  };

  return (
    <div className="property">
      <PropertyImage image={property.image} title={property.title} />
      <PropertyTitle title={property.title} />
      <PropertyLocation location={property.location} />
      <PropertyPrice price={property.price} />
      <button onClick={() => handleDeleteProperty(property.id)}>Delete</button>
    </div>
  );
};

export default Property;
