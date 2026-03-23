import {useDispatch} from "react-redux";
import {store} from "../store.ts";

// для того, щоб TypeScript розумів структуру state
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();