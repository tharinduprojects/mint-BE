import type { Schema, Attribute } from '@strapi/strapi';

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
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    trype: Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
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
      'blocks.cta-section': BlocksCtaSection;
      'blocks.hero': BlocksHero;
      'blocks.image-with-accordian': BlocksImageWithAccordian;
      'blocks.tabs-with-info': BlocksTabsWithInfo;
      'blocks.trusted-companies': BlocksTrustedCompanies;
      'elements.accordion-item': ElementsAccordionItem;
      'elements.button-link': ElementsButtonLink;
      'elements.list-item': ElementsListItem;
      'elements.tab-item': ElementsTabItem;
      'seo.meta-data': SeoMetaData;
    }
  }
}
