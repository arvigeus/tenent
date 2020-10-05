import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import React, { Children, ReactElement, ReactNode } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactNode;
  activeClassName?: string;
}

export default function ActiveLink({
  children,
  activeClassName = "active",
  ...props
}: ActiveLinkProps) {
  const { asPath } = useRouter();
  const child = Children.only(children) as ReactElement;
  const childClassName = child.props.className || "";

  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
}
