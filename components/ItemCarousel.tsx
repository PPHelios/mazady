import {
  Carousel,
  CarouselMainContainer,
  CarouselThumbsContainer,
  SliderMainItem,
  SliderThumbItem,
} from "@/components/ui/carousel";

const ItemCarousel = ({ pics }: { pics: string[] }) => {
  return (
    <Carousel orientation="vertical" className="flex items-center gap-2 ">
      <div className="relative basis-3/4">
        <CarouselMainContainer className="h-96 ">
          {pics.map((pic) => (
            <SliderMainItem
              key={pic}
              className="flex max-h-96 items-center justify-center rounded-md
                border border-muted"
            >
              <img
                src={`/${pic}`}
                alt={pic}
                className="h-full w-full object-cover"
              />
            </SliderMainItem>
          ))}
        </CarouselMainContainer>
      </div>
      <CarouselThumbsContainer className="h-60 basis-1/4 ">
        {pics.map((pic, index) => (
          <SliderThumbItem
            key={index}
            index={index}
            className="rounded-md bg-transparent"
          >
            <span
              className="flex h-full w-full cursor-pointer items-center
                justify-center rounded-md border border-muted bg-background"
            >
              <img
                src={`/${pic}`}
                alt={pic}
                className="h-full w-full object-cover"
              />
            </span>
          </SliderThumbItem>
        ))}
      </CarouselThumbsContainer>
    </Carousel>
  );
};

export default ItemCarousel;
