// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3vPCjWZHeaN7EGwdXjxrwK
// Component: pZFcNhZ0aZ-r

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import NavbarList from "../../NavbarList"; // plasmic-import: Oy7XkVnwIxCz/component
import Drawer from "../../Drawer"; // plasmic-import: RdMpYQpDB6L-/component

import { useScreenVariants as useScreenVariantsldLl3NzsIg50 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: LdLL3NZSIg50/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_nano_wallet.module.css"; // plasmic-import: 3vPCjWZHeaN7EGwdXjxrwK/projectcss
import sty from "./PlasmicNavBarNano.module.css"; // plasmic-import: pZFcNhZ0aZ-r/css

import MenuSvgrepoCom1SvgIcon from "./icons/PlasmicIcon__MenuSvgrepoCom1Svg"; // plasmic-import: XJ6RhCxCDUop/icon

createPlasmicElementProxy;

export type PlasmicNavBarNano__VariantMembers = {};
export type PlasmicNavBarNano__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavBarNano__VariantsArgs;
export const PlasmicNavBarNano__VariantProps = new Array<VariantPropType>();

export type PlasmicNavBarNano__ArgsType = {};
type ArgPropType = keyof PlasmicNavBarNano__ArgsType;
export const PlasmicNavBarNano__ArgProps = new Array<ArgPropType>();

export type PlasmicNavBarNano__OverridesType = {
  root?: p.Flex<"div">;
  navbar?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  drawer?: p.Flex<typeof Drawer>;
  svg?: p.Flex<"svg">;
};

export interface DefaultNavBarNanoProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNavBarNano__RenderFunc(props: {
  variants: PlasmicNavBarNano__VariantsArgs;
  args: PlasmicNavBarNano__ArgsType;
  overrides: PlasmicNavBarNano__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "drawer.open",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsldLl3NzsIg50()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"navbar"}
        data-plasmic-override={overrides.navbar}
        className={classNames(projectcss.all, sty.navbar)}
      >
        <p.PlasmicLink
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          className={classNames(projectcss.all, projectcss.a, sty.link)}
          component={Link}
          href={`/`}
          platform={"nextjs"}
        >
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__gx1Hq)}
            displayHeight={"32px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            src={{
              src: "/plasmic/nano_wallet/images/logovertivalNanowalletpng.png",
              fullWidth: 384,
              fullHeight: 71,
              aspectRatio: undefined
            }}
          />
        </p.PlasmicLink>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__q5Ho9)}
        >
          <NavbarList
            className={classNames("__wab_instance", sty.navbarList__v6C9Q)}
          />
        </p.Stack>
        <Drawer
          data-plasmic-name={"drawer"}
          data-plasmic-override={overrides.drawer}
          className={classNames("__wab_instance", sty.drawer)}
          onOpenChange={p.generateStateOnChangeProp($state, ["drawer", "open"])}
          open={p.generateStateValueProp($state, ["drawer", "open"])}
          slot={
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___65Kls)}
            >
              <NavbarList
                className={classNames("__wab_instance", sty.navbarList__djyPx)}
              />
            </p.Stack>
          }
          trigger={
            <MenuSvgrepoCom1SvgIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              role={"img"}
            />
          }
        >
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__n8Rcz)}
            displayHeight={"24px"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"100%"}
            loading={"lazy"}
            src={{
              src: "/plasmic/nano_wallet/images/logovertivalNanowalletpng.png",
              fullWidth: 384,
              fullHeight: 71,
              aspectRatio: undefined
            }}
          />
        </Drawer>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navbar", "link", "drawer", "svg"],
  navbar: ["navbar", "link", "drawer", "svg"],
  link: ["link"],
  drawer: ["drawer", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navbar: "div";
  link: "a";
  drawer: typeof Drawer;
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavBarNano__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavBarNano__VariantsArgs;
    args?: PlasmicNavBarNano__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavBarNano__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNavBarNano__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNavBarNano__ArgProps,
          internalVariantPropNames: PlasmicNavBarNano__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavBarNano__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavBarNano";
  } else {
    func.displayName = `PlasmicNavBarNano.${nodeName}`;
  }
  return func;
}

export const PlasmicNavBarNano = Object.assign(
  // Top-level PlasmicNavBarNano renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navbar: makeNodeComponent("navbar"),
    link: makeNodeComponent("link"),
    drawer: makeNodeComponent("drawer"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicNavBarNano
    internalVariantProps: PlasmicNavBarNano__VariantProps,
    internalArgProps: PlasmicNavBarNano__ArgProps
  }
);

export default PlasmicNavBarNano;
/* prettier-ignore-end */