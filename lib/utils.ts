export const getClientSideCookie = (name: string): string | undefined => {
  if (typeof window === "undefined") return;
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    ?.split("=")[1];

  return cookieValue;
};
