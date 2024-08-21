import type React from "react"
import type { NavBarItem } from "../type"
import { useNavigate } from "react-router-dom"
import 'beercss'

const nav = useNavigate()

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
    primaryIndex: number
    items: NavBarItem[]
}) => {
    return (
        <div className="nav">
            {
                opt.items.map((obj, index) => {
                    return (
                        <a key={index} onClick={() => obj.action ? obj.action : obj.link ? nav(obj.link) : null} className={index === opt.primaryIndex ? 'primary' : ''}>
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
    );
};

export const Drawer = (opt: {
    primaryIndex: number
    items: NavBarItem[]
}) => {
    return (
        <nav className="drawer">
            {
                opt.items.map((obj, index) => {
                    return (
                        <a key={index} onClick={() => obj.action ? obj.action : obj.link ? nav(obj.link) : null} className={(index === opt.primaryIndex) ? 'active' : ''}>
                            <i>{obj.icon}</i>
                            <span>{obj.text}</span>
                        </a>
                    )
                })
            }
        </nav>
    )
}

export const ExpandDrawer = (opt: {
    id: string
    primaryIndex: number
    items: NavBarItem[]
}) => {
    return (
        <dialog id={opt.id} onClick={event => event.stopPropagation()} className={`left-align max`}>
            <button onClick={() => ui('#mobileNav')} className="circle transparent">
                <div className="row">
                    <i>close</i>
                </div>
            </button>
            {
                opt.items.map((obj, index) => {
                    return (
                        <article key={index} onClick={() => obj.action ? obj.action : obj.link ? nav(obj.link) : null} className={(index === opt.primaryIndex) ? 'primary' : ''}>
                            <div className="row">
                                <i className="small-margin">{obj.icon}</i>
                                <div className="max">
                                    <span>{obj.text}</span>
                                </div>
                            </div>
                        </article>
                    )
                })
            }
        </dialog>
    )
}