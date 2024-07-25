export const DownloadButton = ({ fileContent, fileName }) => {
  const handleDownload = () => {
    const blob = new Blob([fileContent], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div>
        <button onClick={handleDownload}>Export Character</button>
      </div>
    </div>
  );
};
