// import { useSelector, useDispatch } from "react-redux";
// import { removeFromCart, increaseQuantity, decreaseQuantity } from "../../features/AddToCart/cartSlice";
// import { useEffect } from "react";

// const AddToCart = () => {
//     const cartItems = useSelector((state) => state.cart); // Get cart items
//     const dispatch = useDispatch();

//     useEffect(()=>{
//         console.log(cartItems);

//     },[cartItems])

//     return (
//         <div className="container mx-auto p-4">
//             <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

//             {cartItems.length === 0 ? (
//                 <p className="text-gray-500">Your cart is empty.</p>
//             ) : (
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     {cartItems.map((car, index) => (
//                         <div key={index} className="flex items-center p-4 bg-white shadow-md rounded-lg">
//                             <img src={car.img} alt={car.name} className="w-24 h-24 object-cover rounded-md" />

//                             <div className="ml-4">
//                                 <h3 className="text-lg font-semibold">{car.name}</h3>
//                                 <p className="text-green-600 font-bold">${car.price} / day</p>
//                             </div>

//                             <button
//                                 onClick={() => dispatch(removeFromCart(car))}
//                                 className="ml-auto bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
//                             >
//                                 Remove
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// const AddToCart = () => {
//     const cartItems = useSelector((state) => state.cart);
//     const dispatch = useDispatch();

//     // Calculate total amount (assumes price is numeric or a string that can be parsed)
//     const totalAmount = cartItems.reduce(
//         (total, item) => total + parseFloat(item.price) * item.quantity,
//         0
//     );

//     const handlePurchase = () => {
//         // Implement purchase functionality, for example:
//         alert("Purchase confirmed!");
//         // Or dispatch a checkout action, etc.
//     };

//     return (
//         <div className="container mx-auto p-4">
//             <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

//             {cartItems.length === 0 ? (
//                 <p className="text-gray-500">Your cart is empty.</p>
//             ) : (
//                 <>
//                     <div className="space-y-4">
//                         {cartItems.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded shadow-md"
//                             >
//                                 <div className="flex items-center">
//                                     <img
//                                         src={item.img}
//                                         alt={item.name}
//                                         className="w-24 h-24 object-cover rounded-md"
//                                     />
//                                     <div className="ml-4">
//                                         <h3 className="text-lg font-bold">{item.name}</h3>
//                                         <p className="text-green-600 font-semibold">
//                                             ${item.price} per day
//                                         </p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-center mt-4 md:mt-0">
//                                     {/* Quantity Controls */}
//                                     <button
//                                         onClick={() => dispatch(decreaseQuantity(item))}
//                                         className="bg-gray-300 px-3 py-1 rounded-l hover:bg-gray-400"
//                                     >
//                                         -
//                                     </button>
//                                     <span className="px-4">{item.quantity}</span>
//                                     <button
//                                         onClick={() => dispatch(increaseQuantity(item))}
//                                         className="bg-gray-300 px-3 py-1 rounded-r hover:bg-gray-400"
//                                     >
//                                         +
//                                     </button>
//                                 </div>
//                                 <div className="flex flex-col items-end mt-4 md:mt-0">
//                                     <p className="font-semibold">
//                                         Subtotal: ${(parseFloat(item.price) * item.quantity).toFixed(2)}
//                                     </p>
//                                     <button
//                                         onClick={() => dispatch(removeFromCart(item))}
//                                         className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                                     >
//                                         Remove
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     {/* Total Amount and Purchase Button */}
//                     <div className="flex flex-col md:flex-row items-center justify-between border-t pt-4 mt-4">
//                         <h3 className="text-xl font-bold">
//                             Total: ${totalAmount.toFixed(2)}
//                         </h3>
//                         <button
//                             onClick={handlePurchase}
//                             className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//                         >
//                             Purchase
//                         </button>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// }

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addToCart, removeToCart } from "../redux/cartSlice";

// const AddToCart = () => {
//     const dispatch = useDispatch();
//     const cartItems = useSelector((state) => state.cart);

//     const handleQuantityChange = (item, quantity) => {
//         if (quantity > 0) {
//             dispatch(addToCart({ ...item, quantity }));
//         }
//     };

//     const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     const gst = subtotal * 0.18;
//     const companyCharges = subtotal * 0.02;
//     const total = subtotal + gst + companyCharges;

//     return (
//         <div className="container mx-auto p-4">
//             <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
//             <div className="grid grid-cols-3 gap-4">
//                 <div className="col-span-2 bg-white p-4 rounded shadow h-[600px] overflow-y-auto">
//                     {cartItems.length === 0 ? (
//                         <p>Your cart is empty.</p>
//                     ) : (
//                         cartItems.map((item) => (
//                             <div key={item.name} className="flex items-center border-b p-4">
//                                 <img src={item.img} alt={item.name} className="w-20 h-20 mr-4 rounded" />
//                                 <div className="flex-1">
//                                     <h3 className="font-bold">{item.name}</h3>
//                                     <p className="text-gray-500">${item.price} per day</p>
//                                     <div className="flex items-center mt-2">
//                                         <span className="mr-2">Quantity:</span>
//                                         <button
//                                             className="px-2 py-1 border rounded bg-gray-200"
//                                             onClick={() => dispatch(decreaseQuantity(item))}
//                                         >
//                                             -
//                                         </button>
//                                         <span className="mx-2">{item.quantity}</span>
//                                         <button
//                                             className="px-2 py-1 border rounded bg-gray-200"
//                                             onClick={() => dispatch(increaseQuantity(item))}
//                                         >
//                                             +
//                                         </button>
//                                     </div>
//                                 </div>
//                                 <button
//                                     onClick={() => dispatch(removeFromCart(item))}
//                                     className="text-red-500 hover:text-red-700 ml-4"
//                                 >
//                                     Remove
//                                 </button>
//                             </div>
//                         ))
//                     )}
//                 </div>

//                 <div className="bg-white p-4 rounded shadow max-h-[300px] self-start">
//                     <h3 className="font-bold text-xl mb-2">Order Summary</h3>
//                     <p>Subtotal: ${subtotal.toFixed(2)}</p>
//                     <p>GST (18%): ${gst.toFixed(2)}</p>
//                     <p>Company Charges (2%): ${companyCharges.toFixed(2)}</p>
//                     <hr className="my-2" />
//                     <p className="font-bold">Total: ${total.toFixed(2)}</p>
//                     <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded w-full">
//                         Proceed to Checkout
//                     </button>
//                 </div>

//             </div>
//         </div>
//     );
// };

// // export default CartPage;


// export default AddToCart;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } from "../../features/AddToCart/cartSlice";
import logo from "../../assets/logo.png"

const AddToCart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const handleQuantityChange = (item, quantity) => {
        if (quantity > 0) {
            dispatch(addToCart({ ...item, quantity }));
        }
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const gst = subtotal * 0.18;
    const companyCharges = subtotal * 0.02;
    const total = subtotal + gst + companyCharges;

    // Dynamically load Razorpay script
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const handlePayment = async () => {
        const options = {
            key: "rzp_test_M8NKs1b3srxEmc", // Replace with your Razorpay API key
            amount: total * 100, // Convert to paise (₹1 = 100 paise)
            currency: "INR",
            name: "Your Store",
            description: "Order Payment",
            image: {logo},
            handler: function (response) {
                alert(Payment Successful! Payment ID: ${response.razorpay_payment_id});
            },
            prefill: {
                name: "JEEL ASHOKBHAI VAGHANI",
                email: "jeelvaghani@gmail.com",
                contact: "8320016609",
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 bg-white p-4 rounded shadow h-[600px] overflow-y-auto">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.name} className="flex items-center border-b p-4">
                                <img src={item.img} alt={item.name} className="w-20 h-20 mr-4 rounded" />
                                <div className="flex-1">
                                    <h3 className="font-bold">{item.name}</h3>
                                    <p className="text-gray-500">${item.price} per day</p>
                                    <div className="flex items-center mt-2">
                                        <span className="mr-2">Quantity:</span>
                                        <button
                                            className="px-2 py-1 border rounded bg-gray-200"
                                            onClick={() => dispatch(decreaseQuantity(item))}
                                        >
                                            -
                                        </button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <button
                                            className="px-2 py-1 border rounded bg-gray-200"
                                            onClick={() => dispatch(increaseQuantity(item))}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button
                                    onClick={() => dispatch(removeFromCart(item))}
                                    className="text-red-500 hover:text-red-700 ml-4"
                                >
                                    Remove
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <div className="bg-white p-4 rounded shadow max-h-[300px] self-start">
                    <h3 className="font-bold text-xl mb-2">Order Summary</h3>
                    <p>Subtotal: ${subtotal.toFixed(2)}</p>
                    <p>GST (18%): ${gst.toFixed(2)}</p>
                    <p>Company Charges (2%): ${companyCharges.toFixed(2)}</p>
                    <hr className="my-2" />
                    <p className="font-bold">Total: ${total.toFixed(2)}</p>
                    <button
                        className="bg-green-500 text-white px-4 py-2 mt-4 rounded w-full"
                        onClick={handlePayment}
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddToCart;