// Details for Storefront API.
const storefrontAccessToken = {
  dev: 'a4760ee93dfa4734491aca87d983ee1a',
  prod: 'a4760ee93dfa4734491aca87d983ee1a'
}

function getAccessToken () {
  // eslint-disable-next-line no-undef
  return Shopify.shop === 'mindarc-integrations.myshopify.com' ? storefrontAccessToken.dev : storefrontAccessToken.prod
}

export const storefrontRequestConfig = {
  headers: {
    'Content-Type': 'application/graphql',
    'X-Shopify-Storefront-Access-Token': getAccessToken()
  }
}

// XHR request header is required to catch certain errors e.g. adding over quantity available
// https://community.shopify.com/c/Shopify-Design/AJAX-POST-cart-add-js-NEVER-returns-422-only-200-OK-on/m-p/375736
// https://stackoverflow.com/questions/17478731/whats-the-point-of-the-x-requested-with-header
export const xhrRequestConfig = {
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
}
