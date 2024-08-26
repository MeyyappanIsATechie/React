import React from "react";
import "./App.css";
import Recipe from "./pages/Recipe";
import Comments from "./pages/Comments";
import { Routes, Route, useNavigate, Link, useRoutes } from "react-router-dom";
import RecipeDetails from "./pages/RecipeDetails";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import ReactHooksForm from "./pages/ReactHooksForm";
import Hooks from "./pages/Hooks";
import UseMemo from "./pages/UseMemo";
import UseCallback from "./pages/UseCallback";
import ReactQuery from "./query/ReactQuery";

const App = () => {
  const navigate = useNavigate();

  const CustomRoutes = () => {
    const element = useRoutes([
      {
        path: "/home",
        element: <Layout />,
        children: [
          {
            path: "recipe",
            element: <Recipe />,
          },
          {
            path: "comments",
            element: <Comments />,
          },
          {
            path: "recipe/:id",
            element: <RecipeDetails />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/react-hooks-form",
        element: <ReactHooksForm/>
      },
      {
        path: "/hooks",
        element: <Hooks/>
      },
      {
        path:"/use-memo",
        element: <UseMemo/>
      },
      {
        path:'/use-callback',
        element: <UseCallback/>
      },
      {
        path:'/react-query',
        element: <ReactQuery/>
      }
    ]);
    return element;
  };

  return (
    <div>
      {/* <h1>Routing,Custom Hooks</h1>
      <div>
        <Link to="/home/recipe">alternate way</Link>
      </div>
      <button
        onClick={() => navigate("/home/recipe")}
        style={{ background: "black", color: "white", marginRight: "10px" }}
      >
        Recipe
      </button>
      <button
        onClick={() => navigate("/home/comments")}
        style={{ background: "black", color: "white" }}
      >
        Comments
      </button> */}
      {/*<Routes>
        <Route path="/home" element={<Layout />}>
           <Route path="/" element={<h2>Home Page</h2>} /> 
          <Route path="recipe" element={<Recipe />} />
          <Route path="comments" element={<Comments />} />
          <Route path="recipe/:id" element={<RecipeDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>*/}
      <CustomRoutes />
    </div>
  );
};

export default App;
