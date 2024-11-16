
import HashLoader from "react-spinners/HashLoader";
function Loading() {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <HashLoader
        color= "#6c5ce7"
        loading={true}
        cssOverride={""}
        size={150}
      />
    </div>
  );
}

export default Loading;
