import type { NavBarItem } from "../type"
import { useNavigate } from "react-router-dom"
import 'beercss'
import type { ReactNode } from "react"

export const SnackBar = (opt: {
    id: string
    msg: string
    children?: ReactNode
    className: string
}) => {
    return (
        <div id={opt.id} className={`snackbar ${opt.className}`}>
            {opt.msg}
            {opt.children}
        </div>
    )
}

export const FatalErr = (opt: {
    msg: string
    children?: ReactNode
    className: string
}) => {
    return (
        <>
            <div className={`overlay blur ${opt.msg ? "active" : ''}`}></div>
            <dialog className={`center-align blur border no-border responsive small-round ${opt.msg ? "active" : ''} ${opt.className}`}>
                <h5>Err</h5>
                <span>Please try reloading this APP</span>
                <div>{opt.msg}</div>
                {opt.children}
            </dialog>
        </>
    )
}

export const NavBar = (opt: {
    primaryIndex: number
    items: NavBarItem[]
    children?: ReactNode
    className: string
}) => {
    const nav = useNavigate()
    return (
        <div className={`nav ${opt.className}`}>
            {opt.children}
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
    children?: ReactNode
    className: string
}) => {
    const nav = useNavigate()
    return (
        <nav className={`drawer ${opt.className}`}>
            {opt.children}
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
    children?: ReactNode
    className: string
}) => {
    const nav = useNavigate()
    return (
        <dialog id={opt.id} onClick={event => event.stopPropagation()} className={`max ${opt.className}`}>
            <button onClick={() => ui('#mobileNav')} className="circle transparent">
                <div className="row">
                    <i>close</i>
                </div>
            </button>
            {opt.children}
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