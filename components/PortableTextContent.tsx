import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import Image from "next/image";
import { imageUrl } from "@/lib/sanity/image";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mb-4 mt-10 text-2xl font-bold text-[#1a1a1a]">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 text-xl font-bold text-[#1a1a1a]">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-4 border-[#C8102E] pl-4 italic text-[#6b6b6b]">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mb-5 leading-8 text-[#1a1a1a]">{children}</p>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="font-semibold text-[#C8102E] underline-offset-2 hover:underline"
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      const src = imageUrl(value, 1200);
      if (!src) return null;

      return (
        <figure className="my-8 overflow-hidden rounded-2xl">
          <div className="relative aspect-[16/10]">
            <Image
              src={src}
              alt={value.alt ?? ""}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </figure>
      );
    },
  },
};

export default function PortableTextContent({
  value,
}: {
  value: PortableTextBlock[];
}) {
  if (!value?.length) return null;
  return (
    <div className="prose prose-lg max-w-none">
      <PortableText value={value} components={components} />
    </div>
  );
}
