import "./text.less";

interface IHeaderProps {
    text: string;
}

export const Text = ({ text }: IHeaderProps) => {
    return <p>{text}</p>;
};
