import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function page() {
  const blogs = await prisma.Blog.findMany();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          Blog List
        </h1>
        <Link
          href="/blog/add"
          className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-md text-center font-semibold"
        >
          + Add New Blog
        </Link>
      </div>

      {/* Blog Grid */}
      {blogs.length === 0 ? (
        <div className="text-center mt-20 text-gray-500 text-lg">
          No blogs found
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.map((item) => (
            <Link key={item.id} href={`/blog/${item.id}`}>
              <div className="h-52 p-5 border border-gray-200 rounded-xl shadow-sm bg-white flex flex-col justify-between">
                {/* Title */}
                <h2 className="font-bold text-lg sm:text-xl text-gray-900 line-clamp-2">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base mt-2 line-clamp-3">
                  {item.description}
                </p>

                {/* Rate & Date */}
                <div className="flex justify-between items-center mt-3">
                  <span className="text-yellow-500 font-semibold">
                    ★ {item.rate}
                  </span>
                  <span className="text-gray-400 text-sm">{item.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
