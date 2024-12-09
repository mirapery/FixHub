import { useParams } from "react-router-dom";

function NotFound() {
  const { userName, itemId } = useParams();

  return (
    <div className="flex h-screen bg-fh_white flex-col m-6 items-center align-middle justify-center">
      <h1 className="text-6xl font-bold">404 - Not Found</h1>
      <p className="text-4xl m-6">
        {userName
          ? `Oops! The user "${userName}" you are looking for doesn't exist.`
          : itemId
          ? `Oops! The item "${itemId}" you are looking for doesn't exist.`
          : "Oops! The page you are looking for doesn't exist."}
      </p>
    </div>
  );
}

export default NotFound;