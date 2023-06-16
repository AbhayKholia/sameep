import React from 'react';
import "./HomePage.scss";
import  Slider from "../../components/Slider/Slider"
import { useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux';
import { getAllCategories } from '../../store/categorySlice';
import ProductList from "../../components/ProductList/ProductList"
import { fetchAsyncProducts }  from '../../store/productSlice';
import Loader from "../../components/Loader/Loader";
import {STATUS} from "../../utils/status";
import{getAllProducts} from "../../store/productSlice";
import {getAllProductsStatus} from "../../store/productSlice";

const HomePage = () => {
  const dispatch = useDispatch()
  const categories = useSelector(getAllCategories);

  useEffect(()=>{
   dispatch(fetchAsyncProducts(50))
  },[])

  const products = useSelector(getAllProducts);
  console.log(products)
  const productStatus = useSelector(getAllProductsStatus);
  // console.log(productStatus)

  return (
    <main>
 <div className='slider-wrapper'>
        <Slider/>
    </div>
    <div className='main-content bg-whitesmoke'>
      <div className='container'>
        <div className='categories py-5'>
          <div className='categories-item'>
            <div className='title-md'>
              <h3>See our products</h3>
            </div>
            {
              productStatus === STATUS.LOADING ? <Loader/> : <ProductList products={products} />
            }
          </div>
        </div>
      </div>
    </div>
    </main>
   
  )
}

export default HomePage