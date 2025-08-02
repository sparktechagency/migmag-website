import React from "react";
import {FaTimes} from "react-icons/fa";

interface OrderDetailsProps {
    orderId: number | string;
    onClose: () => void;
}

const OrderDetails: React.FC<OrderDetailsProps> = ({orderId, onClose}) => {
    return (
        <div className=" bg-white text-black rounded-lg shadow-lg p-8 w-[60%] mx-auto  relative    ">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-3 cursor-pointer right-3 text-gray-700  text-xl"
                aria-label="Close"
            >
                <FaTimes/>
            </button>

            {/* Modal Content */}
            <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
            <p className="mb-2">
                <span className="font-medium">Order ID:</span> {orderId}
            </p>

            {/* Add more details as needed */}
            <p>More order info will go here...</p>
        </div>
    );
};

export default OrderDetails;
