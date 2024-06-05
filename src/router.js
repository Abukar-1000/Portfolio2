import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import { ProjectPage } from "./Components/ProjectPage";
import { createClient } from '@supabase/supabase-js'
import { ImageSegmentation } from "./Components/Pages/ImageSegmentation";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY

export const supabase = createClient(`${supabaseUrl}`, supabaseKey)
export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },

    {
        path: "/Project/Image Segmentation",
        element: <ImageSegmentation />
    }
  ]);

