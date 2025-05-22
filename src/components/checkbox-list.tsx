"use client"

import { useState } from "react"
import CheckBox from "./checkbox"

export default function CheckBoxList(){

    const [members] = useState<string[]>(["Jeremy K.", "Patrick", "Christophe", "Allan", "Greg", "Martin", "Maria", "Camille", "Arnaud", "Caroline", "Emilie", "Oussama", "Kevin"])

    return(
        <div className="card w-96 bg-base-100 card-xs shadow-sm">
            <div className="card-body">
                <h2 className="card-title text-xl">Membres</h2>
                {members.map(member => <CheckBox key={member} label={member} />)}
            </div>
        </div>
    )
}