import { createRoot } from 'react-dom/client';
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./router/routs.tsx";

createRoot(document.getElementById("root")!)
    .render(<RouterProvider router={router}/>);


// browser router example

// createRoot(document.getElementById("root")!)
//     .render(
//         <BrowserRouter>
//             <Routes>
//                 <Route path={"/"} element={<Layout/>}>
//                     <Route path={""} element={<HomePage/>}/>
//                     <Route path={"users"} element={<UsersPage/>}/>
//                     <Route path={"posts"} element={<PostsPage/>}/>
//                     <Route path={"comments"} element={<CommentsPage/>}/>
//                     <Route path={"products"} element={<ProductsPage/>}/>
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     )
