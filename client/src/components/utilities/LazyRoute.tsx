import React, { ReactNode, useState } from "react";
import { Route } from "react-router-dom";

type Props = {
  exact?: boolean
  path?: string
  children: ReactNode
}

export const LazyRoute = ({ exact, path, children }: Props) => {
  const [wasVisible, setWasVisible] = useState(false)

  return (
    <Route exact={exact} path={path}>
      {({ match }) => {
        if (match) {
          if (!wasVisible) {
            setImmediate(() => {
              setWasVisible(true)
            })
          }
          return children
        } else if (wasVisible) {
          // Continue to render the route content, albeit hidden, if the tab was
          // already visible
          return (
            <div style={{ display: 'none' }}>{children}</div>
          )
        } else {
          // Do not render routes that have not been seen yet (hence "lazy")
          return null
        }
      }}
    </Route>
  )
}
