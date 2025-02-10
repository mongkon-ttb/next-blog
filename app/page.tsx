import RectangleCard from "@/components/RectangleCard";
import SquareCard from "@/components/SquareCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {

  const articles = [
    {
      title: "Introduction to TypeScript",
      description: "A beginner's guide to TypeScript and its features.",
      category: "Programming",
      imgSrc: "https://picsum.photos/600/400?1",
      href: "https://example.com/ts-intro",
      author: "John Doe"
    },
    {
      title: "Understanding React Hooks",
      category: "Web Development",
      imgSrc: "https://picsum.photos/600/400?2",
      href: "https://example.com/react-hooks",
      author: "Jane Smith"
    },
    {
      title: "Top 10 JavaScript Frameworks in 2024",
      description: "An overview of the most popular JavaScript frameworks.",
      imgSrc: "https://picsum.photos/600/400?3",
      href: "https://example.com/js-frameworks",
      author: "Alice Johnson"
    },
    {
      title: "Mastering CSS Grid",
      description: "A deep dive into CSS Grid for modern web layouts.",
      category: "CSS",
      imgSrc: "https://picsum.photos/600/400?4",
      href: "https://example.com/css-grid",
      author: "Bob Williams"
    },
    {
      title: "Introduction to TypeScript",
      description: "A beginner's guide to TypeScript and its features.",
      category: "Programming",
      imgSrc: "https://picsum.photos/600/400?5",
      href: "https://example.com/ts-intro",
      author: "John Doe"
    },
    {
      title: "Top 10 JavaScript Frameworks in 2024",
      description: "An overview of the most popular JavaScript frameworks.",
      imgSrc: "https://picsum.photos/600/400?33",
      href: "https://example.com/js-frameworks",
      author: "Alice Johnson"
    },
    {
      title: "Mastering CSS Grid",
      description: "A deep dive into CSS Grid for modern web layouts.",
      category: "CSS",
      imgSrc: "https://picsum.photos/600/400?44",
      href: "https://example.com/css-grid",
      author: "Bob Williams"
    },
    {
      title: "Introduction to TypeScript",
      description: "A beginner's guide to TypeScript and its features.",
      category: "Programming",
      imgSrc: "https://picsum.photos/600/400?55",
      href: "https://example.com/ts-intro",
      author: "John Doe"
    }
  ];

  return (
    <>
      <Header />
      <div className="container px-8 mx-auto xl:px-5 max-w-screen-lg py-5 lg:py-8">
        <h2 className="text-2xl font-semibold leading-snug tracking-tight mt-16 dark:text-white">
          <a href="#">
            <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 bg-[length:100%_3px] bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
              Developer
            </span>
          </a>
        </h2>
        <p className="mt-1 mb-6 line-clamp-3 text-lg text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
        <div className="grid gap-10 md:grid-cols-2 lg:gap-10">

          {articles.slice(0, 2).map((article, index) => (
            <RectangleCard
              key={index}
              title={article.title}
              description={article.description}
              imgSrc={article.imgSrc}
              href={"https://example.com"}
              author={article.author}
            />
          )
          )}
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
          {articles.slice(2).map((article, index) => (
            <SquareCard
              key={index}
              title={article.title}
              description={article.description}
              imgSrc={article.imgSrc}
              href={"https://example.com"}
              author={article.author} />
          )
          )}
        </div>


        <h2 className="text-2xl font-semibold leading-snug tracking-tight mt-16 dark:text-white">
          <a href="#">
            <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 bg-[length:100%_3px] bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
              Developer
            </span>
          </a>
        </h2>
        <p className="mt-1 mb-6 line-clamp-3 text-lg text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
        <div className="grid gap-10 md:grid-cols-2 lg:gap-10">

          {articles.slice(0, 2).map((article, index) => (
            <RectangleCard
              key={index}
              title={article.title}
              description={article.description}
              imgSrc={article.imgSrc}
              href={"https://example.com"}
              author={article.author}
            />
          )
          )}
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
          {articles.slice(2).map((article, index) => (
            <SquareCard
              key={index}
              title={article.title}
              description={article.description}
              imgSrc={article.imgSrc}
              href={"https://example.com"}
              author={article.author} />
          )
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
