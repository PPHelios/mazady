import {
  Carousel,
  CarouselMainContainer,
  CarouselThumbsContainer,
  SliderMainItem,
  SliderThumbItem,
} from "@/components/ui/carousel";

const ItemCarousel = ({ pics }: { pics: string[] }) => {
  return (
    <div data-testid="div">
      {pics && pics.length > 0 && (
        <Carousel
          orientation="vertical"
          className="flex flex-col items-center gap-2 md:flex-row"
          carouselOptions={{ loop: true }}
        >
          <div className="relative basis-3/4">
            <CarouselMainContainer className="h-96">
              {pics.map((pic) => (
                <SliderMainItem
                  key={pic}
                  className="flex max-h-96 items-center justify-center
                    rounded-md border border-muted"
                >
                  <img src={pic} alt={pic} className="size-full object-cover" />
                </SliderMainItem>
              ))}
            </CarouselMainContainer>
          </div>
          <CarouselThumbsContainer
            className="flex w-screen basis-1/4 flex-row overflow-hidden md:block
              md:h-60 md:w-auto"
          >
            {pics.map((pic, index) => (
              <SliderThumbItem
                key={index}
                index={index}
                className="rounded-md bg-transparent"
              >
                <span
                  className="flex cursor-pointer items-center justify-center
                    rounded-md border border-muted bg-background"
                >
                  <img src={pic} alt={pic} className="size-full object-cover" />
                </span>
              </SliderThumbItem>
            ))}
          </CarouselThumbsContainer>
        </Carousel>
      )}
    </div>
  );
};

export default ItemCarousel;
