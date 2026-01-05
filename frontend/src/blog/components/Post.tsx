import type { PostType } from "@/blog/service";
import moment from "moment";

const Post = ({ post }: {
  post: PostType
}) => {
  return (
      <div className="min-h-screen">
        <div className="container mx-auto  py-8 max-w-5xl">
          <header className="mb-8">
            <h1 className="text-4xl font-bold font-famil mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-muted-foreground text-sm">
              <span>{moment(post.createdAt).format("MMM D, YYYY")}</span>
            </div>
          </header>

          <article className="bg-background rounded-lg">
            <div
              className="prose prose-lg max-w-none [&_img]:w-full [&_img]:rounded-lg [&_img]:my-8 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mt-8 [&_h1]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-4 [&_p]:leading-7 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:mb-4 [&_li]:mb-2 [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-4 [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_pre]:bg-muted [&_pre]:p-4 [&_pre]:rounded-lg [&_pre]:overflow-x-auto [&_pre]:my-4 [&_a]:text-primary [&_a]:underline [&_a]:hover:text-primary/80"
              // biome-ignore lint/security/noDangerouslySetInnerHtml: Blog content needs to render HTML
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
  );
};

export default Post;
