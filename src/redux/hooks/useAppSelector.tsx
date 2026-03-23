import {store} from "../store.ts";
import {useSelector} from "react-redux";

// для того, щоб TypeScript розумів структуру state
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();