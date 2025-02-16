export default function Nav({children, ref,...rest}) {
    return (<nav {...rest}><ul className={'nav-list'}>{children}</ul></nav>)
}