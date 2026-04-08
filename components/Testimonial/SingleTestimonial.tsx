import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content } = review;
  return (
    <div className="group relative overflow-hidden rounded-2xl border-2 border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-2xl dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-primary/10 to-transparent"></div>
      
      <div className="relative mb-6 flex items-center justify-between border-b-2 border-gray-100 pb-6 dark:border-strokedark">
        <div className="flex-1">
          <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
            {name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{designation}</p>
        </div>
        <div className="relative ml-4 h-16 w-16 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Image fill className="object-cover" src={image} alt={name} />
        </div>
      </div>

      <div className="relative">
        <svg className="absolute -left-2 -top-2 h-8 w-8 text-primary/20" fill="currentColor" viewBox="0 0 32 32">
          <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
        </svg>
        <p className="relative pl-6 leading-relaxed text-gray-700 dark:text-gray-300">{content}</p>
      </div>
      
      <div className="mt-6 flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        ))}
      </div>
    </div>
  );
};

export default SingleTestimonial;
