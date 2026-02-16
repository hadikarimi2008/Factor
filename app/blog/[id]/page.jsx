import React from "react";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { id } = await params;
  const blog = await prisma.blog.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8">
        <header className="mb-8 border-b pb-6">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            {blog.title}
          </h1>
          <div className="flex items-center text-sm text-gray-500 gap-4">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
              Rating: {blog.rate} / 5
            </span>
            <span>{blog.date}</span>
          </div>
        </header>
        <p className="text-xl text-gray-600 italic mb-6 leading-relaxed">
          {blog.description}
        </p>
        <div className="prose prose-lg max-w-none text-gray-800 leading-loose">
          {blog.paragraph}
        </div>
      </article>
    </div>
  );
}
