import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin("./i18n/request.ts")

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
const output = "export"
const externalTranslateEndpoint = process.env.NEXT_PUBLIC_TRANSLATE_ENDPOINT
const translateEndpoint = externalTranslateEndpoint ?? `${basePath}/api/translate`
const enableAutoTranslate =
  process.env.NEXT_PUBLIC_ENABLE_AUTO_TRANSLATE ??
  (process.env.NODE_ENV === "production" && output === "export" && !externalTranslateEndpoint ? "false" : "true")

/** @type {import('next').NextConfig} */
const nextConfig = {
  output, // Baris ini yang paling penting
  images: {
    unoptimized: true,
  },
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_TRANSLATE_ENDPOINT: translateEndpoint,
    NEXT_PUBLIC_ENABLE_AUTO_TRANSLATE: enableAutoTranslate,
  },
}

export default withNextIntl(nextConfig)
