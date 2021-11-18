import { useRouter } from "next/router"
import LInk, {LinkProps} from "next/link"
import { cloneElement, ReactElement } from "react"

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  shouldMatchExactHref?: boolean
}

export const ActiveLink = ({children, shouldMatchExactHref = false, ...rest}: ActiveLinkProps) => {
  const {asPath} = useRouter()
  let isActive = false

  if(shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true
  }


  if(!shouldMatchExactHref && 
      (asPath.startsWith(String(rest.href)) || 
        asPath.startsWith(String(rest.as)))) {
    isActive = true
  }

  return(
    <LInk {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.300' : 'gray.50'
      })}
    </LInk>
  )
}