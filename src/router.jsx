import { createBrowserRouter } from "react-router-dom";
import App from './App';
import { StudentDetailPage } from "./pages/StudentDetailPage";
import { StudentSubmitPage } from "./pages/StudentSubmitPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    },
    {
        path: '/students/:id',
        element: <StudentDetailPage/>,
    },
    {
        path: '/students/submit',
        element: <StudentSubmitPage/>,
    },
])