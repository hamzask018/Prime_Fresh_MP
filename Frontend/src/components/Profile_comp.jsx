/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("orders");

  // Dummy data for orders
  const orders = [
    { id: 1, item: "Pizza", date: "2024-09-12" },
    { id: 2, item: "Burger", date: "2024-10-01" },
    { id: 3, item: "Pasta", date: "2024-10-10" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "orders":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Your Orders</h2>
            {orders.map((order) => (
              <div key={order.id} className="mb-2 p-2 border rounded-md">
                {order.item} - {order.date}
              </div>
            ))}
          </div>
        );
      case "address":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Your Address</h2>
            <p>123, Flavor Street, Food City, Country</p>
          </div>
        );
      case "contact":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p>Email: support@flavoro.com</p>
            <p>Phone: +1234567890</p>
          </div>
        );
      case "faq":
        return (
          <div>
            <h2 className="text-xl font-bold mb-4">FAQ</h2>
            <p>Here are some frequently asked questions...</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className=" flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg flex flex-col lg:flex-row w-4/5 max-w-5xl overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-full lg:w-1/3 bg-green-500 text-white p-6">
          <div className="text-center mb-6">
            <img
              src="https://via.placeholder.com/150" // Replace with the actual profile image URL
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h1 className="text-xl font-bold">John Doe</h1>
          </div>
          <div className="space-y-4">
            <button
              onClick={() => setActiveTab("orders")}
              className="block w-full text-left hover:bg-green-600 px-4 py-2 rounded"
            >
              Your Orders
            </button>
            <button
              onClick={() => setActiveTab("address")}
              className="block w-full text-left hover:bg-green-600 px-4 py-2 rounded"
            >
              Your Address
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className="block w-full text-left hover:bg-green-600 px-4 py-2 rounded"
            >
              Contact Us
            </button>
            <button
              onClick={() => setActiveTab("faq")}
              className="block w-full text-left hover:bg-green-600 px-4 py-2 rounded"
            >
              FAQ's
            </button>
          </div>
          <div className="mt-10">
            <button
              className="block w-full text-left hover:bg-green-200 px-4 py-2 rounded bg-gray-500"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-2/3 p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Profile;
