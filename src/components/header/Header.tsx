import "./header.less";

interface IHeaderProps {
}

export const Header = ({children}: React.PropsWithChildren<IHeaderProps>) => {
    return (
        <header className="header">{children}</header>
    )
}