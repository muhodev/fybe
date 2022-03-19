import NextLink from "next/link";

export function Link({ href = "/", children, className, style, ...rest }) {
  return (
    <NextLink href={href} {...rest}>
      <a className={className} style={style}>
        {children}
      </a>
    </NextLink>
  );
}
