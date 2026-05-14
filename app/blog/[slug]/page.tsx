import { Metadata } from "next"
import { BlogArticleContent, blogArticles } from "@/components/blog-article-content"
import { I18nProvider } from "@/lib/i18n"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = blogArticles[slug]
  
  if (!article) {
    return {
      title: "Article Not Found | Tropicoco",
    }
  }

  return {
    title: `${article.title} | Tropicoco Blog`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(blogArticles).map((slug) => ({ slug }))
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  return (
    <I18nProvider>
      <BlogArticleContent slug={slug} />
    </I18nProvider>
  )
}
