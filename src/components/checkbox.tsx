"use client"

interface CheckBoxProps{
    label: string
    checked?: boolean
    toggleChecked?: () => void
}

export default function CheckBox({label, checked, toggleChecked}: CheckBoxProps){
    return (
        <label className="label">
            <input type="checkbox" defaultChecked={checked} onChange={toggleChecked} className="checkbox" />
            <span className="text-lg">{label}</span>
        </label>
    )
}