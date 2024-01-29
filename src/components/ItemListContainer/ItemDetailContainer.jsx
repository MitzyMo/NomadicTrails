import React, { useEffect, useState } from 'react';
import arrayproducts from "../json/products.json";
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();
  const [totalQuantity, setTotalQuantity] = useState(0);

  const handleQuantityChange = (newQuantity) => {
    setTotalQuantity(newQuantity);
  };


  useEffect(() => {
    const promesa = new Promise(resolve => {
      setTimeout(() => {
        let producto = arrayproducts.find(item => item.id == itemId);
        resolve(producto);
      }, 1000);
    });

    promesa.then(data => {
      setItem(data);
    });

  }, [itemId]);

  return (
    <ItemDetail item={item} onQuantityChange={handleQuantityChange} />
    
  );
}

export default ItemDetailContainer;
