"use client";

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type CardType = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
  };

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const isMobile = () => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  };

  const handleCardClose = (index: number) => {
    if (!carouselRef.current) return;
    const cardWidth = isMobile() ? 230 : 384;
    const gap = isMobile() ? 4 : 8;
    carouselRef.current.scrollTo({
      left: (cardWidth + gap) * (index + 1),
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          ref={carouselRef}
          onScroll={checkScrollability}
          className="flex w-full overflow-x-scroll scroll-smooth py-10 md:py-20 [scrollbar-width:none]"
        >
          <div className="mx-auto flex max-w-7xl gap-4 pl-4">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mr-10 flex justify-end gap-2">
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
}: {
  card: CardType;
  index: number;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useOutsideClick(containerRef, () => setOpen(false));

  return (
    <>
      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80"
          >
            <div
              ref={containerRef}
              className="relative mx-auto mt-20 max-w-5xl rounded-3xl bg-white p-6 dark:bg-neutral-900"
            >
              <button
                onClick={() => {
                  setOpen(false);
                  onCardClose(index);
                }}
                className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black text-white"
              >
                <IconX />
              </button>

              <h2 className="mt-4 text-3xl font-bold">{card.title}</h2>
              <div className="mt-6">{card.content}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card */}
      <motion.button
        onClick={() => setOpen(true)}
        className="relative z-10 flex h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden rounded-3xl"
      >
        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />

        {/* Text */}
        <div className="relative z-30 p-6 md:p-8 text-left">
          <p className="text-sm md:text-base font-medium text-white">
            {card.category}
          </p>
          <p className="mt-2 text-lg md:text-3xl font-semibold text-white leading-tight">
            {card.title}
          </p>
        </div>

        {/* Image */}
        <img
          src={card.src}
          alt={card.title}
          className="absolute inset-0 z-10 h-full w-full object-cover"
        />
      </motion.button>
    </>
  );
};
