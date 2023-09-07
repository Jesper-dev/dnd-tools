import "./title.less";

interface IHeaderProps {
    title: string;
    level: "h1" | "h2" | "h3" | "h4" | "h5";
}

export const Title = ({ title, level }: IHeaderProps) => {
    const renderTitle = () => {
        switch (level) {
            case "h1":
                return <h1 className="title">{title}</h1>;
            case "h2":
                return <h2 className="title">{title}</h2>;
            case "h3":
                return <h3 className="title">{title}</h3>;
            case "h4":
                return <h4 className="title">{title}</h4>;
            case "h5":
                return <h5 className="title">{title}</h5>;
        }
    };
    return renderTitle();
};
