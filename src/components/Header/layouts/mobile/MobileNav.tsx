"use client";

import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../../components/Logo";
import { NavNode, NAV_MOBILE } from "../../helpers/data";
import { GroupNode } from "../../components/GroupNode";
import { BurgerButton } from "./BurgerButton";
import { Divider } from "@/icons/Divider";
import { SocialmediaTray } from "@/components/Socialmedia/SocialmediaTray";

type MobileNavProps = { onClose: () => void };

export const MobileNav = ({ onClose }: MobileNavProps) => {
  const pathname = usePathname();

  const renderNode = (node: NavNode, depth = 0): React.ReactNode => {
    switch (node.kind) {
      case "link": {
        const active = node.isActive
          ? node.isActive(pathname)
          : pathname === node.href;
        return (
          <Link
            href={node.href}
            aria-current={active ? "page" : undefined}
            onClick={onClose}
            className={[
              "text-light block max-w-[80vw] py-2 tracking-[0.15em]",
              active ? "bg-primary rounded-tr-md rounded-bl-md px-7" : "",
            ].join(" ")}
          >
            {node.label}
          </Link>
        );
      }
      case "group":
        return (
          <GroupNode
            node={node}
            depth={depth}
            pathname={pathname}
            renderNode={renderNode}
          />
        );
    }
  };

  return (
    <div className="flex h-dvh flex-col">
      <div className="text-light mb-6 flex h-14 items-center justify-between px-7">
        <Logo className="w-10" />
        <strong className="font-marcellus-sc text-xl tracking-[0.15em]">
          K2.Inked
        </strong>
        <BurgerButton onClose={onClose} />
      </div>

      <nav
        aria-label="Nawigacja mobilna"
        className="text-light min-h-0 flex-1 overflow-y-auto overscroll-contain px-13.5 pt-2 pb-10"
      >
        {NAV_MOBILE.map((n, i) => (
          <Fragment key={i}>{renderNode(n)}</Fragment>
        ))}
        <Divider className="mt-20 mb-8" capWidth={70} lineThickness={2} />
        <SocialmediaTray navclassName="flex justify-center items-center flex-row gap-7.5" />
      </nav>
    </div>
  );
};
