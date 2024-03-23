'use client';
import GlobalApi from '@/utils/GlobalApi'
import React, { useEffect, useState } from 'react'

const usePrices = () => {

    const [pricesList, setPricesList] = useState([]);

    useEffect(() =>{
      getPrices();
    },[]);
  
    const getPrices = () => {
      GlobalApi.getPrices().then(resp => {
        console.log(resp.data.data);
        setPricesList(resp.data.data);
      });
    }

    return pricesList;
}

export default usePrices