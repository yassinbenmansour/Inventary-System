import React from "react";
import { Link } from "react-router-dom";

function SideMenu() {
  const localStorageData = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="h-full flex-col justify-between  bg-violet-800 hidden lg:flex ">
      <div className="px-8 py-6">
        <nav aria-label="Main Nav" className="mt-6 flex flex-col space-y-1">
          <Link
            to="/"
            className="flex items-center gap-2 rounded-lg hover:bg-violet-400 px-4 py-2 text-white"
          >
            
            <img width="20" height="20" src="https://img.icons8.com/cute-clipart/64/home.png" alt="home"/>
            <span className="text-lg font-medium"> Dashboard </span>
          </Link>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg  hover:bg-violet-400 px-4 py-2 text-white">
              <Link to="/inventory" >
                <div className="flex items-center gap-2">
                <img width="26" height="26" src="https://img.icons8.com/color/48/move-by-trolley.png" alt="move-by-trolley"/>


                  <span className="text-lg font-medium"> Inventaire </span>
                </div>
              </Link>
            </summary>
          </details>

          <Link
            to="/purchase-details"
            className="flex items-center gap-2 rounded-lg hover:bg-violet-400 px-4 py-2 text-white"

          >
            <img width="26" height="26" src="https://img.icons8.com/clouds/100/shopping-basket-success.png" alt="shopping-basket-success"/>
            <span className="text-lg font-medium">Détails d'achat</span>
          </Link>
          <Link
            to="/sales"
            className="flex items-center gap-2 rounded-lg hover:bg-violet-400 px-4 py-2 text-white"
          >
          <img width="26" height="26" src="https://img.icons8.com/fluency/48/total-sales-1.png" alt="total-sales-1"/>

            <span className="text-lg font-medium"> Ventes</span>
          </Link>

          <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between rounded-lg  hover:bg-violet-400 px-4 py-2 text-white">
              <Link to="/manage-store">
                <div className="flex items-center gap-2">
                <img width="26" height="26" src="https://img.icons8.com/fluency/48/online-store.png" alt="online-store"/>


                  <span className="text-lg font-medium">Gérer le magasin </span>
                </div>
              </Link>
            </summary>
          </details>
        </nav>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <div className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
          <img
            alt="Profile"
            src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div>
            <p className="text-xs">
              <strong className="block font-medium">
                {localStorageData.firstName + " " + localStorageData.lastName}
              </strong>

              <span> {localStorageData.email} </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
