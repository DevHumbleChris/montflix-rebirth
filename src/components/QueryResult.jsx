import LoadingBar from "./LoadingBar"
export default function QueryResult({ loading, data, error, children }) {
    if (loading) {
        return (
            <LoadingBar />
        )
    }
    if (error) {
        return (
            <div>An Error Occured</div>
        )
    }
    if (data) {
        return children
    }
}