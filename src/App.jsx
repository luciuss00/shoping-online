import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Book from './pages/Catalog/Book';
import Speaker from './pages/Catalog/Speaker';
import ProductDetail from './pages/ProductDetail';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import { ProductProvider } from './context/ProductContext';

function App() {
    return (
        <ProductProvider>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/catalog/book" element={<Book />} />
                        <Route path="/catalog/speaker" element={<Speaker />} />
                        <Route path="/detail" element={<ProductDetail />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/reset-password" element={<ResetPassword />} />
                    </Routes>
                </div>
            </Router>
        </ProductProvider>
    );
}

export default App;
