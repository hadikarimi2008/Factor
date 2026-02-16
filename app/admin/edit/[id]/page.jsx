import React from "react";
import { updateBlog } from "@/actions/blogs-actions";
import { notFound } from "next/navigation";
import Link from "next/link";
import prisma from "@/lib/prisma";

export default async function EditBlogPage({ params }) {
  const { id } = await params;

  const blog = await prisma.blog.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex justify-center items-start">
      <main className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <div className="flex justify-between items-center mb-8 border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Edit Post <span className="text-blue-600 ml-2">#{blog.id}</span>
          </h2>
          <span className="text-sm text-gray-400">Update your content</span>
        </div>

        <form action={updateBlog} className="space-y-6">
          <input type="hidden" name="id" value={blog.id} />

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              defaultValue={blog.title}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Description
            </label>
            <input
              type="text"
              name="description"
              defaultValue={blog.description}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Content (Paragraph)
            </label>
            <textarea
              name="paragraph"
              defaultValue={blog.paragraph}
              required
              rows={8}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Rate (0.0 - 5.0)
              </label>
              <input
                type="number"
                step="1"
                min="0"
                max="5"
                name="rate"
                defaultValue={blog.rate}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                name="date"
                defaultValue={blog.date}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-blue-200"
            >
              Update Changes
            </button>
            <Link
              href="/admin"
              className="px-8 py-4 bg-gray-100 text-gray-600 rounded-xl font-bold hover:bg-gray-200 transition"
            >
              Cancel
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}
