import type { Dispatch, SetStateAction } from "react"

export interface He {
    S: Dispatch<SetStateAction<string>>
    F: Dispatch<SetStateAction<string>>
}

export interface NavBarItem {
    icon: string
    text: string
    action?: ([string]: any) => any
    link?: string
}