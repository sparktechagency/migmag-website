// components/ProviderWrapper.tsx
"use client";

import { Provider } from "react-redux";
import {store} from "@/app/store";
import React from "react";

export default function ProviderWrapper({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
}
