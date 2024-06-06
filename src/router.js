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
import { ConnectedComponets } from "./Components/Pages/ConnectedComponets";
import { GeometricFeatureComputation } from "./Components/Pages/GeometricFeatureComputation";
import { CornerDetection } from "./Components/Pages/CornerDetection";

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
    },

    {
      path: "/Project/Connected Components",
      element: <ConnectedComponets />
    },

    {
      path: "/Project/Geo-Feature Computation",
      element: <GeometricFeatureComputation />
    },

    {
      path: "/Project/Corner Detection",
      element: <CornerDetection />
    }
  ]);

