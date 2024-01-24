"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { unsplash } from "@/lib/unsplash";
import { cn } from "@/utils/utils";
import { Check } from "lucide-react";

const FormImagePicker = () => {
    const [images, setImages] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [selectedImageId, setSelectedImageId] = useState<string>("");

    useEffect(() => {
        const fetchImages = async () => {
            try {
                setIsLoading(true);

                const result = await unsplash.photos.getRandom({
                    collectionIds: ["317099"],
                    orientation: "landscape",
                    count: 9,
                });

                if (!result.response || !result) {
                    throw new Error("Failed to get images from Unsplash");
                }
                setImages(result.response);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchImages();
    }, []);

    if (isLoading) {
        return <p className="text-center">Loading...</p>;
    }

    return (
        <div className="grid grid-cols-3 gap-2 my-5">
            {images?.map((image: any) => (
                <div
                    key={image.id}
                    className={cn(
                        "cursor-pointer relative aspect-video group hover:opacity-75 transition bg-muted",
                        selectedImageId === image.id && "opacity-50 hover:opacity-50 cursor-auto"
                    )}
                    onClick={() => setSelectedImageId(image.id)}
                >
                    {selectedImageId === image.id && (
                        <div className="absolute inset-y-0 h-full w-full bg-black/30 flex items-center justify-center z-10">
                            <Check color="black" />
                        </div>
                    )}
                    <input
                        id={selectedImageId === image.id ? "selected-image" : `image-${image.id}`}
                        name={selectedImageId === image.id ? "selected-image" : `image-${image.id}`}
                        type="text"
                        className="hidden"
                        readOnly
                        value={`${image.id}|${image.urls.thumb}|${image.urls.full}|${image.links.html}|${image.user.name}`}
                    />

                    <Image
                        src={image?.urls.thumb}
                        alt={image.alt_description}
                        width={50}
                        height={20}
                        className="w-32 h-16 rounded-sm object-cover relative"
                    />

                    <Link
                        href={image.links.html}
                        target="_blank"
                        className="absolute z-20 bottom-0 text-xs truncate font-medium hover:underline text-white w-full pl-1 hidden group-hover:block"
                    >
                        {image.user.name}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default FormImagePicker;
