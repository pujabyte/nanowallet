// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3vPCjWZHeaN7EGwdXjxrwK
// Component: mmhfAUVZX80S

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
import NavBarNano from "../../NavBarNano"; // plasmic-import: pZFcNhZ0aZ-r/component
import { Reveal } from "@plasmicpkgs/react-awesome-reveal";
import CtaBanner from "../../CtaBanner"; // plasmic-import: y8bNpI6JvHh_/component
import Footer from "../../Footer"; // plasmic-import: JQoViTbLhAVV/component

import { useScreenVariants as useScreenVariantsldLl3NzsIg50 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: LdLL3NZSIg50/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic_plasmic_rich_components.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic_nano_wallet.module.css"; // plasmic-import: 3vPCjWZHeaN7EGwdXjxrwK/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: mmhfAUVZX80S/css

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  navBarNano?: p.Flex<typeof NavBarNano>;
  hero?: p.Flex<"section">;
  h4?: p.Flex<"h4">;
  sectionSendrecieve?: p.Flex<"section">;
  sectionPrivatekey?: p.Flex<"section">;
  ctaBanner?: p.Flex<typeof CtaBanner>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultHomepageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsldLl3NzsIg50()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <NavBarNano
            data-plasmic-name={"navBarNano"}
            data-plasmic-override={overrides.navBarNano}
            className={classNames("__wab_instance", sty.navBarNano)}
          />

          <section
            data-plasmic-name={"hero"}
            data-plasmic-override={overrides.hero}
            className={classNames(projectcss.all, sty.hero)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__wzOk)}
            >
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2__c17K
                )}
              >
                {"Full Control of Your Crypto Assets with Nano Wallet"}
              </h2>
              <h4
                data-plasmic-name={"h4"}
                data-plasmic-override={overrides.h4}
                className={classNames(
                  projectcss.all,
                  projectcss.h4,
                  projectcss.__wab_text,
                  sty.h4
                )}
              >
                {"Empower Your Crypto Journey with Seamless Experience"}
              </h4>
              <div className={classNames(projectcss.all, sty.freeBox__tnRbf)}>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__zR33C
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__xGeXk)}
                    displayHeight={"53px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/nano_wallet/images/googleplaypng.png",
                      fullWidth: 182,
                      fullHeight: 55,
                      aspectRatio: undefined
                    }}
                  />
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__iArwE
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__gYp9H)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/nano_wallet/images/appstorepng.png",
                      fullWidth: 177,
                      fullHeight: 53,
                      aspectRatio: undefined
                    }}
                  />
                </p.PlasmicLink>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox__mYbzl)} />

              <div className={classNames(projectcss.all, sty.freeBox__rZcTb)} />
            </p.Stack>
          </section>
          <section
            data-plasmic-name={"sectionSendrecieve"}
            data-plasmic-override={overrides.sectionSendrecieve}
            className={classNames(projectcss.all, sty.sectionSendrecieve)}
          >
            <div className={classNames(projectcss.all, sty.freeBox___05NO)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns__a31G0)}
              >
                <div className={classNames(projectcss.all, sty.column__rYlif)}>
                  <Reveal
                    className={classNames("__wab_instance", sty.reveal___0B7Gt)}
                    direction={"left"}
                    triggerOnce={true}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__mbfkF
                      )}
                    >
                      {"Main Feature"}
                    </h5>
                    <h2
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2__mw8C2
                      )}
                    >
                      {"Send and Receive Tokens"}
                    </h2>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___3CcA9
                      )}
                    >
                      {
                        "Easily send your tokens to friends or addresses. Quick, secure, and hassle-free transactions at your fingertips. "
                      }
                    </div>
                  </Reveal>
                </div>
                <div className={classNames(projectcss.all, sty.column__lNr1B)}>
                  <Reveal
                    className={classNames("__wab_instance", sty.reveal__h0QYw)}
                    direction={"right"}
                    triggerOnce={true}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__x4Tlg)}
                    />
                  </Reveal>
                </div>
              </p.Stack>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__ag2L)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/nano_wallet/images/pattern1Png.png",
                  fullWidth: 200,
                  fullHeight: 200,
                  aspectRatio: undefined
                }}
              />
            </div>
          </section>
          <section
            data-plasmic-name={"sectionPrivatekey"}
            data-plasmic-override={overrides.sectionPrivatekey}
            className={classNames(projectcss.all, sty.sectionPrivatekey)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__xKc4L)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns__mSoVb)}
              >
                <div className={classNames(projectcss.all, sty.column___9Nav7)}>
                  <Reveal
                    className={classNames("__wab_instance", sty.reveal___2G3U4)}
                    direction={"left"}
                    triggerOnce={true}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__bufBe)}
                    />
                  </Reveal>
                </div>
                <div className={classNames(projectcss.all, sty.column__uneZk)}>
                  <Reveal
                    className={classNames("__wab_instance", sty.reveal__xgpoe)}
                    direction={"right"}
                    triggerOnce={true}
                  >
                    <h5
                      className={classNames(
                        projectcss.all,
                        projectcss.h5,
                        projectcss.__wab_text,
                        sty.h5__qf9UP
                      )}
                    >
                      {"Personal and Secure"}
                    </h5>
                    <h2
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2__ySj8N
                      )}
                    >
                      {"Own your wallet, keys, and assets"}
                    </h2>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__enXKv
                      )}
                    >
                      {
                        "Take control like never before. With our solution, you truly own your wallet, keys, and assets, ensuring unparalleled security and sovereignty over your digital wealth"
                      }
                    </div>
                  </Reveal>
                </div>
              </p.Stack>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img___8M8Ou)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/nano_wallet/images/pattern2Png.png",
                  fullWidth: 146,
                  fullHeight: 146,
                  aspectRatio: undefined
                }}
              />
            </div>
          </section>
          <CtaBanner
            data-plasmic-name={"ctaBanner"}
            data-plasmic-override={overrides.ctaBanner}
            className={classNames("__wab_instance", sty.ctaBanner)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navBarNano",
    "hero",
    "h4",
    "sectionSendrecieve",
    "sectionPrivatekey",
    "ctaBanner",
    "footer"
  ],
  navBarNano: ["navBarNano"],
  hero: ["hero", "h4"],
  h4: ["h4"],
  sectionSendrecieve: ["sectionSendrecieve"],
  sectionPrivatekey: ["sectionPrivatekey"],
  ctaBanner: ["ctaBanner"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navBarNano: typeof NavBarNano;
  hero: "section";
  h4: "h4";
  sectionSendrecieve: "section";
  sectionPrivatekey: "section";
  ctaBanner: typeof CtaBanner;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
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
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navBarNano: makeNodeComponent("navBarNano"),
    hero: makeNodeComponent("hero"),
    h4: makeNodeComponent("h4"),
    sectionSendrecieve: makeNodeComponent("sectionSendrecieve"),
    sectionPrivatekey: makeNodeComponent("sectionPrivatekey"),
    ctaBanner: makeNodeComponent("ctaBanner"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
