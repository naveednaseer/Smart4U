import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Pagination } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import { listProducts } from '../actions/productActions'


const HomeScreen = ({history}) => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const {error, loading, products, page, pages} = productList

    let keyword = history.location.search

    useEffect(() => {
        dispatch(listProducts(keyword))
    }, [dispatch, keyword])

    return (
        <div>
            <u>
                <h1 className="text-center m-3">Our Latest Products</h1>
            </u>
            {loading ? <Loader/>
                : error ? <Message variant='alert alert-danger'> {error} </Message>
                :
                <div>
                    <Row>     
                        {products.map((product) => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        ))}
                    </Row>

                    <Paginate page={page} pages={pages} keyword={keyword} />

                </div>
            }
            
        </div>
    )
}

export default HomeScreen
