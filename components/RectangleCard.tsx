import Link from "next/link";

interface RectangleCardProps {
   title: string;
   description?: string;
   category?: string;
   imgSrc: string;
   href: string;
   author: string;
 }

const RectangleCard = ({ title, description, category, imgSrc, href, author} : RectangleCardProps) => (
   <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800">
         <Link className="relative block aspect-video" href={href}>
            <img
               alt="Thumbnail"
               fetchPriority="high"
               decoding="async"
               data-nimg="fill"
               className="object-cover transition-all"
               style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: 0,
                  color: "transparent",
               }}
               sizes="(max-width: 768px) 30vw, 33vw"
               src={imgSrc}
            />
         </Link>
      </div>
      <div className="">
         <div>
            <div className={category ? "flex gap-3" :"hidden"}>
               <Link href="/category/technology"> <span className="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-blue-600">{category}</span></Link>
            </div>
            <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
               <Link href={href}>
                  <span
                     className="bg-gradient-to-r from-blue-200 to-blue-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900"
                  >
                     {title}
                  </span>
               </Link>
            </h2>
            <div className={description ? "" : "hidden"}>
               <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                  <Link href={href}>
                     {description}
                  </Link>
               </p>
            </div>
            <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
               <Link href="/author/mario-sanchez">
                  <div className="flex items-center gap-3">
                     <div className="relative h-5 w-5 flex-shrink-0">
                        <img
                           alt="Mario Sanchez"
                           loading="lazy"
                           decoding="async"
                           data-nimg="fill"
                           className="rounded-full object-cover"
                           style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: 0,
                              top: 0,
                              right: 0,
                              bottom: 0,
                              color: "transparent",
                           }}
                           sizes="20px"
                           src="https://gravatar.com/avatar/838f96b68a13d1061c3d4bd54b7f87908c5cbffb4afd496359585541cd0ecab0?s=120"
                        />
                     </div>
                     <span className="truncate text-sm">{author}</span>
                  </div>
               </Link>
               <span className="text-xs text-gray-300 dark:text-gray-600">•</span><time className="truncate text-sm" dateTime="2022-10-21T15:48:00.000Z">October 21, 2022</time>
            </div>
         </div>
      </div>
   </div>
)

export default RectangleCard