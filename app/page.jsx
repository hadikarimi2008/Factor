import Link from "next/link";
import prisma from "@/lib/prisma";

export default async function Home() {
  const blogs = await prisma.Blog.findMany();

  // گرفتن 3 بلاگ رندوم
  const featuredBlogs = blogs.sort(() => Math.random() - 0.5).slice(0, 3);

  // میانگین امتیاز
  const avgRating =
    blogs.length > 0
      ? (blogs.reduce((sum, b) => sum + b.rate, 0) / blogs.length).toFixed(1)
      : 0;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Welcome to Factor
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              A premier publishing platform for thinkers and industry experts.
              We bridge the gap between complex ideas and clear insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg"
              >
                Explore Blogs
              </Link>
              <Link
                href="/blog/add"
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
              >
                Write Your Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredBlogs.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most popular and highly-rated content
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredBlogs.map((blog) => (
              <Link key={blog.id} href={`/blog/${blog.id}`}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                  <div className="p-6 flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-yellow-500 font-semibold text-lg">
                        ★ {blog.rate}
                      </span>
                      <span className="text-sm text-gray-500">{blog.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {blog.description}
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold">
                      Read More
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
                {blogs.length}+
              </div>
              <div className="text-gray-600 text-lg">Published Articles</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
                {avgRating}
              </div>
              <div className="text-gray-600 text-lg">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
                100%
              </div>
              <div className="text-gray-600 text-lg">Quality Content</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Share Your Ideas?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join our community of writers and start publishing your thoughts
            today.
          </p>
          <Link
            href="/blog/add"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold shadow-lg"
          >
            Start Writing
          </Link>
        </div>
      </section>
    </div>
  );
}
