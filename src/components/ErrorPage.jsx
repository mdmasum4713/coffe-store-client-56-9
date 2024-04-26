import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1 className="text-8xl">400</h1>
           <Link to="./">
           <button className="btn">Go Bcak</button>
           </Link>
        </div>
    );
};

export default ErrorPage;