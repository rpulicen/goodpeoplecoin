import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-12 text-3xl font-bold tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 text-2xl font-semibold tracking-tight">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="mt-6 space-y-3 text-lg leading-8 text-muted-foreground list-disc list-inside">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mt-6 space-y-3 text-lg leading-8 text-muted-foreground list-decimal list-inside">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="ml-4">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-4 border-neon-green pl-6 italic">
        {children}
      </blockquote>
    ),
    ...components,
  }
}
