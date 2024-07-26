import { createDownload } from "../temp/Utils";

export const DownloadButton = ({ fileContent, fileName }: { fileContent: any; fileName: string }) => {
  return (
    <div>
      <div>
        <button onClick={() => createDownload(fileContent, fileName)}>Export Character</button>
      </div>
    </div>
  );
};
