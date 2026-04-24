export default function ErrorComponent() {
    useEffect(() => {
        throw new Error('count reached 10');
    }, []);
    return <></>
}