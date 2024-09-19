import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksBestPlaceCaraousel extends Schema.Component {
  collectionName: 'components_blocks_best_place_caraousels';
  info: {
    displayName: 'Best Place Caraousel';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    sliderItem: Attribute.Component<'elements.slider-item', true>;
    backDrop: Attribute.Media;
  };
}

export interface BlocksCenterTxtBgimg extends Schema.Component {
  collectionName: 'components_blocks_center_txt_bgimgs';
  info: {
    displayName: 'center-txt-bgimg';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    backDrop: Attribute.Media;
    bgColor: Attribute.String;
  };
}

export interface BlocksCenteredTextDescBgImage extends Schema.Component {
  collectionName: 'components_blocks_centered_text_desc_bg_images';
  info: {
    displayName: 'Centered Text Desc Bg Image';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    backDrop: Attribute.Media;
    bgColor: Attribute.String;
  };
}

export interface BlocksContactOptions extends Schema.Component {
  collectionName: 'components_blocks_contact_options';
  info: {
    displayName: 'Contact Options';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    contactRow: Attribute.Component<'elements.contact-row', true>;
  };
}

export interface BlocksCtaSection extends Schema.Component {
  collectionName: 'components_blocks_cta_sections';
  info: {
    displayName: 'CTA Section';
  };
  attributes: {
    heading: Attribute.String;
    buttonLink: Attribute.Component<'elements.button-link'>;
    backgroundImage: Attribute.Media;
  };
}

export interface BlocksHeroCentered extends Schema.Component {
  collectionName: 'components_blocks_hero_centereds';
  info: {
    displayName: 'Hero Centered';
  };
  attributes: {
    smallText: Attribute.String;
    titleText: Attribute.String;
    image: Attribute.Media;
  };
}

export interface BlocksHeroWeAre extends Schema.Component {
  collectionName: 'components_blocks_hero_we_ares';
  info: {
    displayName: 'Hero - We Are';
  };
  attributes: {
    titleSmall: Attribute.String;
    heading: Attribute.String;
    bgImage: Attribute.Media;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    cta: Attribute.Component<'elements.button-link'>;
    image: Attribute.Media;
    author: Attribute.String;
    backDrop: Attribute.Media;
    bgColor: Attribute.String;
  };
}

export interface BlocksImageWithAccordian extends Schema.Component {
  collectionName: 'components_blocks_image_with_accordians';
  info: {
    displayName: 'Image With Accordian';
    description: '';
  };
  attributes: {
    sectionTitle: Attribute.String;
    sectionDescription: Attribute.Text;
    sectionImage: Attribute.Media;
    accordianItem: Attribute.Component<'elements.accordion-item', true>;
    isFullWidth: Attribute.Boolean & Attribute.DefaultTo<true>;
    bgColor: Attribute.String;
    isRightMedia: Attribute.Boolean & Attribute.DefaultTo<false>;
    backDrop: Attribute.Media;
    textColor: Attribute.String;
    mediaCss: Attribute.Text;
  };
}

export interface BlocksLeftImageAndInfo extends Schema.Component {
  collectionName: 'components_blocks_left_image_and_infos';
  info: {
    displayName: 'Left Image & Info';
    description: '';
  };
  attributes: {
    leftMedia: Attribute.Media;
    heading: Attribute.String;
    descripion: Attribute.Text;
    bgColor: Attribute.String;
  };
}

export interface BlocksMIntHrmNumbers extends Schema.Component {
  collectionName: 'components_blocks_m_int_hrm_numbers';
  info: {
    displayName: 'MIntHrm Numbers';
    icon: 'clock';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    mintNumbers: Attribute.Component<'elements.mint-number-item', true>;
    bgColor: Attribute.String;
    backDrop: Attribute.Media;
  };
}

export interface BlocksNewsLetterSubscribe extends Schema.Component {
  collectionName: 'components_blocks_news_letter_subscribes';
  info: {
    displayName: 'News Letter Subscribe';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    formButton: Attribute.Component<'elements.button-link'>;
    sectionBackdrop: Attribute.Media;
  };
}

export interface BlocksOurKeyClients extends Schema.Component {
  collectionName: 'components_blocks_our_key_clients';
  info: {
    displayName: 'Our Key Clients';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    logos: Attribute.Media;
    bgColor: Attribute.String;
    grid: Attribute.Integer;
  };
}

export interface BlocksSProductCentered extends Schema.Component {
  collectionName: 'components_blocks_s_product_centereds';
  info: {
    displayName: 'S-Product Centered';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    cta: Attribute.Component<'elements.button-link'>;
    media: Attribute.Media;
    backdrop: Attribute.Media;
    bgColor: Attribute.String;
    isFullWidth: Attribute.Boolean & Attribute.DefaultTo<false>;
    textColor: Attribute.String;
  };
}

export interface BlocksSProductLr extends Schema.Component {
  collectionName: 'components_blocks_s_product_lrs';
  info: {
    displayName: 's-product-LR';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    feature: Attribute.Component<'elements.list-item', true>;
    cta: Attribute.Component<'elements.button-link'>;
    media: Attribute.Media;
    bgColor: Attribute.String;
    leftMedia: Attribute.Boolean & Attribute.DefaultTo<false>;
    isFullWidth: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface BlocksSheduleADemo extends Schema.Component {
  collectionName: 'components_blocks_shedule_a_demos';
  info: {
    displayName: 'Shedule a Demo';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    demoForm: Attribute.Component<'elements.demo-form', true>;
  };
}

export interface BlocksTabsWithInfo extends Schema.Component {
  collectionName: 'components_blocks_tabs_with_infos';
  info: {
    displayName: 'Tabs With Info';
    description: '';
  };
  attributes: {
    tabItem: Attribute.Component<'elements.tab-item', true>;
  };
}

export interface BlocksTrustedCompanies extends Schema.Component {
  collectionName: 'components_blocks_trusted_companies';
  info: {
    displayName: 'Trusted Companies';
  };
  attributes: {
    title: Attribute.String;
    logo: Attribute.Media;
  };
}

export interface CommonFooter extends Schema.Component {
  collectionName: 'components_common_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    footerLogo: Attribute.Media;
    footerDescription: Attribute.Text;
    footerMenuCol: Attribute.Component<'elements.footer-menu-col', true>;
    socialMedia: Attribute.Component<'elements.social-icon-item', true>;
  };
}

export interface ElementsAccordionItem extends Schema.Component {
  collectionName: 'components_elements_accordion_items';
  info: {
    displayName: 'Accordion Item';
  };
  attributes: {
    accordianTitle: Attribute.String;
    accordianDescription: Attribute.Text;
  };
}

export interface ElementsButtonLink extends Schema.Component {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'Button Link';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    trype: Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
    size: Attribute.Enumeration<['lg', 'sm']> & Attribute.DefaultTo<'lg'>;
  };
}

export interface ElementsContactItem extends Schema.Component {
  collectionName: 'components_elements_contact_items';
  info: {
    displayName: 'Contact Item';
    description: '';
  };
  attributes: {
    icon: Attribute.Media;
    title: Attribute.String;
    description: Attribute.String;
    email: Attribute.Email;
    address: Attribute.Text;
    phoneNo: Attribute.String;
    socialItem: Attribute.Component<'elements.social-icon-item', true>;
  };
}

export interface ElementsContactRow extends Schema.Component {
  collectionName: 'components_elements_contact_rows';
  info: {
    displayName: 'Contact Row';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    item: Attribute.Component<'elements.contact-item', true>;
  };
}

export interface ElementsDemoForm extends Schema.Component {
  collectionName: 'components_elements_demo_forms';
  info: {
    displayName: 'Demo Form';
    description: '';
  };
  attributes: {
    formTitle: Attribute.String;
    formDescription: Attribute.Text;
    formButton: Attribute.Component<'elements.button-link', true>;
    formBackDrop: Attribute.Media;
  };
}

export interface ElementsFooterMenuCol extends Schema.Component {
  collectionName: 'components_elements_footer_menu_cols';
  info: {
    displayName: 'Footer Menu Col';
    description: '';
  };
  attributes: {
    menuTitle: Attribute.String;
    menuItem: Attribute.Component<'elements.text-link', true>;
  };
}

export interface ElementsListItem extends Schema.Component {
  collectionName: 'components_elements_list_items';
  info: {
    displayName: 'List Item';
  };
  attributes: {
    listItem: Attribute.String;
  };
}

export interface ElementsMintNumberItem extends Schema.Component {
  collectionName: 'components_elements_mint_number_items';
  info: {
    displayName: 'mintNumberItem';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    number: Attribute.String;
  };
}

export interface ElementsSliderItem extends Schema.Component {
  collectionName: 'components_elements_slider_items';
  info: {
    displayName: 'Slider item';
  };
  attributes: {
    image: Attribute.Media;
    sliderDescription: Attribute.Text;
    clientName: Attribute.String;
    clientCompany: Attribute.String;
    clientImage: Attribute.Media;
  };
}

export interface ElementsSocialIconItem extends Schema.Component {
  collectionName: 'components_elements_social_icon_items';
  info: {
    displayName: 'Social Icon Item';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    iconImage: Attribute.Media;
  };
}

export interface ElementsTabItem extends Schema.Component {
  collectionName: 'components_elements_tab_items';
  info: {
    displayName: 'Tab Item';
    description: '';
  };
  attributes: {
    tabTitle: Attribute.String;
    contentHeading: Attribute.String;
    contentDescription: Attribute.Text;
    tabListFeatures: Attribute.Component<'elements.list-item', true>;
    tabMediaImage: Attribute.Media;
    tabIcon: Attribute.Media;
    tabCta: Attribute.Component<'elements.button-link'>;
  };
}

export interface ElementsTextLink extends Schema.Component {
  collectionName: 'components_elements_text_links';
  info: {
    displayName: 'Text Link';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.best-place-caraousel': BlocksBestPlaceCaraousel;
      'blocks.center-txt-bgimg': BlocksCenterTxtBgimg;
      'blocks.centered-text-desc-bg-image': BlocksCenteredTextDescBgImage;
      'blocks.contact-options': BlocksContactOptions;
      'blocks.cta-section': BlocksCtaSection;
      'blocks.hero-centered': BlocksHeroCentered;
      'blocks.hero-we-are': BlocksHeroWeAre;
      'blocks.hero': BlocksHero;
      'blocks.image-with-accordian': BlocksImageWithAccordian;
      'blocks.left-image-and-info': BlocksLeftImageAndInfo;
      'blocks.m-int-hrm-numbers': BlocksMIntHrmNumbers;
      'blocks.news-letter-subscribe': BlocksNewsLetterSubscribe;
      'blocks.our-key-clients': BlocksOurKeyClients;
      'blocks.s-product-centered': BlocksSProductCentered;
      'blocks.s-product-lr': BlocksSProductLr;
      'blocks.shedule-a-demo': BlocksSheduleADemo;
      'blocks.tabs-with-info': BlocksTabsWithInfo;
      'blocks.trusted-companies': BlocksTrustedCompanies;
      'common.footer': CommonFooter;
      'elements.accordion-item': ElementsAccordionItem;
      'elements.button-link': ElementsButtonLink;
      'elements.contact-item': ElementsContactItem;
      'elements.contact-row': ElementsContactRow;
      'elements.demo-form': ElementsDemoForm;
      'elements.footer-menu-col': ElementsFooterMenuCol;
      'elements.list-item': ElementsListItem;
      'elements.mint-number-item': ElementsMintNumberItem;
      'elements.slider-item': ElementsSliderItem;
      'elements.social-icon-item': ElementsSocialIconItem;
      'elements.tab-item': ElementsTabItem;
      'elements.text-link': ElementsTextLink;
      'seo.meta-data': SeoMetaData;
    }
  }
}
