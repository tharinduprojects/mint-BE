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
      'blocks.cta-section': BlocksCtaSection;
      'blocks.hero': BlocksHero;
      'blocks.image-with-accordian': BlocksImageWithAccordian;
      'blocks.left-image-and-info': BlocksLeftImageAndInfo;
      'blocks.news-letter-subscribe': BlocksNewsLetterSubscribe;
      'blocks.shedule-a-demo': BlocksSheduleADemo;
      'blocks.tabs-with-info': BlocksTabsWithInfo;
      'blocks.trusted-companies': BlocksTrustedCompanies;
      'common.footer': CommonFooter;
      'elements.accordion-item': ElementsAccordionItem;
      'elements.button-link': ElementsButtonLink;
      'elements.demo-form': ElementsDemoForm;
      'elements.footer-menu-col': ElementsFooterMenuCol;
      'elements.list-item': ElementsListItem;
      'elements.slider-item': ElementsSliderItem;
      'elements.tab-item': ElementsTabItem;
      'elements.text-link': ElementsTextLink;
      'seo.meta-data': SeoMetaData;
    }
  }
}
