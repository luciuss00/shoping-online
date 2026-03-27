import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Help from './pages/Help';
import Search from './pages/Search';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import Pay from './pages/Pay';
import PurchaseGuide from './pages/PurchaseGuide';
import WarrantyPolicy from './pages/WarrantyPolicy';
import ReturnPolicy from './pages/ReturnPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Career';
// CatalogItem
import Shirt from './pages/CatalogItem/Shirt';
import Speaker from './pages/CatalogItem/Speaker';
import Technology from './pages/CatalogItem/Technology';
import SchoolSupply from './pages/CatalogItem/SchoolSupply';
import Food from './pages/CatalogItem/Food';
import Belonging from './pages/CatalogItem/Belonging';
import Gaming from './pages/CatalogItem/Gaming';
import Household from './pages/CatalogItem/Household';
import Shoe from './pages/CatalogItem/Shoe';
import Hat from './pages/CatalogItem/Hat';
import Interior from './pages/CatalogItem/Interior';
import Accessory from './pages/CatalogItem/Accessory';
import Trouser from './pages/CatalogItem/Trouser';
import Sport from './pages/CatalogItem/Sport';
import Device from './pages/CatalogItem/Device';
import Ultity from './pages/CatalogItem/Ultity';
import Jewelry from './pages/CatalogItem/Jewelry';
import Decoration from './pages/CatalogItem/Decoration';
import Office from './pages/CatalogItem/Office';
//
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductDetailInCart from './pages/ProductDetail/ProductDetailInCart';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
// Context
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';

function App() {
    return (
        <ProductProvider>
            <CartProvider>
                <Router>
                    <div className="App">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/help" element={<Help />} />
                            <Route path="/search" element={<Search />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/pay" element={<Pay />} />
                            <Route path="/purchase-guide" element={<PurchaseGuide />} />
                            <Route path="/warranty-policy" element={<WarrantyPolicy />} />
                            <Route path="/return-policy" element={<ReturnPolicy />} />
                            <Route path="/shipping-policy" element={<ShippingPolicy />} />
                            <Route path="/about-us" element={<AboutUs />} />
                            <Route path="/career" element={<Careers />} />
                            <Route path="/about-us" element={<ShippingPolicy />} />
                            <Route path="/about-us" element={<ShippingPolicy />} />

                            <Route path="/catalog/shirt" element={<Shirt />} />
                            <Route path="/catalog/speaker" element={<Speaker />} />
                            <Route path="/catalog/technology" element={<Technology />} />
                            <Route path="/catalog/school-supply" element={<SchoolSupply />} />
                            <Route path="/catalog/food" element={<Food />} />
                            <Route path="/catalog/belonging" element={<Belonging />} />
                            <Route path="/catalog/gaming" element={<Gaming />} />
                            <Route path="/catalog/household" element={<Household />} />
                            <Route path="/catalog/shoe" element={<Shoe />} />
                            <Route path="/catalog/hat" element={<Hat />} />
                            <Route path="/catalog/interior" element={<Interior />} />
                            <Route path="/catalog/accessory" element={<Accessory />} />
                            <Route path="/catalog/trouser" element={<Trouser />} />
                            <Route path="/catalog/sport" element={<Sport />} />
                            <Route path="/catalog/device" element={<Device />} />
                            <Route path="/catalog/ultity" element={<Ultity />} />
                            <Route path="/catalog/jewelry" element={<Jewelry />} />
                            <Route path="/catalog/decoration" element={<Decoration />} />
                            <Route path="/catalog/office" element={<Office />} />

                            <Route path="/detail" element={<ProductDetail />} />
                            <Route path="/cart/detail" element={<ProductDetailInCart />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/signin" element={<SignIn />} />
                            <Route path="/reset-password" element={<ResetPassword />} />
                        </Routes>
                    </div>
                </Router>
            </CartProvider>
        </ProductProvider>
    );
}

export default App;
