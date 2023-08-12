type LanguageCodes = "en-US" | "da-DK";

type PageCollections =
    | "block_content_with_image"
    | "block_eduexperience"
    | "block_content_text"
    | "carousel";

type CarouselBlockCollections =
    | "block_content_with_image"
    | "block_eduexperience"
    | "block_content_text";

export type Banner = {
    id: string;
    animate: boolean;
    image: string;
    translations: {
        id: string;
        block_banner_id: string;
        languages_code: LanguageCodes;
        title: string;
        sub_title: string;
    }[];
};

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

export type ContentText = {
    id: string;
    translations: {
        id: string;
        block_content_text_id: string;
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

export type CarouselBlock = {
    id: string;
    carousel_id: string;
    item: ContentWithImage;
    collection: CarouselBlockCollections;
};

export type Page = {
    id: string;
    banner: Banner;
    name: string;
    blocks: PageBlock[];
};

export type PageBlock = {
    id: string;
    page_id: string;
    item: ContentWithImage | Carousel;
    collection: PageCollections;
};

export type Block = PageBlock | CarouselBlock;

