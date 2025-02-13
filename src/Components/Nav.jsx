export default function Nav({children, ...rest}) {
    return (<nav {...rest}><ul className={'nav-list'}>{children}</ul></nav>)
}