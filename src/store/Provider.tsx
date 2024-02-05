'use client'

import { Provider } from "react-redux"
import { store } from "."
import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export const Providers = ({ children }: Props) => {
  return (
    <Provider store={ store }>
        {children}
    </Provider>
  )
}

