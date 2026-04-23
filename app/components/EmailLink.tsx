import type { ReactNode } from "react";
import { COMPANY_EMAIL, COMPANY_EMAIL_MAILTO } from "@/lib/contact";

type EmailLinkProps = {
  className?: string;
  children?: ReactNode;
  ariaLabel?: string;
};

export default function EmailLink({ className, children, ariaLabel }: EmailLinkProps) {
  return (
    <a href={COMPANY_EMAIL_MAILTO} className={className} aria-label={ariaLabel}>
      {children ?? COMPANY_EMAIL}
    </a>
  );
}
