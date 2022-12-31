import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import OpenModal from './components/OpenModal';
import { useState, useEffect} from 'react';
import Products from './products/Products';
import { shopItemList, futureProofAudio } from './products/Products';
import {Home, About, Contact, Notfound, Shop, Login, SignUp} from './pages';
import {SkullCandyh1, SkullCandygrey, SkullCandyEarphones, SkullCandyBlue, SmartWatch, SkullCandySpeakers, Earbuds, Headphones} from './products/ProductPages';
import ProductOptionList from './components/Shared/CartList/ProductOptionList';
import Subscription from './components/Shared/Subscription';
import CartModal from './components/Shared/CartList/CartModal';
import Cart from './components/Shared/CartList/Cart';



function App() {
  //Home page product display
  const [items, setItems] = useState(Products);

  //Modal functionality
  const [IsButtonModal, setButtonModal] = useState(true);
  const [IsOpenModal, setOpenModal] = useState(false);

  //useState for Navbar
  const [search, setSearchBar] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [node, setNode] = useState("");

  //quantity - product detail page
  const [counter, setCounter] = useState(1);

  //cart
  const [cart, setCart] = useState([]);
  const [value, setValue] = useState(1);

  //get Item to permanently save the cart in cart
  const [saved, setSaved] = useState(() => {
    const savedItem = localStorage.getItem("saved");
    const initialItem = JSON.parse(savedItem);
    return initialItem || [];
  });

  //subscription modal state
    const [message, setMessage] = useState();

  //Cart functions
  //Increase amount functionality
  const updateAmount = (id) => {
    let selectedItem = id;
    setValue((prevCount) => prevCount + 1);
  };

  //Reduce amount
  const reduceAmount = (id) => {
    let selectedItem = id;
    if (value > 0) {
      setValue((prevCount) => prevCount - 1);
    } else {
      setValue(0);
    }
  };

  //when user clicks add to cart, the items selected are stored in the cart state along with any previous item.
  const addItem = (newItems) => {
    setSaved([newItems, ...saved]);
    console.log(saved);
  };

  

  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(saved));
  }, [saved]);



  //Modal function when it is clicked
  useEffect(() => {
    if (IsOpenModal) {
      document.body.style.overflowY = "hidden";
    }
  }, [IsOpenModal]);


  


  return (
    <>
      <div>
        <Router>
          <div className='flex flex-col overflow-x-hidden h-screen container-width mx-auto'>
            <Navbar
              search={search}
              setSearch={setSearchBar}
              dropDown={dropDown}
              setDropDown={setDropDown}
              node={node}
              setNode={setNode}
              saved={saved}
            />

            <main>
              <Routes>
                <Route
                  path='/'
                  exact
                  element={<Home items={items} setItems={setItems} />}
                />
                <Route
                  path='/home'
                  exact
                  element={<Home items={items} setItems={setItems} />}
                />
                <Route
                  path='/newreleases'
                  exact
                  element={<Home items={items} setItems={setItems} />}
                />
                <Route
                  path='/shop'
                  exact
                  element={<Shop shopList={shopItemList} />}
                />
                <Route path='/about' exact element={<About />} />
                <Route path='/contact' exact element={<Contact />} />
                <Route path='/notfound' exact element={<Notfound />} />
                <Route path='/login' exact element={<Login />} />
                <Route path='/signup' exact element={<SignUp />} />
                <Route
                  path='/skullcandyh1'
                  exact
                  element={
                    <SkullCandyh1
                      cartOptions={ProductOptionList}
                      saved={saved}
                      addItemCart={addItem}
                      updateAmount={updateAmount}
                      reduceAmount={reduceAmount}
                      value={value}
                      setValue={setValue}
                    />
                  }
                />
                <Route
                  path='/skullcandygrey'
                  exact
                  element={
                    <SkullCandygrey
                      addItemCart={addItem}
                      saved={saved}
                      updateAmount={updateAmount}
                      reduceAmount={reduceAmount}
                      value={value}
                      setValue={setValue}
                    />
                  }
                />
                <Route path='/earbuds' exact element={<Earbuds />} />
                <Route path='/headphones' exact element={<Headphones />} />
                <Route
                  path='/skullcandyspeakers'
                  exact
                  element={<SkullCandySpeakers />}
                />
                <Route
                  path='/skullcandyearphones'
                  exact
                  element={<SkullCandyEarphones />}
                />
                <Route
                  path='/skullcandyblue'
                  exact
                  element={<SkullCandyBlue />}
                />
                <Route
                  path='/cart'
                  exact
                  element={
                    <Cart
                      saved={saved}
                      setSaved={setSaved}
                      updateAmount={updateAmount}
                      reduceAmount={reduceAmount}
                    />
                  }
                />
                <Route
                  path='/cart'
                  exact
                  element={<CartModal saved={saved} />}
                />
              </Routes>
            </main>

            <Subscription message={message} setMessage={setMessage}/>

            <Footer message={message} setMessage={setMessage}/>
          </div>
        </Router>

        <OpenModal
          modal={IsButtonModal}
          setButtonModal={setButtonModal}
          openModal={IsOpenModal}
          setOpenModal={setOpenModal}
        />
      </div>
    </>
  );
}

export default App
