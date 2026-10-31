import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="flex justify-center py-4 gap-10">
        <Link className="text-2xl font-semibold" to="/Product/men">
          Men
        </Link>
        <Link className="text-2xl font-semibold" to="/Product/women">
          Women
        </Link>
        <Link className="text-2xl font-semibold" to="/Product/kids">
          Kids
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Product;
