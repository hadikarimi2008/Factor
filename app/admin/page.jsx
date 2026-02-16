import React from "react";
import Link from "next/link";
import { deleteBlog } from "@/actions/blogs-actions";
import { Plus } from "lucide-react";
import prisma from "@/lib/prisma";

export default async function AdminPage() {
  const blogs = await prisma.Blog.findMany();

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Admin Dashboard
            </h1>
            <p className="text-gray-500">Manage your blog posts and content</p>
          </div>
          <Link href="/blog/add">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition shadow-md flex items-center gap-2">
              <span>
                <Plus />
              </span>
              Add New Blog
            </button>
          </Link>
        </div>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  ID
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  Title
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  Date
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  Rate
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {blogs.map((blog) => (
                <tr key={blog.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-sm text-gray-500">
                    #{blog.id}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">
                    {blog.title}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {blog.date}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-bold">
                      ⭐ {blog.rate}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-3">
                      <Link href={`/admin/edit/${blog.id}`}>
                        <button className="text-blue-600 hover:text-blue-800 text-sm font-medium transition">
                          Edit
                        </button>
                      </Link>

                      <form action={deleteBlog}>
                        <input type="hidden" name="id" value={blog.id} />
                        <button
                          type="submit"
                          className="text-red-600 hover:text-red-800 text-sm font-medium transition"
                        >
                          Delete
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
              {blogs.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-10 text-center text-gray-400"
                  >
                    No blogs found. Start by adding one!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
