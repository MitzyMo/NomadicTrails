import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Breadcrumb = ({pageId}) => {
    const [page, setPage] = useState("");

    useEffect(() => {
        setPage(pageId);
    }, [pageId])

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                {pageId ? <li className="breadcrumb-item active" aria-current="page">{page}</li> : "" }
            </ol>
        </nav>
    )
}

export default Breadcrumb;