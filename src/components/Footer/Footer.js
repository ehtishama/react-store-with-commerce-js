import React from "react"
import logo from "../../assets/logo_temp_2.png"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className={"mt-20 border-t"}>
            <div className="max-w-screen-lg mx-auto px-4 py-24">
                <div className="flex flex-wrap gap-32 justify-between">
                    {/* logo */}
                    <div>
                        <Link to={"/"}>
                            <img src={logo} alt="Logo" className={"w-32"} />
                        </Link>
                    </div>

                    {/* links 1 */}
                    <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Our Community</h4>
                        <ul>
                            <li className="text-gray-700 font-medium hover:underline hover:text-indigo-600 mb-0.5">
                                <a href="#blog">Our Blog</a>
                            </li>
                            <li className="text-gray-700 font-medium hover:underline hover:text-indigo-600 mb-0.5">
                                <a href="#blog">Referral Program</a>
                            </li>
                        </ul>
                    </div>

                    {/* links 2 */}
                    <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Support</h4>
                        <ul>
                            <li className="text-gray-700 font-medium hover:underline hover:text-indigo-600 mb-0.5">
                                <a href="#blog">Exchane API</a>
                            </li>
                            <li className="text-gray-700 font-medium hover:underline hover:text-indigo-600 mb-0.5">
                                <a href="#blog">Fees</a>
                            </li>
                            <li className="text-gray-700 font-medium hover:underline hover:text-indigo-600 mb-0.5">
                                <a href="#blog">Support Portal</a>
                            </li>
                        </ul>
                    </div>

                    {/* links 3 */}
                    <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">Legal</h4>
                        <ul>
                            <li className="text-gray-700 font-medium hover:underline hover:text-indigo-600 mb-0.5">
                                <a href="#blog">Privacy Policy</a>
                            </li>
                            <li className="text-gray-700 font-medium hover:underline hover:text-indigo-600 mb-0.5">
                                <a href="#blog">Terms of Service and Use</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
