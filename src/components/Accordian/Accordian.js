import React, { useState } from "react"

const Accordian = ({ children, title }) => {
    const [open, setOpen] = useState(false)
    const active = open? 'bg-indigo-300': ''

    return (
        <div>
            <button onClick={() => setOpen((open) => !open)}
                className={`font-medium text-indigo-600 w-full flex justify-between bg-indigo-50 hover:bg-indigo-200 p-3 rounded-lg ${active}`}>
                <p>{title}</p>
                <span>
                    {!open && '▶'}
                    {open && '🔽'}
                </span>
            </button>
            {open && children}
        </div>
    )
}

export default Accordian
