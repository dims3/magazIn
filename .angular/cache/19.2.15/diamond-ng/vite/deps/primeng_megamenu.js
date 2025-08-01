import {
  Badge,
  BadgeModule
} from "./chunk-NSXYFGXE.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-YSDQCUAW.js";
import {
  Ripple
} from "./chunk-64PDPTR2.js";
import {
  zindexutils
} from "./chunk-37UJSS37.js";
import {
  AngleDownIcon,
  AngleRightIcon,
  BarsIcon
} from "./chunk-SYWRS653.js";
import "./chunk-Z7QHAORV.js";
import {
  BaseComponent
} from "./chunk-5QLW4AQZ.js";
import "./chunk-XZKEWRSK.js";
import {
  BaseStyle
} from "./chunk-42UFCPTF.js";
import {
  PrimeTemplate,
  SharedModule
} from "./chunk-HFDZCVAZ.js";
import {
  findSingle,
  focus,
  isTouchDevice,
  uuid
} from "./chunk-GFVF2TMO.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-FVV5KLMN.js";
import "./chunk-RWMWVF5H.js";
import "./chunk-NKM73PB6.js";
import "./chunk-6ACEO7KO.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-LJRMVWU3.js";
import {
  isPlatformBrowser
} from "./chunk-SOO5Y25R.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  effect,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-LB7E77GG.js";
import "./chunk-WPM5VTLQ.js";
import "./chunk-PEBH6BBU.js";
import "./chunk-4S3KYZTJ.js";
import "./chunk-US7LRVFB.js";
import {
  findLastIndex,
  isEmpty,
  isNotEmpty,
  isPrintableCharacter,
  resolve
} from "./chunk-PXYLXCRT.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// node_modules/primeng/fesm2022/primeng-megamenu.mjs
var _c0 = ["menubar"];
var _c1 = (a0) => ({
  "max-height": a0,
  overflow: "auto"
});
var _c2 = (a0, a1) => ({
  "p-megamenu-root-list": a0,
  "p-megamenu-submenu": a1
});
var _c3 = (a0) => ({
  "p-megamenu-item-link": true,
  "p-disabled": a0
});
var _c4 = () => ({
  exact: false
});
var _c5 = (a0) => ({
  $implicit: a0
});
function MegaMenuSub_ul_0_li_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵstyleMap(ctx_r1.getItemProp(ctx_r1.submenu, "style"));
    ɵɵproperty("ngClass", ctx_r1.getSubmenuHeaderClass(ctx_r1.submenu));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.getItemLabel(ctx_r1.submenu), " ");
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 11);
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵstyleMap(ctx_r1.getItemProp(processedItem_r3, "style"));
    ɵɵproperty("ngClass", ctx_r1.getSeparatorItemClass(processedItem_r3));
    ɵɵattribute("id", ctx_r1.getItemId(processedItem_r3))("data-pc-section", "separator");
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 22);
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r1.getItemProp(processedItem_r3, "icon"))("ngStyle", ctx_r1.getItemProp(processedItem_r3, "iconStyle"));
    ɵɵattribute("data-pc-section", "icon")("tabindex", -1);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 23);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "label");
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.getItemLabel(processedItem_r3), " ");
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 24);
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r1.getItemLabel(processedItem_r3), ɵɵsanitizeHtml);
    ɵɵattribute("data-pc-section", "label");
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_p_badge_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p-badge", 25);
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("styleClass", ctx_r1.getItemProp(processedItem_r3, "badgeStyleClass"))("value", ctx_r1.getItemProp(processedItem_r3, "badge"));
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleDownIcon", 27);
  }
  if (rf & 2) {
    ɵɵproperty("ngClass", "p-megamenu-submenu-icon");
    ɵɵattribute("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_Conditional_2_AngleRightIcon_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleRightIcon", 27);
  }
  if (rf & 2) {
    ɵɵproperty("ngClass", "p-megamenu-submenu-icon");
    ɵɵattribute("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_Conditional_2_AngleRightIcon_0_Template, 1, 3, "AngleRightIcon", 28);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(8);
    ɵɵproperty("ngIf", ctx_r1.orientation === "vertical");
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_Conditional_1_Template, 1, 3, "AngleDownIcon", 27)(2, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_Conditional_2_Template, 1, 1, "AngleRightIcon", 27);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(7);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.orientation === "horizontal" || ctx_r1.mobileActive ? 1 : 2);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template", 29);
  }
  if (rf & 2) {
    ɵɵproperty("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_ng_container_1_Template, 3, 1, "ng-container", 14)(2, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_2_Template, 1, 2, null, 26);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.megaMenu.submenuIconTemplate && !ctx_r1.megaMenu._submenuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.megaMenu.submenuIconTemplate || ctx_r1.megaMenu._submenuIconTemplate);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 18);
    ɵɵtemplate(1, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_span_1_Template, 1, 4, "span", 19)(2, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_span_2_Template, 2, 2, "span", 20)(3, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_template_3_Template, 1, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor)(5, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_p_badge_5_Template, 1, 2, "p-badge", 21)(6, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_ng_container_6_Template, 3, 2, "ng-container", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlLabel_r5 = ɵɵreference(4);
    const processedItem_r3 = ɵɵnextContext(3).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("target", ctx_r1.getItemProp(processedItem_r3, "target"))("ngClass", ɵɵpureFunction1(11, _c3, ctx_r1.getItemProp(processedItem_r3, "disabled")));
    ɵɵattribute("href", ctx_r1.getItemProp(processedItem_r3, "url"), ɵɵsanitizeUrl)("data-automationid", ctx_r1.getItemProp(processedItem_r3, "automationId"))("data-pc-section", "action")("tabindex", -1);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.getItemProp(processedItem_r3, "icon"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.getItemProp(processedItem_r3, "escape"))("ngIfElse", htmlLabel_r5);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r1.getItemProp(processedItem_r3, "badge"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isItemGroup(processedItem_r3));
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 22);
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r1.getItemProp(processedItem_r3, "icon"))("ngStyle", ctx_r1.getItemProp(processedItem_r3, "iconStyle"));
    ɵɵattribute("data-pc-section", "icon")("tabindex", -1);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 23);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.getItemLabel(processedItem_r3));
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 24);
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r1.getItemLabel(processedItem_r3), ɵɵsanitizeHtml);
    ɵɵattribute("data-pc-section", "label");
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_p_badge_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p-badge", 25);
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(4).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("styleClass", ctx_r1.getItemProp(processedItem_r3, "badgeStyleClass"))("value", ctx_r1.getItemProp(processedItem_r3, "badge"));
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleDownIcon", 32);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-megamenu-submenu-icon");
    ɵɵattribute("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_AngleRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleRightIcon", 32);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-megamenu-submenu-icon");
    ɵɵattribute("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_AngleDownIcon_1_Template, 1, 3, "AngleDownIcon", 31)(2, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_AngleRightIcon_2_Template, 1, 3, "AngleRightIcon", 31);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(7);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.orientation === "horizontal");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.orientation === "vertical");
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template(rf, ctx) {
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_2_ng_template_0_Template, 0, 0, "ng-template", 29);
  }
  if (rf & 2) {
    ɵɵproperty("data-pc-section", "submenuicon")("aria-hidden", true);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_ng_container_1_Template, 3, 2, "ng-container", 14)(2, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_2_Template, 1, 2, null, 26);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.megaMenu.submenuIconTemplate && !ctx_r1.megaMenu._submenuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.megaMenu.submenuIconTemplate || ctx_r1.megaMenu._submenuIconTemplate);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 30);
    ɵɵtemplate(1, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_span_1_Template, 1, 4, "span", 19)(2, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_span_2_Template, 2, 1, "span", 20)(3, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_template_3_Template, 1, 2, "ng-template", null, 3, ɵɵtemplateRefExtractor)(5, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_p_badge_5_Template, 1, 2, "p-badge", 21)(6, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_ng_container_6_Template, 3, 2, "ng-container", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const htmlRouteLabel_r6 = ɵɵreference(4);
    const processedItem_r3 = ɵɵnextContext(3).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("routerLink", ctx_r1.getItemProp(processedItem_r3, "routerLink"))("queryParams", ctx_r1.getItemProp(processedItem_r3, "queryParams"))("routerLinkActive", "p-megamenu-item-link-active")("routerLinkActiveOptions", ctx_r1.getItemProp(processedItem_r3, "routerLinkActiveOptions") || ɵɵpureFunction0(20, _c4))("target", ctx_r1.getItemProp(processedItem_r3, "target"))("ngClass", ɵɵpureFunction1(21, _c3, ctx_r1.getItemProp(processedItem_r3, "disabled")))("fragment", ctx_r1.getItemProp(processedItem_r3, "fragment"))("queryParamsHandling", ctx_r1.getItemProp(processedItem_r3, "queryParamsHandling"))("preserveFragment", ctx_r1.getItemProp(processedItem_r3, "preserveFragment"))("skipLocationChange", ctx_r1.getItemProp(processedItem_r3, "skipLocationChange"))("replaceUrl", ctx_r1.getItemProp(processedItem_r3, "replaceUrl"))("state", ctx_r1.getItemProp(processedItem_r3, "state"));
    ɵɵattribute("data-automationid", ctx_r1.getItemProp(processedItem_r3, "automationId"))("tabindex", -1)("data-pc-section", "action");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.getItemProp(processedItem_r3, "icon"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.getItemProp(processedItem_r3, "escape"))("ngIfElse", htmlRouteLabel_r6);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r1.getItemProp(processedItem_r3, "badge"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isItemGroup(processedItem_r3));
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_1_Template, 7, 13, "a", 16)(2, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_a_2_Template, 7, 23, "a", 17);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.getItemProp(processedItem_r3, "routerLink"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.getItemProp(processedItem_r3, "routerLink"));
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_4_1_ng_template_0_Template(rf, ctx) {
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_4_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_4_1_Template, 1, 0, null, 33);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(2).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c5, processedItem_r3.item));
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_div_5_div_2_p_megamenu_sub_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-megamenu-sub", 38);
    ɵɵlistener("itemClick", function MegaMenuSub_ul_0_ng_template_3_li_1_div_5_div_2_p_megamenu_sub_1_Template_p_megamenu_sub_itemClick_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(6);
      return ɵɵresetView(ctx_r1.itemClick.emit($event));
    })("itemMouseEnter", function MegaMenuSub_ul_0_ng_template_3_li_1_div_5_div_2_p_megamenu_sub_1_Template_p_megamenu_sub_itemMouseEnter_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(6);
      return ɵɵresetView(ctx_r1.onItemMouseEnter($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const submenu_r8 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵproperty("id", ctx_r1.getSubListId(submenu_r8))("submenu", submenu_r8)("items", submenu_r8.items)("itemTemplate", ctx_r1.itemTemplate)("mobileActive", ctx_r1.mobileActive)("menuId", ctx_r1.menuId)("focusedItemId", ctx_r1.focusedItemId)("level", ctx_r1.level + 1)("root", false);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 27);
    ɵɵtemplate(1, MegaMenuSub_ul_0_ng_template_3_li_1_div_5_div_2_p_megamenu_sub_1_Template, 1, 9, "p-megamenu-sub", 37);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const col_r9 = ctx.$implicit;
    const processedItem_r3 = ɵɵnextContext(3).$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r1.getColumnClass(processedItem_r3));
    ɵɵadvance();
    ɵɵproperty("ngForOf", col_r9);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 34)(1, "div", 35);
    ɵɵtemplate(2, MegaMenuSub_ul_0_ng_template_3_li_1_div_5_div_2_Template, 2, 2, "div", 36);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const processedItem_r3 = ɵɵnextContext(2).$implicit;
    ɵɵattribute("data-pc-section", "panel");
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "grid");
    ɵɵadvance();
    ɵɵproperty("ngForOf", processedItem_r3.items);
  }
}
function MegaMenuSub_ul_0_ng_template_3_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 12, 1)(2, "div", 13);
    ɵɵlistener("click", function MegaMenuSub_ul_0_ng_template_3_li_1_Template_div_click_2_listener($event) {
      ɵɵrestoreView(_r4);
      const processedItem_r3 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onItemClick($event, processedItem_r3));
    })("mouseenter", function MegaMenuSub_ul_0_ng_template_3_li_1_Template_div_mouseenter_2_listener($event) {
      ɵɵrestoreView(_r4);
      const processedItem_r3 = ɵɵnextContext().$implicit;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onItemMouseEnter({
        $event,
        processedItem: processedItem_r3
      }));
    });
    ɵɵtemplate(3, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_3_Template, 3, 2, "ng-container", 14)(4, MegaMenuSub_ul_0_ng_template_3_li_1_ng_container_4_Template, 2, 4, "ng-container", 14);
    ɵɵelementEnd();
    ɵɵtemplate(5, MegaMenuSub_ul_0_ng_template_3_li_1_div_5_Template, 3, 3, "div", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext();
    const processedItem_r3 = ctx_r9.$implicit;
    const index_r11 = ctx_r9.index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.getItemProp(processedItem_r3, "styleClass"));
    ɵɵproperty("ngStyle", ctx_r1.getItemProp(processedItem_r3, "style"))("ngClass", ctx_r1.getItemClass(processedItem_r3))("tooltipOptions", ctx_r1.getItemProp(processedItem_r3, "tooltipOptions"));
    ɵɵattribute("id", ctx_r1.getItemId(processedItem_r3))("data-pc-section", "menuitem")("data-p-highlight", ctx_r1.isItemActive(processedItem_r3))("data-p-focused", ctx_r1.isItemFocused(processedItem_r3))("data-p-disabled", ctx_r1.isItemDisabled(processedItem_r3))("aria-label", ctx_r1.getItemLabel(processedItem_r3))("aria-disabled", ctx_r1.isItemDisabled(processedItem_r3) || void 0)("aria-haspopup", ctx_r1.isItemGroup(processedItem_r3) && !ctx_r1.getItemProp(processedItem_r3, "to") ? "menu" : void 0)("aria-expanded", ctx_r1.isItemGroup(processedItem_r3) ? ctx_r1.isItemActive(processedItem_r3) : void 0)("aria-level", ctx_r1.level + 1)("aria-setsize", ctx_r1.getAriaSetSize())("aria-posinset", ctx_r1.getAriaPosInset(index_r11));
    ɵɵadvance(2);
    ɵɵattribute("data-pc-section", "content");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isItemVisible(processedItem_r3) && ctx_r1.isItemGroup(processedItem_r3));
  }
}
function MegaMenuSub_ul_0_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MegaMenuSub_ul_0_ng_template_3_li_0_Template, 1, 5, "li", 9)(1, MegaMenuSub_ul_0_ng_template_3_li_1_Template, 6, 21, "li", 10);
  }
  if (rf & 2) {
    const processedItem_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r1.isItemVisible(processedItem_r3) && ctx_r1.getItemProp(processedItem_r3, "separator"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isItemVisible(processedItem_r3) && !ctx_r1.getItemProp(processedItem_r3, "separator"));
  }
}
function MegaMenuSub_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ul", 5, 0);
    ɵɵlistener("keydown", function MegaMenuSub_ul_0_Template_ul_keydown_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.menuKeydown.emit($event));
    })("focus", function MegaMenuSub_ul_0_Template_ul_focus_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.menuFocus.emit($event));
    })("blur", function MegaMenuSub_ul_0_Template_ul_blur_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.menuBlur.emit($event));
    });
    ɵɵtemplate(2, MegaMenuSub_ul_0_li_2_Template, 2, 4, "li", 6)(3, MegaMenuSub_ul_0_ng_template_3_Template, 2, 2, "ng-template", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleMap(ɵɵpureFunction1(11, _c1, ctx_r1.scrollHeight));
    ɵɵproperty("ngClass", ɵɵpureFunction2(13, _c2, ctx_r1.root, !ctx_r1.root))("tabindex", ctx_r1.tabindex);
    ɵɵattribute("role", ctx_r1.root ? "menubar" : "menu")("id", ctx_r1.id)("aria-orientation", ctx_r1.orientation)("aria-activedescendant", ctx_r1.focusedItemId)("data-pc-section", ctx_r1.root ? "root" : "submenu");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.submenu);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.items);
  }
}
var _c6 = ["start"];
var _c7 = ["end"];
var _c8 = ["menuicon"];
var _c9 = ["submenuicon"];
var _c10 = ["item"];
var _c11 = ["button"];
var _c12 = ["buttonicon"];
var _c13 = ["menubutton"];
var _c14 = ["rootmenu"];
var _c15 = ["container"];
var _c16 = (a0) => ({
  flexDirection: a0
});
var _c17 = (a0, a1, a2, a3) => ({
  "p-megamenu p-component": true,
  "p-megamenu-mobile": a0,
  "p-megamenu-mobile-active": a1,
  "p-megamenu-horizontal": a2,
  "p-megamenu-vertical": a3
});
function MegaMenu_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MegaMenu_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, MegaMenu_div_2_ng_container_1_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.startTemplate || ctx_r1._startTemplate);
  }
}
function MegaMenu_ng_container_3_a_1_BarsIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "BarsIcon");
  }
}
function MegaMenu_ng_container_3_a_1_3_ng_template_0_Template(rf, ctx) {
}
function MegaMenu_ng_container_3_a_1_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, MegaMenu_ng_container_3_a_1_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MegaMenu_ng_container_3_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 11, 2);
    ɵɵlistener("click", function MegaMenu_ng_container_3_a_1_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.menuButtonClick($event));
    })("keydown", function MegaMenu_ng_container_3_a_1_Template_a_keydown_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.menuButtonKeydown($event));
    });
    ɵɵtemplate(2, MegaMenu_ng_container_3_a_1_BarsIcon_2_Template, 1, 0, "BarsIcon", 5)(3, MegaMenu_ng_container_3_a_1_3_Template, 1, 0, null, 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("aria-haspopup", ctx_r1.model.length && ctx_r1.model.length > 0 ? true : false)("aria-expanded", ctx_r1.mobileActive)("aria-controls", ctx_r1.id)("aria-label", ctx_r1.config.translation.aria.navigation);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r1.buttonIconTemplate && !ctx_r1._buttonIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.buttonIconTemplate || ctx_r1._buttonIconTemplate);
  }
}
function MegaMenu_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, MegaMenu_ng_container_3_a_1_Template, 4, 6, "a", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.model && ctx_r1.model.length > 0);
  }
}
function MegaMenu_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MegaMenu_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function MegaMenu_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵtemplate(1, MegaMenu_div_7_ng_container_1_Template, 1, 0, "ng-container", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.endTemplate || ctx_r1._endTemplate);
  }
}
var theme = ({
  dt
}) => `
.p-megamenu {
    position: relative;
    display: flex;
    align-items: center;
    background: ${dt("megamenu.background")};
    border: 1px solid ${dt("megamenu.border.color")};
    border-radius: ${dt("megamenu.border.radius")};
    color: ${dt("megamenu.color")};
    gap: ${dt("megamenu.gap")};
}

.p-megamenu-start,
.p-megamenu-end {
    display: flex;
    align-items: center;
}

.p-megamenu-root-list {
    margin: 0;
    padding: 0;
    list-style: none;
    outline: 0 none;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: ${dt("megamenu.gap")};
}

.p-megamenu-root-list > .p-megamenu-item > .p-menumega-item-content {
    border-radius: ${dt("megamenu.base.item.border.radius")};
}

.p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content > .p-megamenu-item-link {
    padding: ${dt("megamenu.base.item.padding")};
}

.p-megamenu-item-content {
    transition: background ${dt("megamenu.transition.duration")}, color ${dt("megamenu.transition.duration")};
    border-radius: ${dt("megamenu.item.border.radius")};
    color: ${dt("megamenu.item.color")};
}

.p-megamenu-item-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
    color: inherit;
    padding: ${dt("megamenu.item.padding")};
    gap: ${dt("megamenu.item.gap")};
    user-select: none;
    outline: 0 none;
}

.p-megamenu-item-label {
    line-height: 1;
}

.p-megamenu-item-icon {
    color: ${dt("megamenu.item.icon.color")};
}

.p-megamenu-submenu-icon {
    color: ${dt("megamenu.submenu.icon.color")};
    font-size: ${dt("megamenu.submenu.icon.size")};
    width: ${dt("megamenu.submenu.icon.size")};
    height: ${dt("megamenu.submenu.icon.size")};
}

.p-megamenu-item.p-focus > .p-megamenu-item-content {
    color: ${dt("megamenu.item.focus.color")};
    background: ${dt("megamenu.item.focus.background")};
}

.p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-item-icon {
    color: ${dt("megamenu.item.icon.focus.color")};
}

.p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-submenu-icon {
    color: ${dt("megamenu.submenu.icon.focus.color")};
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover {
    color: ${dt("megamenu.item.focus.color")};
    background: ${dt("megamenu.item.focus.background")};
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-item-icon {
    color: ${dt("megamenu.item.icon.focus.color")};
}

.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-submenu-icon {
    color: ${dt("megamenu.submenu.icon.focus.color")};
}

.p-megamenu-item-active > .p-megamenu-item-content {
    color: ${dt("megamenu.item.active.color")};
    background: ${dt("megamenu.item.active.background")};
}

.p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-item-icon {
    color: ${dt("megamenu.item.icon.active.color")};
}

.p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
    color: ${dt("megamenu.submenu.icon.active.color")};
}

.p-megamenu-overlay {
    display: none;
    position: absolute;
    width: auto;
    z-index: 1;
    left: 0;
    min-width: 100%;
    padding: ${dt("megamenu.overlay.padding")};
    background: ${dt("megamenu.overlay.background")};
    color: ${dt("megamenu.overlay.color")};
    border: 1px solid ${dt("megamenu.overlay.border.color")};
    border-radius: ${dt("megamenu.overlay.border.radius")};
    box-shadow: ${dt("megamenu.overlay.shadow")};
}

.p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
    display: block;
}

.p-megamenu-submenu {
    margin: 0;
    list-style: none;
    padding: ${dt("megamenu.submenu.padding")};
    min-width: 12.5rem;
    display: flex;
    flex-direction: column;
    gap: ${dt("megamenu.submenu.gap")}
}

.p-megamenu-submenu-label {
    padding: ${dt("megamenu.submenu.label.padding")};
    color: ${dt("megamenu.submenu.label.color")};
    font-weight: ${dt("megamenu.submenu.label.font.weight")};
    background: ${dt("megamenu.submenu.label.background")};
}

.p-megamenu-separator {
    border-top: 1px solid ${dt("megamenu.separator.border.color")};
}

.p-megamenu-horizontal {
    align-items: center;
    padding: ${dt("megamenu.horizontal.orientation.padding")};
}

.p-megamenu-horizontal .p-megamenu-root-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: ${dt("megamenu.horizontal.orientation.gap")};
}

.p-megamenu-horizontal .p-megamenu-end {
    margin-left: auto;
    align-self: center;
}

.p-megamenu-vertical {
    display: inline-flex;
    min-width: 12.5rem;
    flex-direction: column;
    align-items: stretch;
    padding: ${dt("megamenu.vertical.orientation.padding")};
}

.p-megamenu-vertical .p-megamenu-root-list {
    align-items: stretch;
    flex-direction: column;
    gap: ${dt("megamenu.vertical.orientation.gap")};
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
    left: 100%;
    top: 0;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active >.p-megamenu-overlay:dir(rtl) {
    left: auto;
    right: 100%;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
    margin-left: auto;
}

.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
    transform: rotate(180deg);
}

.p-megamenu-grid {
    display: flex;
}

.p-megamenu-col-2,
.p-megamenu-col-3,
.p-megamenu-col-4,
.p-megamenu-col-6,
.p-megamenu-col-12 {
    flex: 0 0 auto;
    padding: ${dt("megamenu.overlay.gap")};
}

.p-megamenu-col-2 {
    width: 16.6667%;
}

.p-megamenu-col-3 {
    width: 25%;
}

.p-megamenu-col-4 {
    width: 33.3333%;
}

.p-megamenu-col-6 {
    width: 50%;
}

.p-megamenu-col-12 {
    width: 100%;
}

.p-megamenu-button {
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: ${dt("megamenu.mobile.button.size")};
    height: ${dt("megamenu.mobile.button.size")};
    position: relative;
    color: ${dt("megamenu.mobile.button.color")};
    border: 0 none;
    background: transparent;
    border-radius: ${dt("megamenu.mobile.button.border.radius")};
    transition: background ${dt("megamenu.transition.duration")}, color ${dt("megamenu.transition.duration")}, outline-color ${dt("megamenu.transition.duration")}, ox-shadow ${dt("megamenu.transition.duration")};
    outline-color: transparent;
}

.p-megamenu-button:hover {
    color: ${dt("megamenu.mobile.button.hover.color")};
    background: ${dt("megamenu.mobile.button.hover.background")};
}

.p-megamenu-button:focus-visible {
    box-shadow: ${dt("megamenu.mobile.button.focus.ring.shadow")};
    outline: ${dt("megamenu.mobile.button.focus.ring.width")} ${dt("megamenu.mobile.button.focus.ring.style")} ${dt("megamenu.mobile.button.focus.ring.color")};
    outline-offset: ${dt("megamenu.mobile.button.focus.ring.offset")};
}

.p-megamenu-mobile {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-button {
    display: flex;
}

.p-megamenu-mobile .p-megamenu-root-list {
    position: absolute;
    display: none;
    flex-direction: column;
    top: 100%;
    left: 0;
    z-index: 1;
    width: 100%;
    padding: ${dt("megamenu.submenu.padding")};
    gap: ${dt("megamenu.submenu.gap")};
    background: ${dt("megamenu.overlay.background")};
    border: 1px solid ${dt("megamenu.overlay.border.color")};
    box-shadow: ${dt("megamenu.overlay.shadow")};
}

.p-megamenu-mobile-active .p-megamenu-root-list {
    display: block;
}

.p-megamenu-mobile .p-megamenu-root-list .p-megamenu-item {
    width: 100%;
    position: static;
}

.p-megamenu-mobile .p-megamenu-overlay {
    position: static;
    border: 0 none;
    border-radius: 0;
    box-shadow: none;
}

.p-megamenu-mobile .p-megamenu-grid {
    flex-wrap: wrap;
    overflow: auto;
    max-height: 90%;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
    margin-left: auto;
    transition: transform 0.2s;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
    margin-left: 0;
    margin-right: auto;
}

.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
    transform: rotate(-180deg);
}

/* For PrimeNG */
.p-megamenu-submenu-icon.p-iconwrapper {
    margin-left: auto;
}
`;
var classes = {
  root: ({
    instance
  }) => ["p-megamenu p-component", {
    "p-megamenu-mobile": instance.queryMatches,
    "p-megamenu-mobile-active": instance.mobileActive,
    "p-megamenu-horizontal": instance.horizontal,
    "p-megamenu-vertical": instance.vertical
  }],
  start: "p-megamenu-start",
  button: "p-megamenu-button",
  rootList: "p-megamenu-root-list",
  submenuLabel: ({
    instance,
    processedItem
  }) => ["p-megamenu-submenu-label", {
    "p-disabled": instance.isItemDisabled(processedItem)
  }],
  item: ({
    instance,
    processedItem
  }) => ["p-megamenu-item", {
    "p-megamenu-item-active": instance.isItemActive(processedItem),
    "p-focus": instance.isItemFocused(processedItem),
    "p-disabled": instance.isItemDisabled(processedItem)
  }],
  itemContent: "p-megamenu-item-content",
  itemLink: "p-megamenu-item-link",
  itemIcon: "p-megamenu-item-icon",
  itemLabel: "p-megamenu-item-label",
  submenuIcon: "p-megamenu-submenu-icon",
  overlay: "p-megamenu-overlay",
  grid: "p-megamenu-grid",
  column: ({
    instance,
    processedItem
  }) => {
    let length = instance.isItemGroup(processedItem) ? processedItem.items.length : 0;
    let columnClass;
    if (instance.$parentInstance.queryMatches) columnClass = "p-megamenu-col-12";
    else {
      switch (length) {
        case 2:
          columnClass = "p-megamenu-col-6";
          break;
        case 3:
          columnClass = "p-megamenu-col-4";
          break;
        case 4:
          columnClass = "p-megamenu-col-3";
          break;
        case 6:
          columnClass = "p-megamenu-col-2";
          break;
        default:
          columnClass = "p-megamenu-col-12";
          break;
      }
    }
    return columnClass;
  },
  submenu: "p-megamenu-submenu",
  separator: "p-megamenu-separator",
  end: "p-megamenu-end"
};
var MegaMenuStyle = class _MegaMenuStyle extends BaseStyle {
  name = "megamenu";
  theme = theme;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMegaMenuStyle_BaseFactory;
    return function MegaMenuStyle_Factory(__ngFactoryType__) {
      return (ɵMegaMenuStyle_BaseFactory || (ɵMegaMenuStyle_BaseFactory = ɵɵgetInheritedFactory(_MegaMenuStyle)))(__ngFactoryType__ || _MegaMenuStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _MegaMenuStyle,
    factory: _MegaMenuStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MegaMenuStyle, [{
    type: Injectable
  }], null, null);
})();
var MegaMenuClasses;
(function(MegaMenuClasses2) {
  MegaMenuClasses2["root"] = "p-megamenu";
  MegaMenuClasses2["start"] = "p-megamenu-start";
  MegaMenuClasses2["button"] = "p-megamenu-button";
  MegaMenuClasses2["rootList"] = "p-megamenu-root-list";
  MegaMenuClasses2["submenuItem"] = "p-megamenu-submenu-item";
  MegaMenuClasses2["item"] = "p-megamenu-item";
  MegaMenuClasses2["itemContent"] = "p-megamenu-item-content";
  MegaMenuClasses2["itemLink"] = "p-megamenu-item-link";
  MegaMenuClasses2["itemIcon"] = "p-megamenu-item-icon";
  MegaMenuClasses2["itemLabel"] = "p-megamenu-item-label";
  MegaMenuClasses2["submenuIcon"] = "p-megamenu-submenu-icon";
  MegaMenuClasses2["panel"] = "p-megamenu-panel";
  MegaMenuClasses2["grid"] = "p-megamenu-grid";
  MegaMenuClasses2["submenu"] = "p-megamenu-submenu";
  MegaMenuClasses2["submenuItemLabel"] = "p-megamenu-submenu-item-label";
  MegaMenuClasses2["separator"] = "p-megamenu-separator";
  MegaMenuClasses2["end"] = "p-megamenu-end";
})(MegaMenuClasses || (MegaMenuClasses = {}));
var MegaMenuSub = class _MegaMenuSub extends BaseComponent {
  id;
  items;
  itemTemplate;
  menuId;
  ariaLabel;
  ariaLabelledBy;
  level = 0;
  focusedItemId;
  disabled = false;
  orientation;
  activeItem;
  submenu;
  queryMatches = false;
  mobileActive = false;
  scrollHeight;
  tabindex = 0;
  root = false;
  itemClick = new EventEmitter();
  itemMouseEnter = new EventEmitter();
  menuFocus = new EventEmitter();
  menuBlur = new EventEmitter();
  menuKeydown = new EventEmitter();
  menubarViewChild;
  megaMenu = inject(forwardRef(() => MegaMenu));
  onItemClick(event, processedItem) {
    this.getItemProp(processedItem, "command", {
      originalEvent: event,
      item: processedItem.item
    });
    this.itemClick.emit({
      originalEvent: event,
      processedItem,
      isFocus: true
    });
  }
  getItemProp(processedItem, name, params = null) {
    return processedItem && processedItem.item ? resolve(processedItem.item[name], params) : void 0;
  }
  getItemId(processedItem) {
    return processedItem.item && processedItem.item?.id ? processedItem.item.id : `${this.menuId}_${processedItem.key}`;
  }
  getSubListId(processedItem) {
    return `${this.getItemId(processedItem)}_list`;
  }
  getItemClass(processedItem) {
    return __spreadProps(__spreadValues({}, this.getItemProp(processedItem, "class")), {
      "p-megamenu-item": true,
      "p-megamenu-item-active": this.isItemActive(processedItem),
      "p-focus": this.isItemFocused(processedItem),
      "p-disabled": this.isItemDisabled(processedItem)
    });
  }
  getItemLabel(processedItem) {
    return this.getItemProp(processedItem, "label");
  }
  getSeparatorItemClass(processedItem) {
    return __spreadProps(__spreadValues({}, this.getItemProp(processedItem, "class")), {
      "p-megamenu-separator": true
    });
  }
  getColumnClass(processedItem) {
    let length = this.isItemGroup(processedItem) ? processedItem.items.length : 0;
    let columnClass;
    if (this.queryMatches) columnClass = "p-megamenu-col-12";
    else {
      switch (length) {
        case 2:
          columnClass = "p-megamenu-col-6";
          break;
        case 3:
          columnClass = "p-megamenu-col-4";
          break;
        case 4:
          columnClass = "p-megamenu-col-3";
          break;
        case 6:
          columnClass = "p-megamenu-col-2";
          break;
        default:
          columnClass = "p-megamenu-col-12";
          break;
      }
    }
    return columnClass;
  }
  getSubmenuHeaderClass(processedItem) {
    return __spreadValues({
      "p-megamenu-submenu-label": true,
      "p-disabled": this.isItemDisabled(processedItem)
    }, this.getItemProp(processedItem, "class"));
  }
  isSubmenuVisible(submenu) {
    if (this.submenu && !this.root) {
      return this.isItemVisible(submenu);
    } else {
      return true;
    }
  }
  isItemVisible(processedItem) {
    return this.getItemProp(processedItem, "visible") !== false;
  }
  isItemActive(processedItem) {
    return isNotEmpty(this.activeItem) ? this.activeItem.key === processedItem.key : false;
  }
  isItemDisabled(processedItem) {
    return this.getItemProp(processedItem, "disabled");
  }
  isItemFocused(processedItem) {
    return this.focusedItemId === this.getItemId(processedItem);
  }
  isItemGroup(processedItem) {
    return isNotEmpty(processedItem.items);
  }
  getAriaSetSize() {
    return this.items.filter((processedItem) => this.isItemVisible(processedItem) && !this.getItemProp(processedItem, "separator")).length;
  }
  getAriaPosInset(index) {
    return index - this.items.slice(0, index).filter((processedItem) => this.isItemVisible(processedItem) && this.getItemProp(processedItem, "separator")).length + 1;
  }
  onItemMouseEnter(param) {
    const {
      event,
      processedItem
    } = param;
    this.itemMouseEnter.emit({
      originalEvent: event,
      processedItem
    });
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMegaMenuSub_BaseFactory;
    return function MegaMenuSub_Factory(__ngFactoryType__) {
      return (ɵMegaMenuSub_BaseFactory || (ɵMegaMenuSub_BaseFactory = ɵɵgetInheritedFactory(_MegaMenuSub)))(__ngFactoryType__ || _MegaMenuSub);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _MegaMenuSub,
    selectors: [["p-megaMenuSub"], ["p-megamenu-sub"]],
    viewQuery: function MegaMenuSub_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.menubarViewChild = _t.first);
      }
    },
    inputs: {
      id: "id",
      items: "items",
      itemTemplate: "itemTemplate",
      menuId: "menuId",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      level: [2, "level", "level", numberAttribute],
      focusedItemId: "focusedItemId",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      orientation: "orientation",
      activeItem: "activeItem",
      submenu: "submenu",
      queryMatches: [2, "queryMatches", "queryMatches", booleanAttribute],
      mobileActive: [2, "mobileActive", "mobileActive", booleanAttribute],
      scrollHeight: "scrollHeight",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      root: [2, "root", "root", booleanAttribute]
    },
    outputs: {
      itemClick: "itemClick",
      itemMouseEnter: "itemMouseEnter",
      menuFocus: "menuFocus",
      menuBlur: "menuBlur",
      menuKeydown: "menuKeydown"
    },
    features: [ɵɵInheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["menubar", ""], ["listItem", ""], ["htmlLabel", ""], ["htmlRouteLabel", ""], [3, "ngClass", "style", "tabindex", "keydown", "focus", "blur", 4, "ngIf"], [3, "keydown", "focus", "blur", "ngClass", "tabindex"], ["role", "presentation", 3, "ngClass", "style", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], ["role", "presentation", 3, "ngClass"], ["role", "separator", 3, "style", "ngClass", 4, "ngIf"], ["role", "menuitem", "pTooltip", "", 3, "ngStyle", "ngClass", "class", "tooltipOptions", 4, "ngIf"], ["role", "separator", 3, "ngClass"], ["role", "menuitem", "pTooltip", "", 3, "ngStyle", "ngClass", "tooltipOptions"], [1, "p-megamenu-item-content", 3, "click", "mouseenter"], [4, "ngIf"], ["class", "p-megamenu-overlay", 4, "ngIf"], ["pRipple", "", 3, "target", "ngClass", 4, "ngIf"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], ["pRipple", "", 3, "target", "ngClass"], ["class", "p-megamenu-item-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-megamenu-item-label", 4, "ngIf", "ngIfElse"], [3, "styleClass", "value", 4, "ngIf"], [1, "p-megamenu-item-icon", 3, "ngClass", "ngStyle"], [1, "p-megamenu-item-label"], [1, "p-megamenu-item-label", 3, "innerHTML"], [3, "styleClass", "value"], [4, "ngTemplateOutlet"], [3, "ngClass"], [3, "ngClass", 4, "ngIf"], [3, "data-pc-section", "aria-hidden"], ["pRipple", "", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "ngClass", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-megamenu-overlay"], [1, "p-megamenu-grid"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "id", "submenu", "items", "itemTemplate", "mobileActive", "menuId", "focusedItemId", "level", "root", "itemClick", "itemMouseEnter", 4, "ngFor", "ngForOf"], [3, "itemClick", "itemMouseEnter", "id", "submenu", "items", "itemTemplate", "mobileActive", "menuId", "focusedItemId", "level", "root"]],
    template: function MegaMenuSub_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, MegaMenuSub_ul_0_Template, 4, 16, "ul", 4);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.isSubmenuVisible(ctx.submenu));
      }
    },
    dependencies: [_MegaMenuSub, CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterModule, RouterLink, RouterLinkActive, Ripple, TooltipModule, Tooltip, AngleDownIcon, AngleRightIcon, BadgeModule, Badge, SharedModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MegaMenuSub, [{
    type: Component,
    args: [{
      selector: "p-megaMenuSub, p-megamenu-sub",
      standalone: true,
      imports: [CommonModule, RouterModule, Ripple, TooltipModule, AngleDownIcon, AngleRightIcon, BadgeModule, SharedModule],
      template: `
        <ul
            *ngIf="isSubmenuVisible(submenu)"
            #menubar
            [ngClass]="{ 'p-megamenu-root-list': root, 'p-megamenu-submenu': !root }"
            [style]="{ 'max-height': scrollHeight, overflow: 'auto' }"
            [attr.role]="root ? 'menubar' : 'menu'"
            [attr.id]="id"
            [attr.aria-orientation]="orientation"
            [tabindex]="tabindex"
            [attr.aria-activedescendant]="focusedItemId"
            [attr.data-pc-section]="root ? 'root' : 'submenu'"
            (keydown)="menuKeydown.emit($event)"
            (focus)="menuFocus.emit($event)"
            (blur)="menuBlur.emit($event)"
        >
            <li *ngIf="submenu" [ngClass]="getSubmenuHeaderClass(submenu)" [style]="getItemProp(submenu, 'style')" role="presentation">
                {{ getItemLabel(submenu) }}
            </li>
            <ng-template ngFor let-processedItem [ngForOf]="items" let-index="index">
                <li
                    *ngIf="isItemVisible(processedItem) && getItemProp(processedItem, 'separator')"
                    [attr.id]="getItemId(processedItem)"
                    [style]="getItemProp(processedItem, 'style')"
                    [ngClass]="getSeparatorItemClass(processedItem)"
                    role="separator"
                    [attr.data-pc-section]="'separator'"
                ></li>
                <li
                    #listItem
                    *ngIf="isItemVisible(processedItem) && !getItemProp(processedItem, 'separator')"
                    role="menuitem"
                    [attr.id]="getItemId(processedItem)"
                    [attr.data-pc-section]="'menuitem'"
                    [attr.data-p-highlight]="isItemActive(processedItem)"
                    [attr.data-p-focused]="isItemFocused(processedItem)"
                    [attr.data-p-disabled]="isItemDisabled(processedItem)"
                    [attr.aria-label]="getItemLabel(processedItem)"
                    [attr.aria-disabled]="isItemDisabled(processedItem) || undefined"
                    [attr.aria-haspopup]="isItemGroup(processedItem) && !getItemProp(processedItem, 'to') ? 'menu' : undefined"
                    [attr.aria-expanded]="isItemGroup(processedItem) ? isItemActive(processedItem) : undefined"
                    [attr.aria-level]="level + 1"
                    [attr.aria-setsize]="getAriaSetSize()"
                    [attr.aria-posinset]="getAriaPosInset(index)"
                    [ngStyle]="getItemProp(processedItem, 'style')"
                    [ngClass]="getItemClass(processedItem)"
                    [class]="getItemProp(processedItem, 'styleClass')"
                    pTooltip
                    [tooltipOptions]="getItemProp(processedItem, 'tooltipOptions')"
                >
                    <div class="p-megamenu-item-content" [attr.data-pc-section]="'content'" (click)="onItemClick($event, processedItem)" (mouseenter)="onItemMouseEnter({ $event, processedItem })">
                        <ng-container *ngIf="!itemTemplate">
                            <a
                                *ngIf="!getItemProp(processedItem, 'routerLink')"
                                [attr.href]="getItemProp(processedItem, 'url')"
                                [attr.data-automationid]="getItemProp(processedItem, 'automationId')"
                                [attr.data-pc-section]="'action'"
                                [target]="getItemProp(processedItem, 'target')"
                                [ngClass]="{ 'p-megamenu-item-link': true, 'p-disabled': getItemProp(processedItem, 'disabled') }"
                                [attr.tabindex]="-1"
                                pRipple
                            >
                                <span
                                    *ngIf="getItemProp(processedItem, 'icon')"
                                    class="p-megamenu-item-icon"
                                    [ngClass]="getItemProp(processedItem, 'icon')"
                                    [ngStyle]="getItemProp(processedItem, 'iconStyle')"
                                    [attr.data-pc-section]="'icon'"
                                    [attr.tabindex]="-1"
                                >
                                </span>
                                <span *ngIf="getItemProp(processedItem, 'escape'); else htmlLabel" class="p-megamenu-item-label" [attr.data-pc-section]="'label'">
                                    {{ getItemLabel(processedItem) }}
                                </span>
                                <ng-template #htmlLabel>
                                    <span class="p-megamenu-item-label" [innerHTML]="getItemLabel(processedItem)" [attr.data-pc-section]="'label'"></span>
                                </ng-template>
                                <p-badge *ngIf="getItemProp(processedItem, 'badge')" [styleClass]="getItemProp(processedItem, 'badgeStyleClass')" [value]="getItemProp(processedItem, 'badge')" />
                                <ng-container *ngIf="isItemGroup(processedItem)">
                                    <ng-container *ngIf="!megaMenu.submenuIconTemplate && !megaMenu._submenuIconTemplate">
                                        @if (orientation === 'horizontal' || mobileActive) {
                                            <AngleDownIcon [ngClass]="'p-megamenu-submenu-icon'" [attr.data-pc-section]="'submenuicon'" [attr.aria-hidden]="true" />
                                        } @else {
                                            <AngleRightIcon [ngClass]="'p-megamenu-submenu-icon'" [attr.data-pc-section]="'submenuicon'" *ngIf="orientation === 'vertical'" [attr.aria-hidden]="true" />
                                        }
                                    </ng-container>
                                    <ng-template *ngTemplateOutlet="megaMenu.submenuIconTemplate || megaMenu._submenuIconTemplate" [attr.data-pc-section]="'submenuicon'" [attr.aria-hidden]="true"></ng-template>
                                </ng-container>
                            </a>
                            <a
                                *ngIf="getItemProp(processedItem, 'routerLink')"
                                [routerLink]="getItemProp(processedItem, 'routerLink')"
                                [attr.data-automationid]="getItemProp(processedItem, 'automationId')"
                                [attr.tabindex]="-1"
                                [attr.data-pc-section]="'action'"
                                [queryParams]="getItemProp(processedItem, 'queryParams')"
                                [routerLinkActive]="'p-megamenu-item-link-active'"
                                [routerLinkActiveOptions]="getItemProp(processedItem, 'routerLinkActiveOptions') || { exact: false }"
                                [target]="getItemProp(processedItem, 'target')"
                                [ngClass]="{ 'p-megamenu-item-link': true, 'p-disabled': getItemProp(processedItem, 'disabled') }"
                                [fragment]="getItemProp(processedItem, 'fragment')"
                                [queryParamsHandling]="getItemProp(processedItem, 'queryParamsHandling')"
                                [preserveFragment]="getItemProp(processedItem, 'preserveFragment')"
                                [skipLocationChange]="getItemProp(processedItem, 'skipLocationChange')"
                                [replaceUrl]="getItemProp(processedItem, 'replaceUrl')"
                                [state]="getItemProp(processedItem, 'state')"
                                pRipple
                            >
                                <span
                                    class="p-megamenu-item-icon"
                                    *ngIf="getItemProp(processedItem, 'icon')"
                                    [ngClass]="getItemProp(processedItem, 'icon')"
                                    [ngStyle]="getItemProp(processedItem, 'iconStyle')"
                                    [attr.data-pc-section]="'icon'"
                                    [attr.tabindex]="-1"
                                ></span>
                                <span class="p-megamenu-item-label" *ngIf="getItemProp(processedItem, 'escape'); else htmlRouteLabel">{{ getItemLabel(processedItem) }}</span>
                                <ng-template #htmlRouteLabel><span class="p-megamenu-item-label" [innerHTML]="getItemLabel(processedItem)" [attr.data-pc-section]="'label'"></span></ng-template>
                                <p-badge *ngIf="getItemProp(processedItem, 'badge')" [styleClass]="getItemProp(processedItem, 'badgeStyleClass')" [value]="getItemProp(processedItem, 'badge')" />
                                <ng-container *ngIf="isItemGroup(processedItem)">
                                    <ng-container *ngIf="!megaMenu.submenuIconTemplate && !megaMenu._submenuIconTemplate">
                                        <AngleDownIcon [styleClass]="'p-megamenu-submenu-icon'" [attr.data-pc-section]="'submenuicon'" *ngIf="orientation === 'horizontal'" [attr.aria-hidden]="true" />
                                        <AngleRightIcon [styleClass]="'p-megamenu-submenu-icon'" [attr.data-pc-section]="'submenuicon'" *ngIf="orientation === 'vertical'" [attr.aria-hidden]="true" />
                                    </ng-container>
                                    <ng-template *ngTemplateOutlet="megaMenu.submenuIconTemplate || megaMenu._submenuIconTemplate" [attr.data-pc-section]="'submenuicon'" [attr.aria-hidden]="true"></ng-template>
                                </ng-container>
                            </a>
                        </ng-container>
                        <ng-container *ngIf="itemTemplate">
                            <ng-template *ngTemplateOutlet="itemTemplate; context: { $implicit: processedItem.item }"></ng-template>
                        </ng-container>
                    </div>
                    <div *ngIf="isItemVisible(processedItem) && isItemGroup(processedItem)" class="p-megamenu-overlay" [attr.data-pc-section]="'panel'">
                        <div class="p-megamenu-grid" [attr.data-pc-section]="'grid'">
                            <div *ngFor="let col of processedItem.items" [ngClass]="getColumnClass(processedItem)">
                                <p-megamenu-sub
                                    *ngFor="let submenu of col"
                                    [id]="getSubListId(submenu)"
                                    [submenu]="submenu"
                                    [items]="submenu.items"
                                    [itemTemplate]="itemTemplate"
                                    [mobileActive]="mobileActive"
                                    [menuId]="menuId"
                                    [focusedItemId]="focusedItemId"
                                    [level]="level + 1"
                                    [root]="false"
                                    (itemClick)="itemClick.emit($event)"
                                    (itemMouseEnter)="onItemMouseEnter($event)"
                                >
                                </p-megamenu-sub>
                            </div>
                        </div>
                    </div>
                </li>
            </ng-template>
        </ul>
    `,
      encapsulation: ViewEncapsulation.None
    }]
  }], null, {
    id: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    menuId: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    level: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    focusedItemId: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    orientation: [{
      type: Input
    }],
    activeItem: [{
      type: Input
    }],
    submenu: [{
      type: Input
    }],
    queryMatches: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    mobileActive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    scrollHeight: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    root: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    itemClick: [{
      type: Output
    }],
    itemMouseEnter: [{
      type: Output
    }],
    menuFocus: [{
      type: Output
    }],
    menuBlur: [{
      type: Output
    }],
    menuKeydown: [{
      type: Output
    }],
    menubarViewChild: [{
      type: ViewChild,
      args: ["menubar", {
        static: true
      }]
    }]
  });
})();
var MegaMenu = class _MegaMenu extends BaseComponent {
  /**
   * An array of menuitems.
   * @group Props
   */
  set model(value) {
    this._model = value;
    this._processedItems = this.createProcessedItems(this._model || []);
  }
  get model() {
    return this._model;
  }
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Defines the orientation.
   * @group Props
   */
  orientation = "horizontal";
  /**
   * Current id state as a string.
   * @group Props
   */
  id;
  /**
   * Defines a string value that labels an interactive element.
   * @group Props
   */
  ariaLabel;
  /**
   * Identifier of the underlying input element.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * The breakpoint to define the maximum width boundary.
   * @group Props
   */
  breakpoint = "960px";
  /**
   * Height of the viewport, a scrollbar is defined if height of list exceeds this value.
   * @group Props
   */
  scrollHeight = "20rem";
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  disabled = false;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Defines template option for start.
   * @group Templates
   */
  startTemplate;
  /**
   * Defines template option for end.
   * @group Templates
   */
  endTemplate;
  /**
   * Defines template option for menu icon.
   * @group Templates
   */
  menuIconTemplate;
  /**
   * Defines template option for submenu icon.
   * @group Templates
   */
  submenuIconTemplate;
  /**
   * Defines template option for submenu icon.
   * @group Templates
   */
  itemTemplate;
  /**
   * Custom menu button template on responsive mode.
   * @group Templates
   */
  buttonTemplate;
  /**
   * Custom menu button icon template on responsive mode.
   * @group Templates
   */
  buttonIconTemplate;
  templates;
  menubuttonViewChild;
  rootmenu;
  container;
  _startTemplate;
  _endTemplate;
  _menuIconTemplate;
  _submenuIconTemplate;
  _itemTemplate;
  _buttonTemplate;
  _buttonIconTemplate;
  outsideClickListener;
  resizeListener;
  dirty = false;
  focused = false;
  activeItem = signal(null);
  focusedItemInfo = signal({
    index: -1,
    level: 0,
    parentKey: "",
    item: null
  });
  searchValue = "";
  searchTimeout;
  _processedItems;
  _model;
  _componentStyle = inject(MegaMenuStyle);
  matchMediaListener;
  query;
  queryMatches = false;
  mobileActive = false;
  get visibleItems() {
    const processedItem = isNotEmpty(this.activeItem()) ? this.activeItem() : null;
    return processedItem ? processedItem.items.reduce((items, col) => {
      col.forEach((submenu) => {
        submenu.items.forEach((a) => {
          items.push(a);
        });
      });
      return items;
    }, []) : this.processedItems;
  }
  get processedItems() {
    if (!this._processedItems || !this._processedItems.length) {
      this._processedItems = this.createProcessedItems(this.model || []);
    }
    return this._processedItems;
  }
  get focusedItemId() {
    const focusedItem = this.focusedItemInfo();
    return focusedItem?.item && focusedItem.item?.id ? focusedItem.item.id : isNotEmpty(focusedItem.key) ? `${this.id}_${focusedItem.key}` : null;
  }
  constructor() {
    super();
    effect(() => {
      const activeItem = this.activeItem();
      if (isNotEmpty(activeItem)) {
        this.bindOutsideClickListener();
        this.bindResizeListener();
      } else {
        this.unbindOutsideClickListener();
        this.unbindResizeListener();
      }
    });
  }
  ngOnInit() {
    super.ngOnInit();
    this.bindMatchMediaListener();
    this.id = this.id || uuid("pn_id_");
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "start":
          this._startTemplate = item.template;
          break;
        case "end":
          this._endTemplate = item.template;
          break;
        case "menuicon":
          this._menuIconTemplate = item.template;
          break;
        case "submenuicon":
          this._submenuIconTemplate = item.template;
          break;
        case "item":
          this._itemTemplate = item.template;
          break;
        case "button":
          this._buttonTemplate = item.template;
          break;
        case "buttonicon":
          this._buttonIconTemplate = item.template;
          break;
        default:
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  bindMatchMediaListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.matchMediaListener) {
        const query = window.matchMedia(`(max-width: ${this.breakpoint})`);
        this.query = query;
        this.queryMatches = query.matches;
        this.matchMediaListener = () => {
          this.queryMatches = query.matches;
          this.mobileActive = false;
          this.cd.markForCheck();
        };
        query.addEventListener("change", this.matchMediaListener);
      }
    }
  }
  unbindMatchMediaListener() {
    if (this.matchMediaListener) {
      this.query.removeEventListener("change", this.matchMediaListener);
      this.matchMediaListener = null;
    }
  }
  createProcessedItems(items, level = 0, parent = {}, parentKey = "", columnIndex) {
    const processedItems = [];
    items && items.forEach((item, index) => {
      const key = (parentKey !== "" ? parentKey + "_" : "") + (columnIndex !== void 0 ? columnIndex + "_" : "") + index;
      const newItem = {
        item,
        index,
        level,
        key,
        parent,
        parentKey,
        columnIndex: columnIndex !== void 0 ? columnIndex : parent.columnIndex !== void 0 ? parent.columnIndex : index
      };
      newItem["items"] = level === 0 && item.items && item.items.length > 0 ? item.items.map((_items, _index) => this.createProcessedItems(_items, level + 1, newItem, key, _index)) : this.createProcessedItems(item.items, level + 1, newItem, key);
      processedItems.push(newItem);
    });
    return processedItems;
  }
  getItemProp(item, name) {
    return item ? resolve(item[name]) : void 0;
  }
  onItemClick(event) {
    const {
      originalEvent,
      processedItem
    } = event;
    const grouped = this.isProcessedItemGroup(processedItem);
    const root = isEmpty(processedItem.parent);
    const selected = this.isSelected(processedItem);
    if (selected) {
      const {
        index,
        key,
        parentKey,
        item
      } = processedItem;
      this.activeItem.set(null);
      this.focusedItemInfo.set({
        index,
        key,
        parentKey,
        item
      });
      this.dirty = !root;
      if (!this.mobileActive) {
        focus(this.rootmenu?.menubarViewChild?.nativeElement, {
          preventScroll: true
        });
      }
    } else {
      if (grouped) {
        this.onItemChange(event);
      } else {
        this.hide(originalEvent);
      }
    }
  }
  onItemMouseEnter(event) {
    if (!this.mobileActive && this.dirty) {
      this.onItemChange(event);
    }
  }
  menuButtonClick(event) {
    this.toggle(event);
  }
  menuButtonKeydown(event) {
    (event.code === "Enter" || event.code === "NumpadEnter" || event.code === "Space") && this.menuButtonClick(event);
  }
  toggle(event) {
    if (this.mobileActive) {
      this.mobileActive = false;
      zindexutils.clear(this.rootmenu.el.nativeElement);
      this.hide();
    } else {
      this.mobileActive = true;
      zindexutils.set("menu", this.rootmenu.el.nativeElement, this.config.zIndex.menu);
      setTimeout(() => {
        this.show();
      }, 0);
    }
    this.bindOutsideClickListener();
    event.preventDefault();
  }
  show() {
    this.focusedItemInfo.set({
      index: this.findFirstFocusedItemIndex(),
      level: 0,
      parentKey: ""
    });
    focus(this.rootmenu?.el.nativeElement);
  }
  scrollInView(index = -1) {
    const id = index !== -1 ? `${this.id}_${index}` : this.focusedItemId;
    let element;
    if (id === null && this.queryMatches) {
      element = this.menubuttonViewChild.nativeElement;
    } else {
      element = findSingle(this.rootmenu?.menubarViewChild?.nativeElement, `li[id="${id}"]`);
    }
    if (element) {
      element.scrollIntoView && element.scrollIntoView({
        block: "nearest",
        inline: "nearest",
        behavior: "smooth"
      });
    }
  }
  onItemChange(event) {
    const {
      processedItem,
      isFocus
    } = event;
    if (isEmpty(processedItem)) return;
    const {
      index,
      key,
      parentKey,
      items,
      item
    } = processedItem;
    const grouped = isNotEmpty(items);
    if (grouped) {
      this.activeItem.set(processedItem);
    }
    this.focusedItemInfo.set({
      index,
      key,
      parentKey,
      item
    });
    grouped && (this.dirty = true);
    isFocus && focus(this.rootmenu?.menubarViewChild?.nativeElement);
  }
  hide(event, isFocus) {
    if (this.mobileActive) {
      this.mobileActive = false;
      setTimeout(() => {
        focus(this.menubuttonViewChild?.nativeElement);
        this.scrollInView();
      }, 100);
    }
    this.activeItem.set(null);
    this.focusedItemInfo.set({
      index: -1,
      key: "",
      parentKey: "",
      item: null
    });
    isFocus && focus(this.rootmenu?.menubarViewChild?.nativeElement);
    this.dirty = false;
  }
  onMenuFocus(event) {
    this.focused = true;
    if (this.focusedItemInfo().index === -1) {
      const index = this.findFirstFocusedItemIndex();
      const processedItem = this.findVisibleItem(index);
      this.focusedItemInfo.set({
        index,
        key: processedItem.key,
        parentKey: processedItem.parentKey,
        item: processedItem.item
      });
    }
  }
  onMenuBlur(event) {
    this.focused = false;
    this.focusedItemInfo.set({
      index: -1,
      level: 0,
      parentKey: "",
      item: null
    });
    this.searchValue = "";
    this.dirty = false;
  }
  onKeyDown(event) {
    const metaKey = event.metaKey || event.ctrlKey;
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "ArrowLeft":
        this.onArrowLeftKey(event);
        break;
      case "ArrowRight":
        this.onArrowRightKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "Space":
        this.onSpaceKey(event);
        break;
      case "Enter":
        this.onEnterKey(event);
        break;
      case "Escape":
        this.onEscapeKey(event);
        break;
      case "Tab":
        this.onTabKey(event);
        break;
      case "PageDown":
      case "PageUp":
      case "Backspace":
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        if (!metaKey && isPrintableCharacter(event.key)) {
          this.searchItems(event, event.key);
        }
        break;
    }
  }
  findFirstFocusedItemIndex() {
    const selectedIndex = this.findSelectedItemIndex();
    return selectedIndex < 0 ? this.findFirstItemIndex() : selectedIndex;
  }
  findFirstItemIndex() {
    return this.visibleItems.findIndex((processedItem) => this.isValidItem(processedItem));
  }
  findSelectedItemIndex() {
    return this.visibleItems.findIndex((processedItem) => this.isValidSelectedItem(processedItem));
  }
  isProcessedItemGroup(processedItem) {
    return processedItem && isNotEmpty(processedItem.items);
  }
  isSelected(processedItem) {
    return isNotEmpty(this.activeItem()) ? this.activeItem().key === processedItem.key : false;
  }
  isValidSelectedItem(processedItem) {
    return this.isValidItem(processedItem) && this.isSelected(processedItem);
  }
  isValidItem(processedItem) {
    return !!processedItem && !this.isItemDisabled(processedItem.item) && !this.isItemSeparator(processedItem.item);
  }
  isItemDisabled(item) {
    return this.getItemProp(item, "disabled");
  }
  isItemSeparator(item) {
    return this.getItemProp(item, "separator");
  }
  isItemMatched(processedItem) {
    return this.isValidItem(processedItem) && this.getProccessedItemLabel(processedItem).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase());
  }
  isProccessedItemGroup(processedItem) {
    return processedItem && isNotEmpty(processedItem.items);
  }
  searchItems(event, char) {
    this.searchValue = (this.searchValue || "") + char;
    let itemIndex = -1;
    let matched = false;
    if (this.focusedItemInfo().index !== -1) {
      itemIndex = this.visibleItems.slice(this.focusedItemInfo().index).findIndex((processedItem) => this.isItemMatched(processedItem));
      itemIndex = itemIndex === -1 ? this.visibleItems.slice(0, this.focusedItemInfo().index).findIndex((processedItem) => this.isItemMatched(processedItem)) : itemIndex + this.focusedItemInfo().index;
    } else {
      itemIndex = this.visibleItems.findIndex((processedItem) => this.isItemMatched(processedItem));
    }
    if (itemIndex !== -1) {
      matched = true;
    }
    if (itemIndex === -1 && this.focusedItemInfo().index === -1) {
      itemIndex = this.findFirstFocusedItemIndex();
    }
    if (itemIndex !== -1) {
      this.changeFocusedItemInfo(event, itemIndex);
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchValue = "";
      this.searchTimeout = null;
    }, 500);
    return matched;
  }
  getProccessedItemLabel(processedItem) {
    return processedItem ? this.getItemLabel(processedItem.item) : void 0;
  }
  getItemLabel(item) {
    return this.getItemProp(item, "label");
  }
  changeFocusedItemInfo(event, index) {
    const processedItem = this.findVisibleItem(index);
    if (isNotEmpty(processedItem)) {
      const {
        key,
        parentKey,
        item
      } = processedItem;
      this.focusedItemInfo.set({
        index,
        key: key ? key : "",
        parentKey,
        item
      });
    }
    this.scrollInView();
  }
  onArrowDownKey(event) {
    if (this.orientation === "horizontal") {
      if (isNotEmpty(this.activeItem()) && this.activeItem().key === this.focusedItemInfo().key) {
        const {
          key,
          item
        } = this.activeItem();
        this.focusedItemInfo.set({
          index: -1,
          key: "",
          parentKey: key,
          item
        });
      } else {
        const processedItem = this.findVisibleItem(this.focusedItemInfo().index);
        const grouped = this.isProccessedItemGroup(processedItem);
        if (grouped) {
          const {
            parentKey,
            key,
            item
          } = processedItem;
          this.onItemChange({
            originalEvent: event,
            processedItem
          });
          this.focusedItemInfo.set({
            index: -1,
            key,
            parentKey,
            item
          });
          this.searchValue = "";
        }
      }
    }
    const itemIndex = this.focusedItemInfo().index !== -1 ? this.findNextItemIndex(this.focusedItemInfo().index) : this.findFirstFocusedItemIndex();
    this.changeFocusedItemInfo(event, itemIndex);
    event.preventDefault();
  }
  onArrowRightKey(event) {
    const processedItem = this.findVisibleItem(this.focusedItemInfo().index);
    const grouped = this.isProccessedItemGroup(processedItem);
    if (grouped) {
      if (this.orientation === "vertical") {
        if (isNotEmpty(this.activeItem()) && this.activeItem().key === processedItem.key) {
          this.focusedItemInfo.set({
            index: -1,
            key: "",
            parentKey: this.activeItem().key,
            item: processedItem.item
          });
        } else {
          const processedItem2 = this.findVisibleItem(this.focusedItemInfo().index);
          const grouped2 = this.isProccessedItemGroup(processedItem2);
          if (grouped2) {
            this.onItemChange({
              originalEvent: event,
              processedItem: processedItem2
            });
            this.focusedItemInfo.set({
              index: -1,
              key: processedItem2.key,
              parentKey: processedItem2.parentKey,
              item: processedItem2.item
            });
            this.searchValue = "";
          }
        }
      }
      const itemIndex = this.focusedItemInfo().index !== -1 ? this.findNextItemIndex(this.focusedItemInfo().index) : this.findFirstFocusedItemIndex();
      this.changeFocusedItemInfo(event, itemIndex);
    } else {
      const columnIndex = processedItem.columnIndex + 1;
      const itemIndex = this.visibleItems.findIndex((item) => item.columnIndex === columnIndex);
      itemIndex !== -1 && this.changeFocusedItemInfo(event, itemIndex);
    }
    event.preventDefault();
  }
  onArrowUpKey(event) {
    if (event.altKey && this.orientation === "horizontal") {
      if (this.focusedItemInfo().index !== -1) {
        const processedItem = this.findVisibleItem(this.focusedItemInfo().index);
        const grouped = this.isProccessedItemGroup(processedItem);
        if (!grouped && isNotEmpty(this.activeItem)) {
          if (this.focusedItemInfo().index === 0) {
            this.focusedItemInfo.set({
              index: this.activeItem().index,
              key: this.activeItem().key,
              parentKey: this.activeItem().parentKey,
              item: processedItem.item
            });
            this.activeItem.set(null);
          } else {
            this.changeFocusedItemInfo(event, this.findFirstItemIndex());
          }
        }
      }
      event.preventDefault();
    } else {
      const itemIndex = this.focusedItemInfo().index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo().index) : this.findLastFocusedItemIndex();
      this.changeFocusedItemInfo(event, itemIndex);
      event.preventDefault();
    }
  }
  onArrowLeftKey(event) {
    const processedItem = this.findVisibleItem(this.focusedItemInfo().index);
    const grouped = this.isProccessedItemGroup(processedItem);
    if (grouped) {
      if (this.orientation === "horizontal") {
        const itemIndex = this.focusedItemInfo().index !== -1 ? this.findPrevItemIndex(this.focusedItemInfo().index) : this.findLastFocusedItemIndex();
        this.changeFocusedItemInfo(event, itemIndex);
      }
    } else {
      if (this.orientation === "vertical" && isNotEmpty(this.activeItem())) {
        if (processedItem.columnIndex === 0) {
          this.focusedItemInfo.set({
            index: this.activeItem().index,
            key: this.activeItem().key,
            parentKey: this.activeItem().parentKey,
            item: processedItem.item
          });
          this.activeItem.set(null);
        }
      }
      const columnIndex = processedItem.columnIndex - 1;
      const itemIndex = this.visibleItems.findIndex((item) => item.columnIndex === columnIndex);
      itemIndex !== -1 && this.changeFocusedItemInfo(event, itemIndex);
    }
    event.preventDefault();
  }
  onHomeKey(event) {
    this.changeFocusedItemInfo(event, this.findFirstItemIndex());
    event.preventDefault();
  }
  onEndKey(event) {
    this.changeFocusedItemInfo(event, this.findLastItemIndex());
    event.preventDefault();
  }
  onSpaceKey(event) {
    this.onEnterKey(event);
  }
  onEscapeKey(event) {
    if (isNotEmpty(this.activeItem())) {
      this.focusedItemInfo.set({
        index: this.activeItem().index,
        key: this.activeItem().key,
        item: this.activeItem().item
      });
      this.activeItem.set(null);
    }
    event.preventDefault();
  }
  onTabKey(event) {
    if (this.focusedItemInfo().index !== -1) {
      const processedItem = this.findVisibleItem(this.focusedItemInfo().index);
      const grouped = this.isProccessedItemGroup(processedItem);
      !grouped && this.onItemChange({
        originalEvent: event,
        processedItem
      });
    }
    this.hide();
  }
  onEnterKey(event) {
    if (this.focusedItemInfo().index !== -1) {
      const element = findSingle(this.rootmenu?.el?.nativeElement, `li[id="${`${this.focusedItemId}`}"]`);
      const anchorElement = element && findSingle(element, 'a[data-pc-section="action"]');
      anchorElement ? anchorElement.click() : element && element.click();
      const processedItem = this.visibleItems[this.focusedItemInfo().index];
      const grouped = this.isProccessedItemGroup(processedItem);
      !grouped && this.changeFocusedItemInfo(event, this.findFirstFocusedItemIndex());
    }
    event.preventDefault();
  }
  findVisibleItem(index) {
    return isNotEmpty(this.visibleItems) ? this.visibleItems[index] : null;
  }
  findLastFocusedItemIndex() {
    const selectedIndex = this.findSelectedItemIndex();
    return selectedIndex < 0 ? this.findLastItemIndex() : selectedIndex;
  }
  findLastItemIndex() {
    return findLastIndex(this.visibleItems, (processedItem) => this.isValidItem(processedItem));
  }
  findPrevItemIndex(index) {
    const matchedItemIndex = index > 0 ? findLastIndex(this.visibleItems.slice(0, index), (processedItem) => this.isValidItem(processedItem)) : -1;
    return matchedItemIndex > -1 ? matchedItemIndex : index;
  }
  findNextItemIndex(index) {
    const matchedItemIndex = index < this.visibleItems.length - 1 ? this.visibleItems.slice(index + 1).findIndex((processedItem) => this.isValidItem(processedItem)) : -1;
    return matchedItemIndex > -1 ? matchedItemIndex + index + 1 : index;
  }
  bindResizeListener() {
    if (!this.resizeListener) {
      this.resizeListener = (event) => {
        if (!isTouchDevice()) {
          this.hide(event, true);
        }
        this.mobileActive = false;
      };
      window.addEventListener("resize", this.resizeListener);
    }
  }
  bindOutsideClickListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.outsideClickListener) {
        this.outsideClickListener = this.renderer.listen(this.document, "click", (event) => {
          const isOutsideContainer = this.container?.nativeElement !== event.target && !this.container?.nativeElement.contains(event.target);
          if (isOutsideContainer) {
            this.hide();
          }
        });
      }
    }
  }
  unbindOutsideClickListener() {
    if (this.outsideClickListener) {
      this.outsideClickListener();
      this.outsideClickListener = null;
    }
  }
  unbindResizeListener() {
    if (this.resizeListener) {
      window.removeEventListener("resize", this.resizeListener);
      this.resizeListener = null;
    }
  }
  ngOnDestroy() {
    this.unbindOutsideClickListener();
    this.unbindResizeListener();
    this.unbindMatchMediaListener();
    super.ngOnDestroy();
  }
  static ɵfac = function MegaMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MegaMenu)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MegaMenu,
    selectors: [["p-megaMenu"], ["p-megamenu"], ["p-mega-menu"]],
    contentQueries: function MegaMenu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c6, 4);
        ɵɵcontentQuery(dirIndex, _c7, 4);
        ɵɵcontentQuery(dirIndex, _c8, 4);
        ɵɵcontentQuery(dirIndex, _c9, 4);
        ɵɵcontentQuery(dirIndex, _c10, 4);
        ɵɵcontentQuery(dirIndex, _c11, 4);
        ɵɵcontentQuery(dirIndex, _c12, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.startTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.endTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.menuIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.submenuIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.buttonTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.buttonIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function MegaMenu_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c13, 5);
        ɵɵviewQuery(_c14, 5);
        ɵɵviewQuery(_c15, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.menubuttonViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rootmenu = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
      }
    },
    inputs: {
      model: "model",
      style: "style",
      styleClass: "styleClass",
      orientation: "orientation",
      id: "id",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      breakpoint: "breakpoint",
      scrollHeight: "scrollHeight",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute]
    },
    features: [ɵɵProvidersFeature([MegaMenuStyle]), ɵɵInheritDefinitionFeature],
    decls: 8,
    vars: 36,
    consts: [["container", ""], ["rootmenu", ""], ["menubutton", ""], [3, "ngClass", "ngStyle"], ["class", "p-megamenu-start", 4, "ngIf"], [4, "ngIf"], [4, "ngTemplateOutlet"], [3, "itemClick", "menuFocus", "menuBlur", "menuKeydown", "itemMouseEnter", "itemTemplate", "items", "menuId", "root", "orientation", "ariaLabel", "disabled", "tabindex", "activeItem", "level", "ariaLabelledBy", "focusedItemId", "mobileActive", "queryMatches", "scrollHeight"], ["class", "p-megamenu-end", 4, "ngIf"], [1, "p-megamenu-start"], ["role", "button", "tabindex", "0", "class", "p-megamenu-button", 3, "click", "keydown", 4, "ngIf"], ["role", "button", "tabindex", "0", 1, "p-megamenu-button", 3, "click", "keydown"], [1, "p-megamenu-end"]],
    template: function MegaMenu_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 3, 0);
        ɵɵtemplate(2, MegaMenu_div_2_Template, 2, 1, "div", 4)(3, MegaMenu_ng_container_3_Template, 2, 1, "ng-container", 5)(4, MegaMenu_ng_container_4_Template, 1, 0, "ng-container", 6);
        ɵɵelementStart(5, "p-megamenu-sub", 7, 1);
        ɵɵlistener("itemClick", function MegaMenu_Template_p_megamenu_sub_itemClick_5_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onItemClick($event));
        })("menuFocus", function MegaMenu_Template_p_megamenu_sub_menuFocus_5_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onMenuFocus($event));
        })("menuBlur", function MegaMenu_Template_p_megamenu_sub_menuBlur_5_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onMenuBlur($event));
        })("menuKeydown", function MegaMenu_Template_p_megamenu_sub_menuKeydown_5_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onKeyDown($event));
        })("itemMouseEnter", function MegaMenu_Template_p_megamenu_sub_itemMouseEnter_5_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onItemMouseEnter($event));
        });
        ɵɵelementEnd();
        ɵɵtemplate(7, MegaMenu_div_7_Template, 2, 1, "div", 8);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵstyleMap(ɵɵpureFunction1(29, _c16, ctx.orientation == "vertical" && ctx.queryMatches ? "row" : ""));
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ɵɵpureFunction4(31, _c17, ctx.queryMatches, ctx.mobileActive, ctx.orientation == "horizontal", ctx.orientation == "vertical"))("ngStyle", ctx.style);
        ɵɵattribute("data-pc-section", "root")("data-pc-name", "megamenu")("id", ctx.id);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.startTemplate || ctx._startTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.buttonTemplate && !ctx._buttonTemplate);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.buttonTemplate || ctx._buttonTemplate);
        ɵɵadvance();
        ɵɵproperty("itemTemplate", ctx.itemTemplate || ctx._itemTemplate)("items", ctx.processedItems)("menuId", ctx.id)("root", true)("orientation", ctx.orientation)("ariaLabel", ctx.ariaLabel)("disabled", ctx.disabled)("tabindex", !ctx.disabled ? ctx.tabindex : -1)("activeItem", ctx.activeItem())("level", 0)("ariaLabelledBy", ctx.ariaLabelledBy)("focusedItemId", ctx.focused ? ctx.focusedItemId : void 0)("mobileActive", ctx.mobileActive)("queryMatches", ctx.queryMatches)("scrollHeight", ctx.scrollHeight);
        ɵɵattribute("id", ctx.id + "_list");
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.endTemplate || ctx._endTemplate);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, NgStyle, RouterModule, MegaMenuSub, TooltipModule, BarsIcon, BadgeModule, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MegaMenu, [{
    type: Component,
    args: [{
      selector: "p-megaMenu, p-megamenu, p-mega-menu",
      standalone: true,
      imports: [CommonModule, RouterModule, MegaMenuSub, TooltipModule, BarsIcon, BadgeModule, SharedModule],
      template: `
        <div
            [ngClass]="{
                'p-megamenu p-component': true,
                'p-megamenu-mobile': queryMatches,
                'p-megamenu-mobile-active': mobileActive,
                'p-megamenu-horizontal': orientation == 'horizontal',
                'p-megamenu-vertical': orientation == 'vertical'
            }"
            [class]="styleClass"
            [style]="{ flexDirection: orientation == 'vertical' && queryMatches ? 'row' : '' }"
            [ngStyle]="style"
            [attr.data-pc-section]="'root'"
            [attr.data-pc-name]="'megamenu'"
            [attr.id]="id"
            #container
        >
            <div class="p-megamenu-start" *ngIf="startTemplate || _startTemplate">
                <ng-container *ngTemplateOutlet="startTemplate || _startTemplate"></ng-container>
            </div>
            <ng-container *ngIf="!buttonTemplate && !_buttonTemplate">
                <a
                    *ngIf="model && model.length > 0"
                    #menubutton
                    role="button"
                    tabindex="0"
                    class="p-megamenu-button"
                    [attr.aria-haspopup]="model.length && model.length > 0 ? true : false"
                    [attr.aria-expanded]="mobileActive"
                    [attr.aria-controls]="id"
                    [attr.aria-label]="config.translation.aria.navigation"
                    (click)="menuButtonClick($event)"
                    (keydown)="menuButtonKeydown($event)"
                >
                    <BarsIcon *ngIf="!buttonIconTemplate && !_buttonIconTemplate" />
                    <ng-template *ngTemplateOutlet="buttonIconTemplate || _buttonIconTemplate"></ng-template>
                </a>
            </ng-container>
            <ng-container *ngTemplateOutlet="buttonTemplate || _buttonTemplate"></ng-container>
            <p-megamenu-sub
                #rootmenu
                [itemTemplate]="itemTemplate || _itemTemplate"
                [items]="processedItems"
                [attr.id]="id + '_list'"
                [menuId]="id"
                [root]="true"
                [orientation]="orientation"
                [ariaLabel]="ariaLabel"
                [disabled]="disabled"
                [tabindex]="!disabled ? tabindex : -1"
                [activeItem]="activeItem()"
                [level]="0"
                [ariaLabelledBy]="ariaLabelledBy"
                [focusedItemId]="focused ? focusedItemId : undefined"
                [mobileActive]="mobileActive"
                (itemClick)="onItemClick($event)"
                (menuFocus)="onMenuFocus($event)"
                (menuBlur)="onMenuBlur($event)"
                (menuKeydown)="onKeyDown($event)"
                (itemMouseEnter)="onItemMouseEnter($event)"
                [queryMatches]="queryMatches"
                [scrollHeight]="scrollHeight"
            ></p-megamenu-sub>
            <div class="p-megamenu-end" *ngIf="endTemplate || _endTemplate">
                <ng-container *ngTemplateOutlet="endTemplate || _endTemplate"></ng-container>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [MegaMenuStyle]
    }]
  }], () => [], {
    model: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    breakpoint: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    startTemplate: [{
      type: ContentChild,
      args: ["start", {
        descendants: false
      }]
    }],
    endTemplate: [{
      type: ContentChild,
      args: ["end", {
        descendants: false
      }]
    }],
    menuIconTemplate: [{
      type: ContentChild,
      args: ["menuicon", {
        descendants: false
      }]
    }],
    submenuIconTemplate: [{
      type: ContentChild,
      args: ["submenuicon", {
        descendants: false
      }]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    buttonTemplate: [{
      type: ContentChild,
      args: ["button", {
        descendants: false
      }]
    }],
    buttonIconTemplate: [{
      type: ContentChild,
      args: ["buttonicon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    menubuttonViewChild: [{
      type: ViewChild,
      args: ["menubutton"]
    }],
    rootmenu: [{
      type: ViewChild,
      args: ["rootmenu"]
    }],
    container: [{
      type: ViewChild,
      args: ["container"]
    }]
  });
})();
var MegaMenuModule = class _MegaMenuModule {
  static ɵfac = function MegaMenuModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MegaMenuModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MegaMenuModule,
    imports: [MegaMenu, SharedModule],
    exports: [MegaMenu, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [MegaMenu, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MegaMenuModule, [{
    type: NgModule,
    args: [{
      imports: [MegaMenu, SharedModule],
      exports: [MegaMenu, SharedModule]
    }]
  }], null, null);
})();
export {
  MegaMenu,
  MegaMenuClasses,
  MegaMenuModule,
  MegaMenuStyle,
  MegaMenuSub
};
//# sourceMappingURL=primeng_megamenu.js.map
