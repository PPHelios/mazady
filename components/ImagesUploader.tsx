import {
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
  FileInput,
} from "@/components/ui/file-uploader";

import React from "react";

function ImagesUploader({
  images,
  setImages,
  dropZoneConfig,
}: {
  images: any;
  setImages: any;
  dropZoneConfig?: any;
}) {
  return (
    <FileUploader
      value={images}
      onValueChange={setImages}
      dropzoneOptions={dropZoneConfig}
      className="relative w-full space-y-1"
    >
      <FileInput>
        <div
          className="flex h-32 w-full items-center justify-center rounded-md
            border bg-slate-300 dark:bg-zinc-800"
        >
          <p className="text-center text-gray-900 dark:text-white">
            Click to pick or <br />
            Drop images
          </p>
        </div>
      </FileInput>
      <FileUploaderContent className="flex flex-row flex-wrap items-center gap-2">
        {images &&
          images.length > 0 &&
          images?.map((file: File, i: number) => {
            // console.log(typeof file);
            return (
              <FileUploaderItem
                key={i}
                index={i}
                className="size-20 overflow-hidden rounded-md p-0"
                aria-roledescription={`file ${i + 1} containing ${file.name}`}
              >
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className="size-20 p-0"
                />
              </FileUploaderItem>
            );
          })}
      </FileUploaderContent>
    </FileUploader>
  );
}

export default ImagesUploader;
