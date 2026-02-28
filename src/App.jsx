import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
// import ProductList from './pages/ProductList';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/detail" element={<ProductDetail />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    {/* <Route path="/product-list" element={<ProductList />} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
