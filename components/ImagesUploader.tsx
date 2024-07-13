import {
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
  FileInput,
} from "@/components/ui/file-uploader";

import React from "react";

function ImagesUploader({
  files,
  setFiles,
  dropZoneConfig,
}: {
  files: any;
  setFiles: any;
  dropZoneConfig?: any;
}) {
  return (
    <FileUploader
      value={files}
      onValueChange={setFiles}
      dropzoneOptions={dropZoneConfig}
      className="relative max-w-xs space-y-1"
    >
      <FileInput>
        <div
          className="flex h-32 w-full items-center justify-center rounded-md
            border bg-slate-300 dark:bg-zinc-800"
        >
          <p className="text-gray-900 dark:text-white">Drop files here</p>
        </div>
      </FileInput>
      <FileUploaderContent className="flex flex-row items-center gap-2">
        {files &&
          files.length > 0 &&
          files?.map((file: File, i: number) => {
            console.log(typeof file);
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
