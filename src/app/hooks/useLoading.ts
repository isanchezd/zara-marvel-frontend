import { useContext } from "react";
import LoadingContext from "@/app/context/loadingContext";

export default function useLoading() {
    const context = useContext(LoadingContext);
    if (context === undefined) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
}