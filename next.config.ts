import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.preview.emergentagent.com", "*.emergentagent.com", "*.preview.emergentcf.cloud", "*.emergentcf.cloud"],
  poweredByHeader: false,
};

export default nextConfig;
