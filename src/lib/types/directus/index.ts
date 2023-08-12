type LanguageCodes = "en-US" | "da-DK";

export type ContentWithImage = {
    id: string;
    style: "text-image" | "image-text";
    image: string;
    translations: {
        id: string;
        block_content_with_image_id: string;
        languages_code: LanguageCodes;
        title: string;
        content: string;
    }[];
};

export type EduExperience = {
    id: string;
    style: "text-image" | "image-text";
    image: string;
    start_date: string;
    end_date?: string;
    translations: {
        id: string;
        block_content_with_image_id: string;
        languages_code: LanguageCodes;
        main_title: string;
        title: string;
        content: string;
    }[];
};

export type Carousel = {
    id: string;
    style: "buttons" | "arrows";
    blocks: CarouselBlock[];
};

type CarouselBlockCollections =
    | "block_content_with_image"
    | "block_eduexperience";
export type CarouselBlock = {
    id: string;
    carousel_id: string;
    item: ContentWithImage;
    collection: CarouselBlockCollections;
};

export type Page = {
    id: string;
    name: string;
    blocks: PageBlock[];
};

type PageCollections =
    | "block_content_with_image"
    | "block_eduexperience"
    | "carousel";
export type PageBlock = {
    id: string;
    page_id: string;
    item: ContentWithImage | Carousel;
    collection: PageCollections;
};

export type Block = PageBlock | CarouselBlock;

