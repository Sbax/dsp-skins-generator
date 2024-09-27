export const sanitizeFilename = (filename: string): string => {
  return filename
    .replace(/\s+/g, "_") // Replace spaces with underscores
    .replace(/[<>:"/\\|?*]+/g, "") // Remove invalid filename characters
    .replace(/^\.+/g, "") // Remove leading dots (to avoid hidden files on UNIX)
    .trim(); // Trim any trailing spaces (if any left)
};
