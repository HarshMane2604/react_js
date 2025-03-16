import React from "react";

function Card(props) {
  console.log(props.username);
  return (
    <div>
      <div className="mb-5 max-w-sm rounded-2xl overflow-hidden shadow-xl bg-white p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
        <img
          className="w-full rounded-lg"
          src="https://images.unsplash.com/photo-1583744605444-4634155ffad6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Card Image"
        />
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-900">{props.username}</h2>
          <p className="text-gray-600 mt-2 leading-relaxed">
            This is a beautifully styled card with hover effects and smooth
            transitions.
          </p>
          <button className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-lg hover:opacity-90 transition-all">
            {props.btnText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
