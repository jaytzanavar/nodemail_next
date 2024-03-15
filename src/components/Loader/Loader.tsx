import Spinner from "../Spinner/Spinner";

export default function Loading() {
    return (
        <div className="fixed inset-0  bg-gradient-to-t  from-white to-slate-800 z-[10000] flex flex-1 items-center justify-center">
            <Spinner />
        </div>
    );
}