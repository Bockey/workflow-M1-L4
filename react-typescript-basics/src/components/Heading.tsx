
type Props = {
    content: string;
    subheading?: string
}
const Heading = ({content, subheading="Default value"}: Props) => {
    return (
        <>
            <h1>{content}</h1>
            <h2>{subheading}</h2>
        </>
    );
};

export default Heading;