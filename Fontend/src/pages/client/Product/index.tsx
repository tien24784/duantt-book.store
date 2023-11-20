import { useEffect } from "react";
import Footer from "../../../compoment/footer"
import Header from "../../../compoment/header"
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { getAllProduct } from "../../../redux/Reducer/ProductSlice";
import { Link } from "react-router-dom";

const Product = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.Product.products);

    useEffect(() => {
        // setIsLoading(true);
        dispatch(getAllProduct())
    }, [dispatch]);

    useEffect(() => {
        // setIsLoading(true);
        dispatch(getAllProduct())
    }, []);
    return <>
        <div className="wrapper">
            <Header />
            <div id="content-page" className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="iq-card-transparent mb-0">
                                <div className="d-block text-center">
                                    <h2 className="mb-3">Search by Book Name</h2>
                                    <div className="w-100 iq-search-filter">
                                        <ul className="list-inline p-0 m-0 row justify-content-center search-menu-options">
                                            <li className="search-menu-opt">
                                                <div className="iq-dropdown">
                                                    <div className="form-group mb-0">
                                                        <select className="form-control form-search-control bg-white border-0" id="exampleFormControlSelect1">
                                                            <option selected="">All</option>
                                                            <option>A Books</option>
                                                            <option>the Sun</option>
                                                            <option>Harsh book</option>
                                                            <option>People book</option>
                                                            <option>the Fog</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="search-menu-opt">
                                                <div className="iq-dropdown">
                                                    <div className="form-group mb-0">
                                                        <select className="form-control form-search-control bg-white border-0" id="exampleFormControlSelect2">
                                                            <option selected="">Genres</option>
                                                            <option>General</option>
                                                            <option>History</option>
                                                            <option>Horror</option>
                                                            <option>Fantasy</option>
                                                            <option>Literary</option>
                                                            <option>Manga</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="search-menu-opt">
                                                <div className="iq-dropdown">
                                                    <div className="form-group mb-0">
                                                        <select className="form-control form-search-control bg-white border-0" id="exampleFormControlSelect3">
                                                            <option selected="">Year</option>
                                                            <option>2015</option>
                                                            <option>2016</option>
                                                            <option>2017</option>
                                                            <option>2018</option>
                                                            <option>2019</option>
                                                            <option>2020</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="search-menu-opt">
                                                <div className="iq-dropdown">
                                                    <div className="form-group mb-0">
                                                        <select className="form-control form-search-control bg-white border-0" id="exampleFormControlSelect4">
                                                            <option selected="">Author</option>
                                                            <option>Milesiy Yor</option>
                                                            <option>Ira Membrit</option>
                                                            <option>Anna Mull</option>
                                                            <option>John Smith</option>
                                                            <option>David King</option>
                                                            <option>Kusti Franti</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="search-menu-opt">
                                                <div className="iq-search-bar search-book d-flex align-items-center">
                                                    <form action="#" className="searchbox">
                                                        <input type="text" className="text search-input" placeholder="search here..." />
                                                        <a className="search-link" href="#"><i className="ri-search-line"></i></a>
                                                    </form>
                                                    <button className="btn btn-primary search-data ml-2">Search</button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="iq-card">
                                <div className="iq-card-body">
                                    <div className="row">
                                        {products?.map(item => {
                                            return <>
                                                <div className="col-sm-6 col-md-4 col-lg-3">
                                                    <div className="iq-card iq-card-block iq-card-stretch iq-card-height search-bookcontent">
                                                        <div className="iq-card-body p-0">
                                                            <div className="d-flex align-items-center">
                                                                <div className="col-6 p-0 position-relative image-overlap-shadow">
                                                                    <Link to={`/products/${item._id}`}><img className="img-fluid rounded w-100" src={item?.images} alt="" /></Link>
                                                                    <div className="view-book">
                                                                        <Link to={`/products/${item._id}`} className="btn btn-sm btn-white">View Book</Link>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div className="mb-2">
                                                                        <h6 className="mb-1">{item.name}</h6>
                                                                        <p className="font-size-13 line-height mb-1">{item.author}</p>
                                                                        <div className="d-block">
                                                                            <span className="font-size-13 text-warning">
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="price d-flex align-items-center">
                                                                        {/* <span className="pr-1 old-price">$99</span> */}
                                                                        <h6><b>{item.price}</b></h6>
                                                                    </div>
                                                                    <div className="iq-product-action">
                                                                        <a href=""><i className="ri-shopping-cart-2-fill text-primary"></i></a>
                                                                        <a href="" className="ml-2"><i className="ri-heart-fill text-danger"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>
}

export default Product