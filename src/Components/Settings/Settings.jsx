
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Settings = () => {
    const [selectedMenu, setSelectedMenu] = useState("Treatments");
    const menus = ["General", "Password", "Price", "Treatments"];
  
    return (
      <div className="flex min-h-screen">
        <div className="w-1/4 bg-white p-4">
          <h2 className="text-xl font-bold mb-4">Settings</h2>
          <ul className="list-none bg-indigo-50 rounded-3xl p-3">
            {menus.map((menu) => (
              <li
                key={menu}
                onClick={() => setSelectedMenu(menu)}
                className={`cursor-pointer py-2 px-4 mb-2 rounded-lg ${
                  selectedMenu === menu
                    ? "bg-white text-indigo-500"
                    : "hover:bg-gray-200"
                }`}
              >
                {menu}
              </li>
            ))}
          </ul>
        </div>
  
        <div className="w-3/4 p-6">
          {selectedMenu === "Treatments" ? <Treatments /> : <div>{selectedMenu} Content</div>}
        </div>
      </div>
    );
};

const Treatments = () => {
  const [selectedCategory, setSelectedCategory] = useState("Skin improvement");
  const [subCategories, setSubCategories] = useState([]);
  const [newTreatment, setNewTreatment] = useState("");

  const categories = [
    "Injectables",
    "Skin improvement",
    "Hair removal",
    "Soft surgery",
    "Plastic surgery",
  ];

  useEffect(() => {
    const savedData = localStorage.getItem(selectedCategory);
    setSubCategories(savedData ? JSON.parse(savedData) : []);
  }, [selectedCategory]);

  const addTreatment = () => {
    if (newTreatment.trim()) {
      const updatedSubCategories = [...subCategories, newTreatment.trim()];
      setSubCategories(updatedSubCategories);
      setNewTreatment("");
      toast.success("List Add Success. Please Save.");
    }
  };

  const removeTreatment = (index) => {
    const updatedSubCategories = subCategories.filter((_, i) => i !== index);
    setSubCategories(updatedSubCategories);
  };

  const saveChanges = () => {
    localStorage.setItem(selectedCategory, JSON.stringify(subCategories));
    toast.success(`Saved changes for ${selectedCategory}`);
  };

  const cancelChanges = () => {
    const savedData = localStorage.getItem(selectedCategory);
    setSubCategories(savedData ? JSON.parse(savedData) : []);
  };

  return (
    <div className="bg-white font-urbanist  rounded-lg p-6">
      <h3 className="text-lg font-bold mb-4">Treatments</h3>

      <div className="flex">
        <div className="w-1/3">
          <ul className="list-none mr-8 rounded-3xl p-3">
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer py-2 px-4 mb-2 rounded-lg ${
                  selectedCategory === category
                    ? "bg-indigo-50 text-indigo-500"
                    : "hover:bg-indigo-50"
                }`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-2/3 rounded-2xl bg-indigo-50 p-3">
          <h4 className="text-lg font-bold mb-4">
            {selectedCategory} ({subCategories.length})
          </h4>
          <ul className="rounded-3xl">
            {subCategories.map((sub, index) => (
              <li
                key={index}
                className="flex items-center justify-between border border-gray-400 py-2 px-4 rounded-lg mb-2"
              >
                {sub}
                <button onClick={() => removeTreatment(index)}>✕</button>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center space-x-4">
            <input
              type="text"
              value={newTreatment}
              onChange={(e) => setNewTreatment(e.target.value)}
              placeholder="Add Subcategory..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              onClick={addTreatment}
              className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
            >
              +
            </button>
          </div>

          <div className="flex w-full space-x-4 mt-4">
            <button
              onClick={cancelChanges}
              className="w-1/2 text-indigo-500 px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={saveChanges}
              className="w-1/2 bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
