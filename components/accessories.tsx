import type React from "react"
import type { NavBarItem } from "../type"
import { useNavigate } from "react-router-dom"

export const SnackBar = (opt: {
    id: string
    msg: string
}) => {
    return (
        <div id={opt.id} className="snackbar">
            {opt.msg}
        </div>
    )
}

export const FatalErr = (opt: {
    msg: string
}) => {
    <>
        <div className={`overlay blur ${opt.msg ? "active" : ''}`}></div>
        <dialog className={`blur border no-border responsive small-round ${opt.msg ? "active" : ''}`}>
            <h5>Err</h5>
            <span>请尝试重载该应用</span>
            <div>{opt.msg}</div>
            <nav className="right-align no-space">
            </nav>
        </dialog>
    </>
}

export const NavBar = (opt: {
    children: React.ReactNode
    primary: string
    items: NavBarItem[]
}) => {
    const nav = useNavigate()
    return (
        <>
            <div className="nav">
                <header>
                    {opt.children}
                </header>
                {
                    opt.items.map((obj) => {
                        return (
                            <a onClick={() => obj.action ? obj.action : obj.link ? nav(obj.link) : null} className={opt.primary === obj.text ? 'primary' : ''}>
                                <i>
                                    {obj.icon}
                                </i>
                                <span>
                                    {obj.text}
                                </span>
                            </a>
                        )
                    })
                }
            </div>
        </>
    );
};