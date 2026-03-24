import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const configDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    // Prevent Turbopack from picking a parent folder due to multiple lockfiles.
    root: configDir,
  },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
