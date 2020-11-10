import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { useFileSystem } from "services/filesystem";

interface RedirectOptions {
  redirectTo: string;
}
interface ReplacePageOptions {
  showPage: string;
}
type ProtectedFsOptions = ReplacePageOptions | RedirectOptions;

// // https://sergiodxa.com/articles/redirects-in-next-the-good-way
export const useRequireFs = (page: ReactNode, options: ProtectedFsOptions) => {
  const router = useRouter();
  const fs = useFileSystem();

  useEffect(() => {
    if (fs) return;

    const { redirectTo } = options as RedirectOptions;
    const { showPage } = options as ReplacePageOptions;
    if (redirectTo) router.push(redirectTo);
    else if (showPage)
      router.replace(window.location.pathname, showPage, { shallow: true });
  }, [fs, router, options]);

  return !fs ? null : page;
};
