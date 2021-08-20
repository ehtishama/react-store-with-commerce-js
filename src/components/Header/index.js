import React from "react";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className="bg-white border mb-8">
            <div className="container mx-auto py-4">
                <Link to={"/"}>
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
                </Link>
            </div>
        </div>
    );
}
