import React from "react";

export default function Header() {
    return (
        <div className="bg-white border mb-8">
            <div className="container mx-auto py-4">
                <h2 className={"text-3xl font-semibold text-gray-700"}>
                    <span className={"text-blue-500"}>
                        React
                    </span>
                    -
                    <span className={"text-purple-700"}>
                        Redux &nbsp;
                    </span>
                    Shop
                </h2>
            </div>
        </div>
    );
}
